import React, { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type Props = {
  fineName: string;
};

export const MarkdownContentsComponent = (props: Props) => {
  const [markdownContents, setMarkdownContents] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const md = await fetch('/markdownContents/' + props.fineName);
      const text = await md.text();
      setMarkdownContents(text);
    };
    fetchMarkdown();
  }, [props]);

  return (
    <div className='prose prose-xl'>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSanitize]}>
        {markdownContents}
      </ReactMarkdown>
    </div>
  );
};
