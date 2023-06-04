import { NextPage } from 'next';
import Head from 'next/head';
import { MarkdownContentsComponent } from '@/components/MarkdownContentsComponent';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | tom-takeru Web</title>
      </Head>
      <MarkdownContentsComponent fineName='about.md' />
    </>
  );
};

export default index;
