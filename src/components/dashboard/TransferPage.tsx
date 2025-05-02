import React, { useState } from 'react';
import {
    DollarSign,
    Check,
    AlertCircle,
    ChevronRight,
    Search,
    User,
    XCircle,
    PhoneCall
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

// Transaction steps
enum TransferStep {
    RECIPIENT = 0,
    AMOUNT = 1,
    REVIEW = 2,
    CONFIRMATION = 3
}

// Recent recipient type
interface RecentRecipient {
    id: string;
    name: string;
    accountNumber: string;
    bankName: string;
    lastTransfer: string;
}

// Mock recent recipients
const recentRecipients: RecentRecipient[] = [
    {
        id: '1',
        name: 'James Wilson',
        accountNumber: '****3456',
        bankName: 'Mountain Africa Credit Union',
        lastTransfer: '2 days ago'
    },
    {
        id: '2',
        name: 'Sarah Johnson',
        accountNumber: '****7890',
        bankName: 'Ghana Commercial Bank',
        lastTransfer: '1 week ago'
    },
    {
        id: '3',
        name: 'Michael Osei',
        accountNumber: '****2345',
        bankName: 'Adinkrah Trust Bank',
        lastTransfer: '2 weeks ago'
    }
];

const TransferPage: React.FC = () => {
    const { user } = useAuth();
    const [currentStep, setCurrentStep] = useState<TransferStep>(TransferStep.RECIPIENT);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRecipient, setSelectedRecipient] = useState<RecentRecipient | null>(null);
    const [newRecipient, setNewRecipient] = useState({
        name: '',
        accountNumber: '',
        bankName: '',
        email: ''
    });
    const [transferAmount, setTransferAmount] = useState('');
    const [transferNote, setTransferNote] = useState('');
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [transferFee, setTransferFee] = useState('2.50');
    const [transactionId, setTransactionId] = useState('');
    const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
    const [transferStatus, setTransferStatus] = useState<'pending' | 'error' | 'success'>('pending');

    // Filter recipients based on search query
    const filteredRecipients = recentRecipients.filter(recipient =>
        recipient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipient.accountNumber.includes(searchQuery) ||
        recipient.bankName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle recipient selection
    const handleSelectRecipient = (recipient: RecentRecipient) => {
        setSelectedRecipient(recipient);
        setIsAddingNew(false);
    };

    // Handle new recipient form change
    const handleNewRecipientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewRecipient(prev => ({ ...prev, [name]: value }));

        // Clear validation error when field is being edited
        if (validationErrors[name]) {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    // Validate recipient form
    const validateRecipientForm = (): boolean => {
        const errors: { [key: string]: string } = {};

        if (!newRecipient.name.trim()) {
            errors.name = 'Recipient name is required';
        }

        if (!newRecipient.accountNumber.trim()) {
            errors.accountNumber = 'Account number is required';
        } else if (!/^\d{10,16}$/.test(newRecipient.accountNumber.trim())) {
            errors.accountNumber = 'Enter a valid account number (10-16 digits)';
        }

        if (!newRecipient.bankName.trim()) {
            errors.bankName = 'Bank name is required';
        }

        if (newRecipient.email && !/^\S+@\S+\.\S+$/.test(newRecipient.email)) {
            errors.email = 'Enter a valid email address';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Validate amount
    const validateAmount = (): boolean => {
        const errors: { [key: string]: string } = {};

        if (!transferAmount.trim()) {
            errors.amount = 'Transfer amount is required';
        } else if (isNaN(Number(transferAmount)) || Number(transferAmount) <= 0) {
            errors.amount = 'Enter a valid amount greater than 0';
        } else if (Number(transferAmount) > 33000000) {
            errors.amount = 'Maximum transfer amount is $3,3000,000';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle continue to next step
    const handleContinue = () => {
        if (currentStep === TransferStep.RECIPIENT) {
            if (isAddingNew) {
                if (!validateRecipientForm()) return;
                // In a real app, you would save the new recipient to the database here
            } else if (!selectedRecipient) {
                setValidationErrors({ recipient: 'Please select a recipient or add a new one' });
                return;
            }
            setValidationErrors({});
        } else if (currentStep === TransferStep.AMOUNT) {
            if (!validateAmount()) return;
        } else if (currentStep === TransferStep.REVIEW) {
            // In a real app, you would submit the transaction to the backend here
            // Simulate transaction processing
            setTimeout(() => {
                setTransactionId(`TRX${Math.floor(Math.random() * 1000000)}`);
                // Set transfer status to error instead of success
                setTransferStatus('error');
            }, 500);
        }

        setCurrentStep(prev => prev + 1 as TransferStep);
    };

    // Handle back to previous step
    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1 as TransferStep);
        }
    };

    // Handle new transaction
    const handleNewTransaction = () => {
        setCurrentStep(TransferStep.RECIPIENT);
        setSelectedRecipient(null);
        setNewRecipient({
            name: '',
            accountNumber: '',
            bankName: '',
            email: ''
        });
        setTransferAmount('');
        setTransferNote('');
        setIsAddingNew(false);
        setValidationErrors({});
        setTransferStatus('pending');
    };

    // Render step indicator
    const renderStepIndicator = () => {
        return (
            <div className="flex items-center justify-between mb-8 px-2">
                {['Recipient', 'Amount', 'Review', 'Confirmation'].map((step, index) => (
                    <div key={step} className="flex items-center">
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${index < currentStep
                                    ? 'bg-green-500 text-white'
                                    : index === currentStep
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-200 text-gray-500'
                                }`}
                        >
                            {index < currentStep ? <Check size={16} /> : index + 1}
                        </div>
                        <span
                            className={`hidden sm:block ml-2 text-sm ${index <= currentStep ? 'text-gray-900 font-medium' : 'text-gray-500'
                                }`}
                        >
                            {step}
                        </span>
                        {index < 3 && (
                            <div className={`w-12 sm:w-24 h-1 mx-2 ${index < currentStep ? 'bg-green-500' : 'bg-gray-200'
                                }`}></div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    // Render recipient selection step
    const renderRecipientStep = () => {
        return (
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Select Recipient</h2>

                {/* Search and add new recipient */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Search recipients..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-lg font-medium ${isAddingNew
                                ? 'bg-primary-50 text-primary-600 border border-primary-200'
                                : 'bg-primary-600 text-white hover:bg-primary-700'
                            }`}
                        onClick={() => setIsAddingNew(!isAddingNew)}
                    >
                        {isAddingNew ? 'Cancel' : 'Add New Recipient'}
                    </button>
                </div>

                {/* Validation error */}
                {validationErrors.recipient && (
                    <div className="mb-4 text-red-500 text-sm flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {validationErrors.recipient}
                    </div>
                )}

                {/* Recent recipients list */}
                {!isAddingNew && (
                    <>
                        <h3 className="text-sm font-medium text-gray-500 mb-3">Recent Recipients</h3>
                        <div className="space-y-3 mb-6">
                            {filteredRecipients.length > 0 ? (
                                filteredRecipients.map(recipient => (
                                    <div
                                        key={recipient.id}
                                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedRecipient?.id === recipient.id
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
                                            }`}
                                        onClick={() => handleSelectRecipient(recipient)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mr-3">
                                                    <User size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">{recipient.name}</h4>
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <span>{recipient.accountNumber}</span>
                                                        <span className="mx-2">•</span>
                                                        <span>{recipient.bankName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Last transfer: {recipient.lastTransfer}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-6 text-gray-500">
                                    No recipients found matching "{searchQuery}"
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Add new recipient form */}
                {isAddingNew && (
                    <div className="border border-gray-200 rounded-lg p-4 mb-6">
                        <h3 className="text-lg font-medium mb-4">New Recipient Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Recipient Name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={`block w-full px-3 py-2 border ${validationErrors.name ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
                                    value={newRecipient.name}
                                    onChange={handleNewRecipientChange}
                                />
                                {validationErrors.name && (
                                    <p className="mt-1 text-sm text-red-500">{validationErrors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Account Number*
                                </label>
                                <input
                                    type="text"
                                    id="accountNumber"
                                    name="accountNumber"
                                    className={`block w-full px-3 py-2 border ${validationErrors.accountNumber ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
                                    value={newRecipient.accountNumber}
                                    onChange={handleNewRecipientChange}
                                />
                                {validationErrors.accountNumber && (
                                    <p className="mt-1 text-sm text-red-500">{validationErrors.accountNumber}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Bank Name*
                                </label>
                                <select
                                    id="bankName"
                                    name="bankName"
                                    className={`block w-full px-3 py-2 border ${validationErrors.bankName ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
                                        value={newRecipient.bankName}
                                        onChange={handleNewRecipientChange}
                                    >
                                        <option value="">Select a bank</option>
                                        <option value="Adinkrah Trust Bank">Adinkrah Trust Bank</option>
                                        <option value="Ghana Commercial Bank">Ghana Commercial Bank</option>
                                        <option value="Ecobank Ghana">Ecobank Ghana</option>
                                        <option value="Fidelity Bank Ghana">Fidelity Bank Ghana</option>
                                        <option value="Mountain Africa Credit Union">Mountain Africa Credit Union</option>
                                    </select>
                                    {validationErrors.bankName && (
                                        <p className="mt-1 text-sm text-red-500">{validationErrors.bankName}</p>
                                    )}
                                </div>
    
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address (Optional)
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`block w-full px-3 py-2 border ${validationErrors.email ? 'border-red-500' : 'border-gray-300'
                                            } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
                                        value={newRecipient.email}
                                        onChange={handleNewRecipientChange}
                                        placeholder="For transaction notifications"
                                    />
                                    {validationErrors.email && (
                                        <p className="mt-1 text-sm text-red-500">{validationErrors.email}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
    
                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-8">
                        <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            onClick={() => window.history.back()}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center"
                            onClick={handleContinue}
                        >
                            Continue
                            <ChevronRight size={18} className="ml-1" />
                        </button>
                    </div>
                </div>
            );
        };
    
        // Render amount input step
        const renderAmountStep = () => {
            return (
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-6">Enter Transfer Amount</h2>
    
                    {/* Recipient summary */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Recipient</h3>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mr-3">
                                <User size={20} />
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    {isAddingNew ? newRecipient.name : selectedRecipient?.name}
                                </h4>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>
                                        {isAddingNew ?
                                            newRecipient.accountNumber.replace(/(\d{4})$/, '****$1') :
                                            selectedRecipient?.accountNumber}
                                    </span>
                                    <span className="mx-2">•</span>
                                    <span>
                                        {isAddingNew ? newRecipient.bankName : selectedRecipient?.bankName}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Amount input */}
                    <div className="mb-6">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                            Amount*
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <DollarSign size={18} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="amount"
                                name="amount"
                                className={`block w-full pl-10 pr-3 py-3 text-xl border ${validationErrors.amount ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
                                placeholder="0.00"
                                value={transferAmount}
                                onChange={(e) => {
                                    // Only allow numbers and decimal point
                                    const value = e.target.value.replace(/[^0-9.]/g, '');
                                    // Ensure only one decimal point
                                    const parts = value.split('.');
                                    if (parts.length > 2) {
                                        return;
                                    }
                                    setTransferAmount(value);
    
                                    // Clear validation error when field is being edited
                                    if (validationErrors.amount) {
                                        setValidationErrors(prev => {
                                            const newErrors = { ...prev };
                                            delete newErrors.amount;
                                            return newErrors;
                                        });
                                    }
                                }}
                            />
                        </div>
                        {validationErrors.amount && (
                            <p className="mt-1 text-sm text-red-500">{validationErrors.amount}</p>
                        )}
                    </div>
    
                    {/* Transfer note */}
                    <div className="mb-6">
                        <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
                            Note (Optional)
                        </label>
                        <textarea
                            id="note"
                            name="note"
                            rows={3}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Add a note for this transfer"
                            value={transferNote}
                            onChange={(e) => setTransferNote(e.target.value)}
                        ></textarea>
                    </div>
    
                    {/* Fee information */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-500">Transfer Fee:</span>
                            <span className="font-medium">${transferFee}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Total Amount:</span>
                            <span className="font-medium">
                                ${transferAmount ? (Number(transferAmount) + Number(transferFee)).toFixed(2) : transferFee}
                            </span>
                        </div>
                    </div>
    
                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-8">
                        <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center"
                            onClick={handleContinue}
                        >
                            Continue
                            <ChevronRight size={18} className="ml-1" />
                        </button>
                    </div>
                </div>
            );
        };
    
        // Render review step
        const renderReviewStep = () => {
            return (
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-6">Review Transfer</h2>
    
                    <div className="space-y-6">
                        {/* Recipient information */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Recipient</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mr-3">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">
                                            {isAddingNew ? newRecipient.name : selectedRecipient?.name}
                                        </h4>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span>
                                                {isAddingNew ?
                                                    newRecipient.accountNumber.replace(/(\d{4})$/, '****$1') :
                                                    selectedRecipient?.accountNumber}
                                            </span>
                                            <span className="mx-2">•</span>
                                            <span>
                                                {isAddingNew ? newRecipient.bankName : selectedRecipient?.bankName}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* Transfer details */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Transfer Details</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Amount:</span>
                                        <span className="font-medium">${Number(transferAmount).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Transfer Fee:</span>
                                        <span className="font-medium">${transferFee}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                                        <span className="text-gray-700 font-medium">Total:</span>
                                        <span className="font-bold text-lg">
                                            ${(Number(transferAmount) + Number(transferFee)).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* Note */}
                        {transferNote && (
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Note</h3>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-gray-700">{transferNote}</p>
                                </div>
                            </div>
                        )}
    
                        {/* Date and time */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Date & Time</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700">{new Date().toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
    
                    {/* Terms and disclaimer */}
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                        <p className="text-sm text-yellow-800">
                            By proceeding with this transfer, you agree to our terms and conditions.
                            Please ensure all recipient details are correct as transfers cannot be reversed once processed.
                        </p>
                    </div>
    
                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-8">
                        <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center"
                            onClick={handleContinue}
                        >
                            Confirm Transfer
                            <ChevronRight size={18} className="ml-1" />
                        </button>
                    </div>
                </div>
            );
        };
    
        // Render confirmation step - Modified to show error instead of success
        const renderConfirmationStep = () => {
            return (
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <XCircle size={32} className="text-red-600" />
                    </div>
    
                    <h2 className="text-2xl font-bold mb-2">Transfer Requires Verification</h2>
                    <p className="text-gray-600 mb-6">
                        For security reasons, we cannot complete your transfer of ${Number(transferAmount).toFixed(2)} to {isAddingNew ? newRecipient.name : selectedRecipient?.name} at this time.
                    </p>
    
                    <div className="bg-red-50 p-6 rounded-lg mb-6 max-w-md mx-auto">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Transaction ID:</span>
                                <span className="font-medium">{transactionId}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Status:</span>
                                <span className="text-red-600 font-medium">Pending Verification</span>
                            </div>
                            <div className="text-left mt-4">
                                <h4 className="font-bold text-red-700 mb-2">Action Required:</h4>
                                <p className="text-gray-700 mb-3">
                                    Please contact our customer service department to complete this transfer. This additional verification is required for your security.
                                </p>
                                <div className="flex items-center text-primary-600 font-medium">
                                    <PhoneCall size={18} className="mr-2" />
                                    <span>+233 30 273 8299</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="p-4 bg-gray-50 rounded-lg mb-6 max-w-md mx-auto">
                    <h4 className="font-medium mb-2">Please have the following information ready:</h4>
                    <ul className="text-left text-gray-700 space-y-2">
                        <li>• Your Transaction ID: {transactionId}</li>
                        <li>• Government-issued photo ID</li>
                        <li>• Details about the recipient</li>
                        <li>• The purpose of this transfer</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        type="button"
                        className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center justify-center"
                        onClick={handleNewTransaction}
                    >
                        New Transfer
                    </button>
                    <button
                        type="button"
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center justify-center"
                        onClick={() => window.location.href = '/dashboard/transactions'}
                    >
                        View Transactions
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Transfer Funds</h1>
                <p className="text-gray-600">Send money to other accounts securely</p>
            </div>

            {/* Step indicator */}
            {renderStepIndicator()}

            {/* Step content */}
            {currentStep === TransferStep.RECIPIENT && renderRecipientStep()}
            {currentStep === TransferStep.AMOUNT && renderAmountStep()}
            {currentStep === TransferStep.REVIEW && renderReviewStep()}
            {currentStep === TransferStep.CONFIRMATION && renderConfirmationStep()}
        </div>
    );
};

export default TransferPage;

    
