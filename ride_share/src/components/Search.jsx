import React from 'react';
import InputItem from './InputItem';

function Search() {
  return (
    <div className='fixed top-24 right-4 p-4 sm:p-6 md:p-8 rounded-xl bg-white w-full sm:w-96 border border-gray-300 shadow-lg transform hover:scale-105 transition-transform duration-300'>
      <p className='text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800'>
        Where to Next?
      </p>
      <div className='space-y-4 sm:space-y-5'>
        <InputItem type='source' />
        <InputItem type='destination' />
        <button className='p-2 sm:p-3 bg-blue-600 hover:bg-blue-700 w-full text-white font-semibold rounded-lg transition-colors duration-300 
        shadow-md hover:shadow-xl transform hover:scale-105'>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
