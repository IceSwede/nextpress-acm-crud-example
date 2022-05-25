import useAuth from '@/hooks/useAuth';
import AuthContent from '@/components/users/AuthContent';

import MyNoteCrudForm from '@/components/mynotes/MyNoteCrudForm';

export default function CreateMyNote() {
  const { user } = useAuth();
  const canCreatePosts = Boolean(user?.capabilities?.includes('publish_posts'));

  return (
    <AuthContent>
      {canCreatePosts ? (
        <MyNoteCrudForm user={user} />
      ) : (
        <p>You don&#39;t have the permissions necessary to create posts.</p>
      )}
    </AuthContent>
  );
}
