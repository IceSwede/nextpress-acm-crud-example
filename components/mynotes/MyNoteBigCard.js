import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/layout/CodeBlock';

export default function MyNoteBigCard({ mynote, user }) {
  console.log('Hello from MyNoteCard', mynote);
  console.log('User ', user);

  return (
    <div className='flex justify-center'>
      <main className='my-12 bordershadow-md max-w-4xl bg-white rounded-lg'>
        {' '}
        <div className='w-full flex justify-between gap-12 border-b-2 px-4 py-3 text-xs sm:text-sm mb-6 font-bold text-white bg-indigo-600 rounded-t-lg '>
          <p>Category: {mynote.category}</p>
          <p>Sorting order: 7</p>
          <p>Ready: False</p>
        </div>
        <p className='ml-8'>
          {mynote.author.node.username} | {mynote.date.substr(0, 10)}
        </p>
        <div className='prose-sm sm:prose prose-indigo sm:prose-indigo mb-8 px-8 pt-2 pb-2'>
          <h1>{mynote.title}</h1>
          <ReactMarkdown components={CodeBlock}>{mynote.details}</ReactMarkdown>
        </div>
        <div className='px-8 pt-2 pb-8'>
          <Link href={`/mynotes/edit/${mynote.id}`}>
            <a className='np-button'>Update or Delete</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
