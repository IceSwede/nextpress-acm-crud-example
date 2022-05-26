// Redo this with GRID
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='container grow flex flex-col items-center mt-6'>
      {/* <-- Top section --> */}
      <section className='w-full flex flex-1 flex-col items-center p-2 bg-white boarder rounded-t-lg'>
        <div className='w-full rounded-t-sm py-6 bg-gradient-to-r from-indigo-900 to-indigo-600'>
          <h2 className='text-white text-xl md:text-2xl lg:text3xl text-center mb-3 border-b-1'>
            Next.js App with Headless WordPress (Beta)
          </h2>
          <h1 className='text-white text-2xl md:text-3xl lg:text-4xl text-center mb-6'>
            Code example for CRUD operations
          </h1>
        </div>
        <p className='text-gray-900 text-xl text-center mt-6 font-bold'>
          Tech Stack
        </p>
        <p className='text-gray-900 text-lg text-center mt-2'>
          <span>
            <a
              className='text-indigo-700'
              href='https://www.wpgraphql.com/'
              target='_blank'
              rel='noopener noreferrer'>
              WPGraphQL
            </a>
            {' | '}
          </span>
          <span>
            <a
              className='text-indigo-700'
              href='https://wordpress.org/plugins/atlas-content-modeler/'
              target='_blank'
              rel='noopener noreferrer'>
              Atlas Content Modeler (ACM)
            </a>
          </span>
        </p>
        <p className='text-gray-900 text-lg text-center mt-2 mb-12'>
          <span>
            <a
              className='text-indigo-700'
              href='https://www.apollographql.com/docs/react/'
              target='_blank'
              rel='noopener noreferrer'>
              Apollo Client
            </a>
            {' | '}
          </span>

          <span>
            <a
              className='text-indigo-700'
              href='https://tailwindcss.com/'
              target='_blank'
              rel='noopener noreferrer'>
              Tailwindcss
            </a>
          </span>
        </p>
        <div className='flex justify-center gap-6 mb-8'>
          <a
            href='https://github.com/IceSwede/nextpressatlas'
            className='np-button'>
            Get code (Beta)
          </a>
          <Link href='/blogposts/about-the-nextpress-project'>
            <a className='background-slate-100 hover:bg-slate-200 border-2 border-indigo-700 rounded-lg px-3 py-2'>
              About this demo
            </a>
          </Link>
        </div>
        <p className='text-xs italic'>
          Obs! This app is still under development. Estimated date for release
          of a stable version is 1 June 2022
        </p>
      </section>

      {/* <-- Features Section making use Tailblocks blocks --> */}

      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-4 mx-auto mb-6 flex flex-wrap bg-white'>
          <div className='flex flex-wrap -m-4'>
            {/* <-- First feature --> */}
            <div className='p-4 lg:w-1/2 md:w-full'>
              <div className='flex bg-white border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
                <div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
                  <p>SSG</p>
                </div>
                <div className='flex-grow'>
                  <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                    Statis-site generation
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Blazingly fast! Here with the new (Next.js 12.1) On-demand
                    Incremental Static Regeneration implemented
                  </p>
                  <Link href='/blogposts'>
                    <a className='mt-3 text-indigo-600 inline-flex items-center'>
                      See the Blog
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
            {/* <-- Second feature --> */}
            <div className='p-4 lg:w-1/2 md:w-full'>
              <div className='flex bg-white border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
                <div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
                  <p>SSR</p>
                </div>
                <div className='flex-grow'>
                  <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                    Server-side rendering
                  </h2>
                  <p className='leading-relaxed text-base'>
                    SEO friendly and content always up to date!. The use case
                    for this app has no space for SSR so I will include an SSR
                    code example in another app.
                  </p>
                </div>
              </div>
            </div>
            {/* <-- Third feature --> */}
            <div className='p-4 lg:w-1/2 md:w-full'>
              <div className='flex bg-white border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
                <div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
                  <p>CSR</p>
                </div>
                <div className='flex-grow'>
                  <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                    CRUD and Client-side rendering
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Create, Read, Update and Delete (CRUD) Wp post types with
                    using Apollo Client useQuery and useMutation hooks (CSR).
                  </p>
                  <Link href='/users/log-in'>
                    <a className='mt-3 text-indigo-600 inline-flex items-center'>
                      Login to check
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

            {/* <-- Fourth feature --> */}

            <div className='p-4 lg:w-1/2 md:w-full'>
              <div className='flex bg-white border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
                <div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
                  <p>ACM</p>
                </div>
                <div className='flex-grow'>
                  <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                    Atlas Content Modeler
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Out of the box ACM supports mutations of custom fields and
                    has superior support for building relationships between
                    models.
                  </p>
                  <Link href='/users/log-in'>
                    <a className='mt-3 text-indigo-600 inline-flex items-center'>
                      Login to test CRUD
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

            {/* <-- End of list of features --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
