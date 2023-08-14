import Link from 'next/link';
import { useState } from 'react';

export const HamburgerMenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button onClick={() => setIsOpen(!isOpen)} className='fixed top-12 right-12 focus:outline-none'>
        {/* Hamburger icon */}
        <div className='flex flex-col space-y-1'>
          <div className='w-6 h-1 bg-white opacity-50'></div>
          <div className='w-6 h-1 bg-white opacity-50'></div>
          <div className='w-6 h-1 bg-white opacity-50'></div>
        </div>
      </button>

      {isOpen && (
        <div
          className='fixed w-full h-full p-12 text-center bg-white rounded-lg shadow-xl'
          onClick={() => setIsOpen((current) => !current)}
        >
          <Link href='/top' className='block p-4 text-gray-800 text-4xl'>
            Top
          </Link>
          <Link href='/about' className='block p-4 text-gray-800 text-4xl'>
            About
          </Link>
          <Link href='/jobHistory' className='block p-4 text-gray-800 text-4xl'>
            Job History
          </Link>
          <Link href='/anotherActivities' className='block p-4 text-gray-800 text-4xl'>
            Another Activities
          </Link>
        </div>
      )}
    </div>
  );
};
