import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { MarkdownContentsComponent } from '@/components/MarkdownContentsComponent';
import { convertCamelCaseToTitleCase } from '@/util';

interface Props {
  markdownText: string;
  slug: string;
}

const Page = ({ markdownText, slug }: Props) => {
  const title = (slug === 'top' ? '' : convertCamelCaseToTitleCase(slug) + ' | ') + 'tom-takeru Web';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MarkdownContentsComponent markdownText={markdownText} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'public', 'markdownContents'));
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const markdownWithMetadata = fs
    .readFileSync(path.join(process.cwd(), 'public', 'markdownContents', `${slug}.md`))
    .toString();

  const { content: markdownText } = matter(markdownWithMetadata);
  return {
    props: {
      markdownText,
      slug,
    },
  };
};

export default Page;
