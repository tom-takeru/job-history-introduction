import { NextPage } from 'next';
import Head from 'next/head';
import { MarkdownContentsComponent } from '@/components/MarkdownContentsComponent';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>tom-takeru Web</title>
      </Head>
      <MarkdownContentsComponent fineName='index.md' />
    </>
  );
};

export default index;
