import { NextPage } from 'next';
import { MarkdownContentsComponent } from '@/components/MarkdownContentsComponent';

const index: NextPage = () => {
  return <MarkdownContentsComponent fineName='index.md' />;
};

export default index;
