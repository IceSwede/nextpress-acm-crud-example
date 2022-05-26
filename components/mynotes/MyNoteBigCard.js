import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/layout/CodeBlock';

export default function MyNoteBigCard({ mynote, user }) {
  console.log('Hello from MyNoteCard', mynote);
  console.log('User ', user);

  return (
    <div className='flex justify-center'>
      <main className='my-12 px-8 py-12 bordershadow-md max-w-4xl bg-white rounded-lg'>
        {' '}
        <div className='container mx-auto flex justify-between border-b-2 py-3 text-sm mb-6'>
          <p>Category: {mynote.category}</p>
          <p>Sorting order: 7</p>
          <p>Ready for publishing: False</p>
        </div>
        <article className='prose-sm sm:prose prose-indigo sm:prose-indigo mb-8'>
          <p>
            {mynote.author.node.username} | {mynote.date.substr(0, 10)}
          </p>
          <h1>{mynote.title}</h1>
          <ReactMarkdown components={CodeBlock}>{mynote.details}</ReactMarkdown>
        </article>
        <Link href={`/mynotes/edit/${mynote.id}`}>
          <a className='np-button'>Update or Delete</a>
        </Link>
      </main>
    </div>
  );
}
