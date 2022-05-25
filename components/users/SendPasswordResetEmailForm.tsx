import { useMutation, gql } from '@apollo/client';

const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation sendPasswordResetEmail($username: String!) {
    sendPasswordResetEmail(input: { username: $username }) {
      user {
        databaseId
      }
    }
  }
`;

export default function SendPasswordResetEmailForm() {
  const [sendPasswordResetEmail, { loading, error, data }] = useMutation(
    SEND_PASSWORD_RESET_EMAIL
  );
  const wasEmailSent = Boolean(data?.sendPasswordResetEmail?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email } = Object.fromEntries(data);
    sendPasswordResetEmail({
      variables: {
        username: email,
      },
    }).catch((error) => {
      console.error(error);
    });
  }

  if (wasEmailSent) {
    return (
      <p>
        {' '}
        Please check your email. A password reset link has been sent to you.
      </p>
    );
  }

  return (
    <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <form className='space-y-6' method='post' onSubmit={handleSubmit}>
        <p>
          Enter the email associated with your account and you&#39;ll be sent a
          link to reset your password.
        </p>
        <fieldset disabled={loading} aria-busy={loading}>
          <label
            className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
            htmlFor='password-reset-email'>
            Email
          </label>
          <input
            className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
            id='password-reset-email'
            type='email'
            name='email'
            autoComplete='email'
            required
          />
          {error ? <p className='error-message'>{error.message}</p> : null}
          <button
            className='mt-2 w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            type='submit'
            disabled={loading}>
            {loading ? 'Sending...' : 'Send password reset email'}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
