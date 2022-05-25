import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/layout/CodeBlock';

export default function MyNoteCardShowMore({ mynote }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <button
        className='mt-2 w-full text-indigo-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
        type='submit'
        onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Hide details' : 'Show details'}
      </button>
      <article className='prose-sm sm:prose prose-indigo sm:prose-indigo'>
        {showMore && (
          <ReactMarkdown components={CodeBlock}>{mynote.details}</ReactMarkdown>
        )}
      </article>
    </div>
  );
}
