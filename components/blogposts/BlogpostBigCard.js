import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/layout/CodeBlock';

export default function BlogpostBigCard({ blogpost }) {
  console.log('Blogpost:', blogpost);
  return (
    <div className='flex justify-center'>
      <main className='my-12 px-12 py-12 bordershadow-md max-w-4xl bg-white rounded-lg'>
        <p>IceSwede | {blogpost.date.substr(0, 10)}</p>
        <article className='prose-sm sm:prose prose-indigo sm:prose-indigo mt-4'>
          <h1>{blogpost.name}</h1>

          <ReactMarkdown components={CodeBlock}>
            {blogpost.markdown}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
