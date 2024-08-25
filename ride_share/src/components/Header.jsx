import React from 'react';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

function Header() {
  const headerMenu = [
    {
      id: 1,
      name: 'Ride',
      icon: LocalTaxiIcon,
    },
  ];

  return (
    <div className='bg-[#111] text-white p-4 shadow-md fixed w-full top-0 left-0 z-50' style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className='container mx-auto flex items-center justify-between'>
        <p className='pr-8 text-3xl font-bold text-gray-200 new-amsterdam-regular'>RIDESHARE</p>
        <div className='flex gap-8 items-center flex-grow'>
          {headerMenu.map((item) => (
            <div key={item.id} className='flex gap-2 items-center'>
              {React.createElement(item.icon, { className: 'text-white text-xl hover:text-blue-400 transition-colors duration-300' })}
              <span className='text-lg font-medium hover:text-blue-400 transition-colors duration-300'>{item.name}</span>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-4'>
          <a href="#" className='text-white hover:text-blue-400 transition-colors duration-300'>Profile</a>
          <a href="#" className='text-white hover:text-blue-400 transition-colors duration-300'>Settings</a>
          <a href="#" className='text-white hover:text-blue-400 transition-colors duration-300'>Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
