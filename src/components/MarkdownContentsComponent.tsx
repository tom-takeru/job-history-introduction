import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import CodeBlockComponent from '@/components/CodeBlockComponent';

type Props = {
  markdownText: string;
};

export const MarkdownContentsComponent = (props: Props) => {
  return (
    <div className='prose prose-invert prose-xl'>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{ code: CodeBlockComponent }}>
        {props.markdownText}
      </ReactMarkdown>
    </div>
  );
};
