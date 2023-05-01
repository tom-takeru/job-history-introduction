import { NextPage } from 'next';
import { MarkdownContentsComponent } from '@/components/MarkdownContentsComponent';

const index: NextPage = () => {
  return <MarkdownContentsComponent fineName='anotherActivities.md' />;
};

export default index;
