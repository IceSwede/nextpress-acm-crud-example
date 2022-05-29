import { useState } from 'react';
import BlogpostCard from '@/components/blogposts/BlogpostCard';
import { client } from '@/lib/apolloClient';
import useAuth from '@/hooks/useAuth';

import { GET_ALL_BLOGPOSTS } from '@/lib/blogposts/Queries';

export default function Blogposts({ blogposts }) {
  const { user } = useAuth();
  const [result, setResult] = useState('');

  const isAdministrator = Boolean(
    user?.capabilities?.includes('administrator')
  );

  const revalidate = async () => {
    await fetch('/api/revalidate-blogposts');
    setResult('Done. Refresh the page to see the results');
    alert(result);
  };

  return (
    <div className='flex justify-center'>
      <main className='bg-white my-3 md:my-6 md:rounded-lg max-w-3xl'>
        <section className='flex flex-col items-start justify-start px-12 pt-12 pb-2'>
          <h1 className='text-2xl sm:text-4xl font-extrabold text-gray-800'>
            Blog - About NextPress
          </h1>
          <p className='text-left mt-5 text-gray-800 text-lg'>
            The fictive use-case for the NextPress app is the following: An
            administrator of a WordPress site maintains a blog written in
            Markdown. A group of people contributes to the blog with text
            snippets in Markdown format (see{' '}
            <span className='italic'>My notes</span> after logging in). The
            contributors can see all contrbutions but only edit and delete their
            own.
          </p>
          <p className='text-left mt-5 text-gray-800 text-lg'>
            The blogposts below give furhter insigth into the code base and the{' '}
            <span className='italic'>Notes</span> provide some additional
            details.
          </p>
          {isAdministrator ? (
            <button onClick={() => revalidate()} className='np-button my-8'>
              Revalidate
            </button>
          ) : (
            <div>
              <button className='bg-gray-300 text-lg rounded-md py-2 px-4 mt-8 mb-2 cursor-default'>
                Revalidate
              </button>
              <p className='italic'>
                Revalidation (On-Demand ISR) is only active for administrators
              </p>
            </div>
          )}
        </section>
        <div className='flex justify-center items-center mt-6'>
          <ul className='grid grid-cols-1 gap-x-6 mb-6'>
            {blogposts &&
              blogposts.length > 0 &&
              blogposts.map((blogpost) => {
                return (
                  <BlogpostCard key={blogpost.node.id} blogpost={blogpost} />
                );
              })}

            {!blogposts ||
              (blogposts.length === 0 && (
                <li>
                  <p>Oops, no posts found!</p>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GET_ALL_BLOGPOSTS,
  });

  return {
    props: {
      blogposts: response?.data?.blogposts?.edges ?? [],
    },
  };
}
