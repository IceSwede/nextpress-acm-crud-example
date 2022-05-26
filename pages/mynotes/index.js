import useAuth from '@/hooks/useAuth';
import AuthContent from '@/components/users/AuthContent';
import Link from 'next/link';

import MyNotesFetch from '@/components/mynotes/MyNotesFetch';

export default function MyNotes() {
  const { user } = useAuth();

  return (
    <main className='bg-white my-3 md:my-6 md:rounded-lg'>
      <section className='flex flex-col items-start justify-start py-12 px-12'>
        <h1 className='text-2xl sm:text-4xl font-extrabold text-gray-800'>
          Client-side rendering (CSR) and CRUD operations
        </h1>
        <p className='text-left mt-5 text-gray-800 text-lg'>
          This is the CRUD (Create, Reade, Update, Delete) part of the NextPress
          project, making use of the Apollo Client useQuery and useMutation
          hooks. This is purely for demo purposes and the posts will be deleted
          at the end of the day. The maximum number of posts per user is set to
          five.
        </p>
        <p className='text-left mt-5 text-indigo-700  '>
          You are logged in as {user.username}
        </p>
        <Link href={`/mynotes/create`}>
          <a className='bg-indigo-600 text-white rounded-md my-8 py-2 px-4 flex justify-center'>
            Create Note
          </a>
        </Link>
      </section>
      <AuthContent>
        {user ? (
          <MyNotesFetch user={user} />
        ) : (
          <p>You don&#39;t have the permissions necessary to create posts.</p>
        )}
      </AuthContent>
    </main>
  );
}
