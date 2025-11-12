import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="myapp-space">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-16 fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex items-center justify-between h-full">
          <h1 className="text-white text-xl font-bold">MyApp</h1>
        </div>
      </div>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;

