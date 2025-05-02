import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, LogIn, LockKeyhole, Mail } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    try {
      await login(email, password);
      // Redirect to dashboard on successful login
      navigate('/dashboard');
    } catch (err) {
      setErrorMessage(error || 'An error occurred during login. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen pb-20 flex items-center bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Login Form Header */}
                <div className="bg-primary-600 text-white p-6 text-center">
                  <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                  <p className="text-primary-100">Login to access your secure banking dashboard</p>
                </div>
                
                {/* Login Form */}
                <div className="p-8">
                  {/* Demo credentials notice */}
                  <div className="bg-primary-50 text-primary-800 p-4 rounded-lg mb-6 text-sm">
                    <p className="font-medium">Demo Credentials:</p>
                    <p>Email: demo@securebank.com</p>
                    <p>Password: password</p>
                  </div>
                  
                  {/* Error message */}
                  {errorMessage && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
                      {errorMessage}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    {/* Email field */}
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input pl-10"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Password field */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockKeyhole size={18} className="text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="input pl-10 pr-10"
                          placeholder="Your password"
                          required
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    
                    {/* Remember me checkbox */}
                    <div className="flex items-center mb-6">
                      <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    
                    {/* Submit button */}
                    <button
                      type="submit"
                      className={`btn btn-primary w-full flex items-center justify-center ${
                        isLoading ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="mr-2">Logging in...</span>
                          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        </>
                      ) : (
                        <>
                          <LogIn size={18} className="mr-2" />
                          Login to Your Account
                        </>
                      )}
                    </button>
                  </form>
                  
                  {/* Register link */}
                 
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;