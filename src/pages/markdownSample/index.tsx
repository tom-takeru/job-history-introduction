import { NextPage } from 'next';
import Head from 'next/head';
import { MarkdownContentsComponent } from '@/components/MarkdownContentsComponent';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Markdown Sample | tom-takeru Web</title>
      </Head>
      <MarkdownContentsComponent fineName='markdownSample.md' />
    </>
  );
};

export default index;
