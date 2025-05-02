import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AccountSummary from '../components/dashboard/AccountSummary';
import TransactionHistory from '../components/dashboard/TransactionHistory';
import FinancialInsights from '../components/dashboard/FinancialInsights';

import { Home, FileText, BarChart2, CreditCard, User, Settings, LogOut, Menu, X } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // Find the active page
  const getActiveRoute = () => {
    const path = location.pathname.split('/').pop() || 'overview';
    return dashboardRoutes.find(route => route.path === path)?.title || 'Dashboard';
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-primary-900 text-white hidden lg:block">
        <SidebarContent user={user} logout={logout} />
      </aside>
      
      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div 
          className="absolute inset-y-0 left-0 w-64 bg-primary-900 text-white transform transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <SidebarContent user={user} logout={logout} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button 
                className="lg:hidden mr-4 text-gray-600 hover:text-gray-900"
                onClick={toggleSidebar}
              >
                <Menu size={24} />
              </button>
              
              <h1 className="text-xl font-bold text-gray-900">{getActiveRoute()}</h1>
            </div>
            
            {/* Profile section */}
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium">
                {user?.name.charAt(0) || 'U'}
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content area */}
        <div className="p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/overview" element={<DashboardOverview />} />
            <Route path="/transactions" element={<DashboardTransactions />} />
            <Route path="/cards" element={<DashboardCards />} />
            <Route path="/profile" element={<DashboardProfile />} />
            <Route path="/settings" element={<DashboardSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

// Dashboard routes configuration
const dashboardRoutes = [
  { path: 'overview', title: 'Dashboard Overview', icon: <Home size={20} /> },
  { path: 'profile', title: 'Profile', icon: <User size={20} /> },
];

// Dashboard page components
const DashboardOverview = () => (
  <>
    <AccountSummary />
    <TransactionHistory />
  </>
);

const DashboardTransactions = () => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
    <TransactionHistory />
  </div>
);

const DashboardStatements = () => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold mb-6">Account Statements</h2>
    <div className="card p-6">
      <p className="text-lg mb-4">Your monthly account statements are available below.</p>
      <div className="space-y-4">
        {['April 2025', 'March 2025', 'February 2025', 'January 2025', 'December 2024'].map((month) => (
          <div key={month} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-medium">{month} Statement</p>
              <p className="text-sm text-gray-500">Available for download</p>
            </div>
            <button className="btn btn-secondary text-sm">Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DashboardCards = () => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold mb-6">Cards & Payment Methods</h2>
    <div className="card p-6">
      <p className="text-gray-600 mb-8">Manage your cards and payment methods securely.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 text-white p-6 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-800/50 to-transparent"></div>
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
                  <p>John Doe</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Expires</p>
                  <p>05/28</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-center">
          <div className="bg-primary-100 p-4 rounded-full text-primary-600 mb-4">
            <CreditCard size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Add New Card</h3>
          <p className="text-gray-600 mb-4">Link a new debit or credit card to your account</p>
          <button className="btn btn-primary">Add Payment Method</button>
        </div>
      </div>
    </div>
  </div>
);

const DashboardProfile = () => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
    <div className="card p-6">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-24 h-24 rounded-full bg-primary-600 flex items-center justify-center text-white text-3xl font-medium">
            J
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">John Doe</h3>
            <p className="text-gray-600">Account Number: 9876543210</p>
            <p className="text-gray-600">Member since: January 15, 2022</p>
          </div>
        </div>
        
        <hr className="border-gray-200" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-4">Personal Information</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500">Full Name</label>
                <p className="font-medium">John Doe</p>
              </div>
              <div>
                <label className="block text-sm text-gray-500">Email Address</label>
                <p className="font-medium">john.doe@example.com</p>
              </div>
              <div>
                <label className="block text-sm text-gray-500">Phone Number</label>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Address Information</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500">Street Address</label>
                <p className="font-medium">123 Main Street, Apt 4B</p>
              </div>
              <div>
                <label className="block text-sm text-gray-500">City, State, ZIP</label>
                <p className="font-medium">New York, NY 10001</p>
              </div>
              <div>
                <label className="block text-sm text-gray-500">Country</label>
                <p className="font-medium">United States</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
    </div>
  </div>
);

const DashboardSettings = () => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
    <div className="card p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Security Settings</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium">Login Notifications</p>
                <p className="text-sm text-gray-500">Receive email alerts when someone logs into your account</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium">Transaction Alerts</p>
                <p className="text-sm text-gray-500">Get notified of transactions above a certain amount</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-200" />
        
        <div>
          <h3 className="text-lg font-medium mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium">Paperless Statements</p>
                <p className="text-sm text-gray-500">Receive statements electronically instead of by mail</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium">Marketing Communications</p>
                <p className="text-sm text-gray-500">Receive updates about new products and features</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
);

// Sidebar component
const SidebarContent: React.FC<{ user: any; logout: () => void }> = ({ user, logout }) => {
  const location = useLocation();
  
  return (
    <>
      <div className="p-6">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold font-display">
            <span className="text-accent-400">Secure</span>Bank
          </span>
        </Link>
      </div>
      
      <div className="px-4 py-6 border-t border-primary-800">
        <div className="flex items-center px-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-white font-medium mr-3">
            {user?.name.charAt(0) || 'U'}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-primary-300">Online Banking</p>
          </div>
        </div>
        
        <nav className="space-y-1">
          {dashboardRoutes.map((route) => {
            const isActive = location.pathname === `/dashboard/${route.path}` || 
                            (location.pathname === '/dashboard' && route.path === 'overview');
            
            return (
              <Link
                key={route.path}
                to={`/dashboard/${route.path}`}
                className={`flex items-center px-2 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary-700 text-white' 
                    : 'text-primary-100 hover:bg-primary-800 hover:text-white'
                }`}
              >
                <span className="mr-3">{route.icon}</span>
                <span>{route.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t border-primary-800">
        <button
          onClick={logout}
          className="flex items-center justify-center w-full px-4 py-2 bg-primary-800 hover:bg-primary-700 text-white rounded-lg transition-colors"
        >
          <LogOut size={18} className="mr-2" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
};

export default DashboardPage;