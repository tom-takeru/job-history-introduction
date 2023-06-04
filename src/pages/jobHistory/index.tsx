import { NextPage } from 'next';
import Head from 'next/head';
import { MarkdownContentsComponent } from '@/components/MarkdownContentsComponent';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Job History</title>
      </Head>
      <MarkdownContentsComponent fineName='jobHistory.md' />
    </>
  );
};

export default index;
