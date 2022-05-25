import BlogpostCard from '@/components/blogposts/BlogpostCard';
import { client } from '@/lib/apolloClient';
import useAuth from '@/hooks/useAuth';

import { GET_ALL_BLOGPOSTS } from '@/lib/blogposts/Queries';

export default function Blogposts({ blogposts }) {
  const { user } = useAuth();

  const isAdministrator = Boolean(
    user?.capabilities?.includes('administrator')
  );

  const revalidate = async () => {
    await fetch('/api/revalidate-blogposts');
    setResult('Done. Refresh the page to see the results');
    alert(result);
  };

  return (
    <main className='bg-white my-3 md:my-6 md:rounded-lg'>
      <section className='flex flex-col items-start justify-start py-12 px-12'>
        <h1 className='text-2xl sm:text-4xl font-extrabold text-gray-800'>
          About the NextPress project
        </h1>
        {isAdministrator ? (
          <button onClick={() => revalidate()} className='np-button my-8'>
            Revalidate
          </button>
        ) : (
          <div>
            <button className='bg-gray-300 text-lg rounded-md py-2 px-4 mt-8 mb-2'>
              Revalidate
            </button>
            <p>(Only active for WP administrators)</p>
          </div>
        )}
      </section>
      <div className='flex justify-center items-center'>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-6 mb-6'>
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
