import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollReveal from './components/common/ScrollReveal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

// Layout components
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Wrapper component to force re-rendering on route changes
const RouteWrapper = ({ Component }: { Component: React.ComponentType<any> }) => {
  const location = useLocation();
  return <Component key={location.pathname} />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <ScrollReveal />
        <Header />
        <Routes>
          <Route path="/" element={<RouteWrapper Component={HomePage} />} />
          <Route path="/about" element={<RouteWrapper Component={AboutPage} />} />
          <Route path="/services" element={<RouteWrapper Component={ServicesPage} />} />
          <Route path="/contact" element={<RouteWrapper Component={ContactPage} />} />
          <Route path="/login" element={<RouteWrapper Component={LoginPage} />} />
          <Route 
            path="/dashboard/*" 
            element={
              <ProtectedRoute>
                <RouteWrapper Component={DashboardPage} />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<RouteWrapper Component={NotFoundPage} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
