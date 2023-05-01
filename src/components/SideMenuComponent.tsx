import Link from 'next/link';

const menuLinkClassName =
  'block text-center text-xl m-4 p-4 rounded-2xl transition duration-300 hover:bg-black hover:shadow-md hover:shadow-white';

export const SideMenuComponent = () => {
  return (
    <div className='fixed w-1/5 h-fit rounded-xl m-8 text-white bg-gray-200 bg-opacity-30 shadow-md shadow-white'>
      <Link className='block text-center text-3xl font-bold p-4 border-b-2 hover:underline' href='/'>
        tom-takeru Web
      </Link>
      <Link className={menuLinkClassName} href='/'>
        Top
      </Link>
      <Link className={menuLinkClassName} href='/about'>
        About
      </Link>
      <Link className={menuLinkClassName} href='/jobHistory'>
        Job History
      </Link>
      <Link className={menuLinkClassName} href='/anotherActivities'>
        Another Activities
      </Link>
      {/* <Link className='block text-xs m-4 px-4 py-1 rounded-2xl hover:bg-gray-600' href='/markdownSample'>
        Markdown Sample
      </Link> */}
      <div className='text-center text-xs text-gray-400 m-4'>©tom-takeru</div>
    </div>
  );
};
