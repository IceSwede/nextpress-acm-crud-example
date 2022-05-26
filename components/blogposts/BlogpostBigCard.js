import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/layout/CodeBlock';

export default function BlogpostBigCard({ blogpost }) {
  return (
    <div className='flex justify-center'>
      <main className='my-12 px-8 py-12 bordershadow-md max-w-4xl bg-white rounded-lg'>
        <article className='prose-sm sm:prose prose-indigo sm:prose-indigo'>
          <p>IceSwede | {blogpost.date.substr(0, 10)}</p>
          <h1>{blogpost.name}</h1>
          <ReactMarkdown components={CodeBlock}>
            {blogpost.markdown}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
