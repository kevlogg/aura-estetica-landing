import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-nude-100 text-charcoal font-sans flex flex-col selection:bg-terracotta/20 selection:text-terracotta-dark">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:categoryId" element={<ServicePage />} />
          </Routes>
        </main>

        <FloatingWhatsApp />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
