import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Shield, Key, Camera } from 'lucide-react';

const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'personal' | 'security' | 'verification'>('personal');

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    {/* Profile Sidebar */}
                    <div className="md:w-1/3 bg-gray-50 p-6 border-r border-gray-200">
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <img
                                    src="/../../assets/pic.jpg"
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                                />
                                <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors">
                                    <Camera size={16} />
                                </button>
                            </div>

                            <h2 className="text-xl font-bold mt-4">Abigail Wayne</h2>
                            <p className="text-gray-600">Gold Investor</p>

                            <div className="mt-6 w-full space-y-2">
                                <button
                                    onClick={() => setActiveTab('personal')}
                                    className={`flex items-center w-full p-3 rounded-lg transition-colors ${activeTab === 'personal'
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'hover:bg-gray-100'
                                        }`}
                                >
                                    <User size={20} className="mr-3" />
                                    <span>Personal Information</span>
                                </button>

                               

                                <button
                                    onClick={() => setActiveTab('verification')}
                                    className={`flex items-center w-full p-3 rounded-lg transition-colors ${activeTab === 'verification'
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'hover:bg-gray-100'
                                        }`}
                                >
                                    <Key size={20} className="mr-3" />
                                    <span>Verification</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="md:w-2/3 p-6">
                        {activeTab === 'personal' && (
                            <div>
                                <h3 className="text-xl font-bold mb-6">Personal Information</h3>

                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="input"
                                                defaultValue="Abigail"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="input"
                                                defaultValue="Wayne"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                <Mail size={16} />
                                            </span>
                                            <input
                                                type="email"
                                                className="input rounded-l-none"
                                                defaultValue="abigail.wayne@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                <Phone size={16} />
                                            </span>
                                            <input
                                                type="tel"
                                                className="input rounded-l-none"
                                                defaultValue="+233 24 555 7890"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Address
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                <MapPin size={16} />
                                            </span>
                                            <input
                                                type="text"
                                                className="input rounded-l-none"
                                                defaultValue="123 Gold Street, Accra, Ghana"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <button type="submit" className="btn btn-primary">
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        
                        {activeTab === 'verification' && (
                            <div>
                                <h3 className="text-xl font-bold mb-6">Account Verification</h3>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="bg-green-500 rounded-full p-1 text-white mr-3">
                                            <Shield size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-green-800">Fully Verified Account</h4>
                                            <p className="text-sm text-green-700">Your account has completed all verification requirements for gold banking.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold">Identity Verification</h4>
                                                <p className="text-sm text-gray-600">Government-issued ID verification</p>
                                            </div>
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Verified</span>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold">Address Verification</h4>
                                                <p className="text-sm text-gray-600">Proof of residence verification</p>
                                            </div>
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Verified</span>
                                        </div>
                                    </div>


                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold">Biometric Verification</h4>
                                                <p className="text-sm text-gray-600">Fingerprint and facial recognition</p>
                                            </div>
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Verified</span>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold">Gold Trading License</h4>
                                                <p className="text-sm text-gray-600">PMMC-approved gold trading license</p>
                                            </div>
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Verified</span>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold">Bank Account Verification</h4>
                                                <p className="text-sm text-gray-600">Linked bank account verification</p>
                                            </div>
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Verified</span>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
