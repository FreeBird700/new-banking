import React from 'react';
import { CreditCard, TrendingUp, BellRing, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AccountSummary: React.FC = () => {
  const { user } = useAuth();
  const [showBalance, setShowBalance] = React.useState(true);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Account Balance Card */}
      <div className="card p-6 md:col-span-2 bg-gradient-to-r from-primary-700 to-primary-600 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg text-primary-100 font-medium mb-1">Available Balance</h3>
              <div className="flex items-center">
                <div className="text-3xl font-bold mr-3">
                  {showBalance ? '$45,250.75' : '•••••••••'}
                </div>
                <button 
                  onClick={toggleBalanceVisibility}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-center bg-primary-800/50 text-primary-100 px-3 py-1 rounded-full text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>+2.5% today</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-primary-200 text-sm mb-1">Account Number</p>
              <p className="font-medium">{user?.accountNumber || '9876543210'}</p>
            </div>
            <div>
              <p className="text-primary-200 text-sm mb-1">Account Type</p>
              <p className="font-medium">Checking</p>
            </div>
          </div>

          <div className="flex mt-6 space-x-3">
            <button className="btn bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2">
              Transfer
            </button>
            <button className="btn bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2">
              Pay Bills
            </button>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="card bg-gray-900 text-white p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/50 to-transparent"></div>
          <svg className="absolute bottom-0 right-0 w-64 h-64 text-white/5 transform translate-x-1/4 translate-y-1/4" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="80" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
            <CreditCard size={32} className="text-accent-400" />
            <div className="text-xs text-gray-400">SecureBank Gold</div>
          </div>
          
          <div className="mb-10">
            <div className="text-xl tracking-widest opacity-75 mb-3">
              •••• •••• •••• 7890
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Card Holder</p>
                <p>{user?.name || 'John Doe'}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Expires</p>
                <p>05/28</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-white/80 text-xs">Tap to see card details</div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10">
              <svg width="30" height="30" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <path d="M15 20 L20 25 L30 15" stroke="#FFC107" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      <div className="card p-6 border-l-4 border-accent-500 md:col-span-3">
        <div className="flex items-start">
          <div className="bg-accent-100 p-2 rounded-full mr-4 text-accent-600">
            <BellRing size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Important Account Notification</h4>
            <p className="text-gray-600">
              Your account statement for April 2025 is now available. You can view or download it from the statements section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;