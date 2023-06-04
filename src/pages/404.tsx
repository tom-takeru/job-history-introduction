import Link from 'next/link';

const Custom404 = () => (
  <>
    <div className='text-white text-3xl'>404 - Page Not Found</div>
    <Link className='text-white underline hover:text-gray-500' href='/top'>
      Go back top page ＞
    </Link>
  </>
);
export default Custom404;
