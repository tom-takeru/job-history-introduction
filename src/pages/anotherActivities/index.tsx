import { NextPage } from 'next';
import Head from 'next/head';
import { MarkdownContentsComponent } from '@/components/MarkdownContentsComponent';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Another Activities</title>
      </Head>
      <MarkdownContentsComponent fineName='anotherActivities.md' />
    </>
  );
};

export default index;
