import Link from 'next/link';

export const SideMenuComponent = () => {
  return (
    <div className='w-1/5 h-fit rounded-xl m-8 bg-black bg-opacity-30 text-gray-100'>
      <div className='text-lg font-bold p-8 border-b-4'>tom-takeru</div>
      <Link className='block m-4 p-4 rounded-2xl hover:bg-black' href={'/'}>
        トップ
      </Link>
      <Link className='block m-4 p-4 rounded-2xl hover:bg-black' href={'/'}>
        基本情報
      </Link>
      <Link className='block m-4 p-4 rounded-2xl hover:bg-black' href={'/'}>
        職務経歴
      </Link>
      <Link className='block m-4 p-4 rounded-2xl hover:bg-black' href={'/markdownSample'}>
        マークダウンサンプル
      </Link>
    </div>
  );
};
