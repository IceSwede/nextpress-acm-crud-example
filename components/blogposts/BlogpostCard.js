import Link from 'next/link';

export default function BlogpostCard({ blogpost }) {
  console.log('Blogpost small card: ', blogpost);

  return (
    <div className='bg-white p-4 rounded-md my-3 border border-gray-300 shadow-md w-96'>
      <div className='flex flex-col items-start justify-start mb-2'>
        <p className=' text-gray-500 '>
          By IceSwede | {blogpost.node.date.substr(0, 10)}
        </p>
        <h2 className=' text-gray-700 text-lg font-bold'>
          {blogpost.node.name}
        </h2>

        <Link href={`/blogposts/${blogpost.node.slug}`}>
          <a className='text-indigo-600'>Read more</a>
        </Link>
      </div>
    </div>
  );
}
