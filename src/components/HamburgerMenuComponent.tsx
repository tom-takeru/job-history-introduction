import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PAGE_NAMES } from '@/pages/_app';
import { convertCamelCaseToTitleCase } from '@/util';

const activeClass = `block p-4 text-green-700 text-5xl`;
const inactiveClass = `block p-4 text-gray-800 text-4xl`;
const getClass = (path: string, pageName: string) => {
  return path.includes(pageName) ? activeClass : inactiveClass;
};

export const HamburgerMenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
          {PAGE_NAMES.map((pageName) => (
            <Link href={`/${pageName}`} key={`HamburgerMenu_${pageName}`} className={getClass(router.asPath, pageName)}>
              {convertCamelCaseToTitleCase(pageName)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
