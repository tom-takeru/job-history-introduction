import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HamburgerMenuComponent } from '@/components/HamburgerMenuComponent';
import { SideMenuComponent } from '@/components/SideMenuComponent';

export default function App({ Component, pageProps }: AppProps) {
  const BACKGROUND_TYPE_COUNT = 12;
  const [displayedBackgroundNumber, setDisplayedBackgroundNumber] = useState(1);

  const padNumberWithZeros = (number: number, digits: number) => {
    return String(number).padStart(digits, '0');
  };

  useEffect(() => {
    const getRandomNumber = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    setDisplayedBackgroundNumber(getRandomNumber(1, BACKGROUND_TYPE_COUNT));
  }, [pageProps]);

  return (
    <div className='w-full min-h-screen flex'>
      <div className='fixed top-0 left-0 h-full w-full z-0 flex justify-center bg-black'>
        <Image
          src={`/background${padNumberWithZeros(displayedBackgroundNumber, 2)}.png`}
          alt='background'
          className='object-cover h-full w-full opacity-20'
          priority={true}
          width={1024}
          height={1024}
        />
      </div>
      <div className='z-10 w-full min-h-full flex text-lg md:text-xs'>
        <div className='hidden md:block'>
          <SideMenuComponent />
        </div>
        <div className='md:hidden'>
          <HamburgerMenuComponent />
        </div>
        <div className='min-h-full md:ml-[calc(23%_+_8rem)] p-8'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
