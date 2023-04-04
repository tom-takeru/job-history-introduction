import Link from 'next/link';

export const SideMenuComponent = () => {
  return (
    <div className='w-1/5 h-fit rounded-xl m-8 text-white bg-black bg-opacity-30'>
      <Link className='block text-3xl font-bold p-8 border-b-4 hover:underline' href='/'>
        tom-takeru Web
      </Link>
      <Link className='block text-xl m-4 p-4 rounded-2xl hover:bg-gray-600' href='/'>
        Top
      </Link>
      <Link className='block text-xl m-4 p-4 rounded-2xl hover:bg-gray-600' href='/about'>
        About tom-takeru
      </Link>
      <Link className='block text-xl m-4 p-4 rounded-2xl hover:bg-gray-600' href='/jobHistory'>
        Job History
      </Link>
      <Link className='block text-xs m-4 px-4 py-1 rounded-2xl text-gray-500 hover:bg-gray-600' href='/markdownSample'>
        Markdown Sample
      </Link>
    </div>
  );
};
