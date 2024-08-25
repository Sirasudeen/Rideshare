import React from 'react';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import Search from './components/Search';
import Footer from './components/Footer';
import { MapProvider } from './context/MapContext'; // Ensure the path is correct

function App() {
  return (
    <MapProvider>
      <div className='relative'>
        <Header />
        <div className='relative'>
          <MainDashboard />
          <Search />
        </div>
        <Footer />
      </div>
    </MapProvider>
  );
}

export default App;
