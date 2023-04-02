import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SideMenuComponent } from '@/components/SideMenuComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full min-h-screen flex'>
      <div className='z-10 w-full min-h-full flex'>
        <SideMenuComponent />
        <div className='w-4/5 min-h-full p-8'>
          <Component {...pageProps} />
        </div>
      </div>
      <div
        className='fixed top-0 left-0 right-0 bottom-0 z-0 bg-cover bg-no-repeat bg-center opacity-10'
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
      ></div>
    </div>
  );
}
