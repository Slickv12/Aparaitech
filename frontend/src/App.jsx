import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/chatbot/ChatBot';
import HomePage from './pages/HomePage';
import OpenPositionsPage from './pages/OpenPositionsPage';
import ApplyFormPage from './pages/ApplyFormPage';
import Dashboard from './pages/dashboard/Dashboard';
import ReferralsPage from './pages/ReferralsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/positions" element={<OpenPositionsPage />} />
            <Route path="/apply" element={<ApplyFormPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/referrals" element={<ReferralsPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
