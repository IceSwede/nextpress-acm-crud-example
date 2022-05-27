import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

export default function MyNoteCard({ mynote }) {
  const { user } = useAuth();
  const isUser = Boolean(user);

  return (
    <div className='bg-white border-0 px-3 pt-3 rounded-md my-3 shadow-lg w-96 flex flex-col items-start justify-start mb-2'>
      <div className='container mx-auto flex items-center justify-end'>
        <p className='  text-gray-100 bg-gray-400 px-1 font-bold rounded-md'>
          {mynote.category}
        </p>
      </div>

      <p className=' text-gray-500 '>
        {mynote.author.node.username} | {mynote.date.substr(0, 10)}
      </p>

      <h2 className=' text-gray-900 mr-2 text-lg font-bold'>{mynote.title}</h2>

      <div className='flex w-full justify-between my-3'>
        <Link href={`/mynotes/${mynote.id}`}>
          <a className='ml-2 my-2 w-full text-indigo-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
            Details
          </a>
        </Link>
        {mynote.author.node.username === user.username ? (
          <Link href={`/mynotes/edit/${mynote.id}`}>
            <a className='ml-2 my-2 w-full text-indigo-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
              Update
            </a>
          </Link>
        ) : (
          <button className='ml-2 my-2 w-full text-gray-300 bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-default'>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

/*
Removing this to check if this causes the build error: 
        {mynote.author.node.username === user.username ? (
          <Link href={`/mynotes/edit/${mynote.id}`}>
            <a className='ml-2 my-2 w-full text-indigo-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
              Update
            </a>
          </Link>
        ) : (
          <Link href={`/mynotes`}>
            <a className='ml-2 my-2 w-full text-gray-400 bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
              Update
            </a>
          </Link>
        )}


*/
