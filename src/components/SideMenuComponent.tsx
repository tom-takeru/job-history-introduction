import Link from 'next/link';
import { useRouter } from 'next/router';
import { PAGE_NAMES } from '@/pages/_app';
import { convertCamelCaseToTitleCase } from '@/util';

const activeClass =
  'block text-center text-2xl m-4 p-4 text-green-300 rounded-2xl transition duration-500 hover:bg-black hover:shadow-md hover:shadow-white';
const inactiveClass =
  'block text-center text-xl m-4 p-4 rounded-2xl transition duration-500 hover:bg-black hover:shadow-md hover:shadow-white';
const getClass = (path: string, pageName: string) => {
  return path.includes(pageName) ? activeClass : inactiveClass;
};

export const SideMenuComponent = () => {
  const router = useRouter();

  return (
    <div className='fixed w-1/5 h-fit rounded-xl m-8 text-white bg-gray-200 bg-opacity-30 shadow-md shadow-white'>
      <Link className='block text-center text-3xl font-bold p-4 border-b-2 hover:underline' href='/top'>
        tom-takeru Web
      </Link>
      {PAGE_NAMES.map((pageName) => (
        <Link href={`/${pageName}`} key={`HamburgerMenu_${pageName}`} className={getClass(router.asPath, pageName)}>
          {convertCamelCaseToTitleCase(pageName)}
        </Link>
      ))}
      <div className='text-center text-xs text-gray-400 m-4'>©tom-takeru</div>
    </div>
  );
};
