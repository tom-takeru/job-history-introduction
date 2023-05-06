import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SideMenuComponent } from '@/components/SideMenuComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full min-h-screen flex'>
      <div className='z-0'>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black'></div>
        <video
          src='background.mp4'
          autoPlay
          loop
          muted
          className='fixed top-0 left-0 w-full h-full object-cover opacity-20'
        ></video>
      </div>
      <div className='z-10 w-full min-h-full flex'>
        <SideMenuComponent />
        <div className='min-h-full ml-[calc(23%_+_8rem)] p-8'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
