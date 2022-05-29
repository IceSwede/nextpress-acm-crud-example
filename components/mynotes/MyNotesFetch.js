import MyNoteCard from '@/components/mynotes/MyNoteCard';

import { useQuery } from '@apollo/client';
import { GET_ALL_MYNOTES } from '@/lib/mynotes/Queries';

export default function MyNotesFetch({ user }) {
  const { data, error, loading } = useQuery(GET_ALL_MYNOTES, {
    variables: {
      author: user.databaseId,
    },
  });

  if (error || !data) return <h2>Error while fetching your notes</h2>;

  console.log('Data:', data);

  const mynotes = data?.mynotes?.edges?.map((edge) => edge.node) || [];
  const haveMyNotes = Boolean(mynotes.length);
  console.log(haveMyNotes);

  return (
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-1 gap-x-6 mb-6'>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error has occurred.</p>
        ) : !haveMyNotes ? (
          <p>Ooops! You have no notes.</p>
        ) : (
          mynotes.map((mynote) => {
            return <MyNoteCard key={mynote.id} mynote={mynote} user={user} />;
          })
        )}
      </div>
    </div>
  );
}
