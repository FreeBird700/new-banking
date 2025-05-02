import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { 
  Home,  
  User, 
  LogOut, 
  Menu,
  DollarSign,
  Send,
  CreditCard,
  Settings
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Dashboard Components
import DashboardHome from '../components/dashboard/DashboardHome';
import TransactionsPage from '../components/dashboard/TransactionsPage';
import ProfilePage from '../components/dashboard/ProfilePage';
import TransferPage from '../components/dashboard/TransferPage';

// Dashboard routes configuration
const dashboardRoutes = [
  {
    path: 'overview',
    title: 'Dashboard',
    icon: <Home size={20} />,
  },
  {
    path: 'transfer',
    title: 'Transfer Funds',
    icon: <Send size={20} />,
  },
  {
    path: 'transactions',
    title: 'Transactions',
    icon: <DollarSign size={20} />,
  },
  {
    path: 'profile',
    title: 'Profile',
    icon: <User size={20} />,
  },
];

// Sidebar Content Component
const SidebarContent: React.FC<{ user: any; logout: () => void }> = ({ user, logout }) => {
  const location = useLocation();
  
  return (
    <>
      <div className="px-4 py-6 border-t border-primary-800">
        <div className="flex items-center px-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-white font-medium mr-3">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-white">Abigail Smith</p>
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
        <header className="bg-white shadow-sm mt-8">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            {/* Left - Hamburger Menu */}
            <div>
              <button 
                className="lg:hidden text-gray-600 hover:text-gray-900"
                onClick={toggleSidebar}
              >
                <Menu size={24} />
              </button>
            </div>
            
            {/* Middle - Page Title */}
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900 hidden lg:block">{getActiveRoute()}</h1>
              <span className="text-sm font-large text-gray-700 lg:hidden">Abigail Smith</span>
            </div>
            
            {/* Right - Profile Icon */}
            <div>
              <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center text-white font-medium">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />
            <Route path="overview" element={<DashboardHome />} />
            <Route path="transfer" element={<TransferPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/dashboard/overview" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
