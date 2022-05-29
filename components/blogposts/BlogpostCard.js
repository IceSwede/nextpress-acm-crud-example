import Link from 'next/link';

export default function BlogpostCard({ blogpost }) {
  console.log('Blogpost small card: ', blogpost);

  return (
    <div className='py-4 px-12 w-full'>
      <div className='flex flex-row bg-white border-2 rounded-lg border-gray-200 border-opacity-50 p-8'>
        <div className='hidden sm:inline-flex w-16 h-16 sm:mr-8 sm:mb-0 mb-4 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
          <p>A1</p>
        </div>
        <div className='flex-grow'>
          <p className=' text-gray-500 '>
            IceSwede | {blogpost.node.date.substr(0, 10)}
          </p>
          <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
            {blogpost.node.name}
          </h2>
          <p className='leading-relaxed text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href={`/blogposts/${blogpost.node.slug}`}>
            <a className='mt-3 text-indigo-600 inline-flex items-center'>
              Read more
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'>
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
