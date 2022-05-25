export default function Footer() {
  return (
    <div className='container flex justify-between items-center py-2 sm:py-4 border-t-2'>
      <a
        href='https://github.com/IceSwede'
        target='_blank'
        rel='noopener noreferrer'
        className='text-gray-900 hover:text-indigo-600 text-base sm:text-lg text-right'>
        &copy; 2022 IceSwede (MIT Licence)
      </a>
      <a
        href='https://github.com/IceSwede/nextpressatlas/discussions'
        target='_blank'
        rel='noopener noreferrer'
        className='text-gray-900 hover:text-indigo-600 text-base sm:text-lg text-right'>
        Discuss on GitHub
      </a>
    </div>
  );
}
