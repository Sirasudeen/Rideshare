// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Header from './components/Header';
import PostRide from './pages/PostRide';
import JoinRide from './pages/JoinRide';

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Routes>
        <Route path="/" element={<JoinRide />} />
        <Route path="/joinride" element={<JoinRide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/postride" element={<PostRide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
