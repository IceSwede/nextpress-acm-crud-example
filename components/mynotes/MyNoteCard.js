import Link from 'next/link';

import MyNoteCardShowMore from '@/components/mynotes/MyNoteCardShowMore';

export default function MyNoteCard({ mynote, user }) {
  console.log('Hello from MyNoteCard', mynote);
  console.log('User ', user);

  return (
    <div className='bg-white px-3 pt-3 rounded-md my-3 shadow-lg w-96 flex flex-col items-start justify-start mb-2'>
      <div className='container mx-auto flex items-center justify-end'>
        <p className='  text-gray-100 bg-gray-400 px-1 font-bold rounded-md'>
          {mynote.category}
        </p>
      </div>

      <p className=' text-gray-500 '>
        {mynote.author.node.username} | {mynote.date.substr(0, 10)}
      </p>

      <h2 className=' text-gray-900 mr-2'>{mynote.title}</h2>

      <div className='w-full'>
        <MyNoteCardShowMore mynote={mynote} />
      </div>

      <Link href={`/mynotes/edit/${mynote.id}`}>
        <a className='my-2 w-full text-indigo-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
          Update or Delete
        </a>
      </Link>
    </div>
  );
}
