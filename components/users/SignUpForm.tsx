import { useMutation, gql } from '@apollo/client';
import Link from 'next/link';

const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $username: String!
  ) {
    registerUser(
      input: {
        username: $username
        email: $email
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      user {
        databaseId
      }
    }
  }
`;

export default function SignUpForm() {
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  const wasSignUpSuccessful = Boolean(data?.registerUser?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    register({
      variables: values,
    }).catch((error) => {
      console.error(error);
    });
  }

  if (wasSignUpSuccessful) {
    return (
      <p>
        Thanks! Check your email – an account confirmation link has been sent to
        you.
      </p>
    );
  }

  return (
    <div className='flex flex-col justify-start items-center mt-12'>
      <div className='bg-white shadow-md border border-gray-200 rounded-lg w-96 p-4 sm:p-6 lg:p-8 my-6'>
        <form className='space-y-6' method='post' onSubmit={handleSubmit}>
          <fieldset disabled={loading} aria-busy={loading}>
            <label
              className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
              htmlFor='sign-up-username'>
              Username
            </label>
            <input
              className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
              id='sign-up-username'
              type='text'
              name='username'
              required
            />
            <label
              className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
              htmlFor='sign-up-first-name'>
              First name
            </label>
            <input
              className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
              id='sign-up-first-name'
              type='text'
              name='firstName'
              autoComplete='given-name'
              required
            />
            <label
              className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
              htmlFor='sign-up-last-name'>
              Last name
            </label>
            <input
              className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
              id='sign-up-first-name'
              type='text'
              name='lastName'
              autoComplete='family-name'
              required
            />
            <label
              className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
              htmlFor='sign-up-email'>
              Email
            </label>
            <input
              className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
              id='sign-up-email'
              type='email'
              name='email'
              autoComplete='username'
              required
            />
            {error ? (
              error.message.includes('This username is already registered') ? (
                <p className='error-message'>
                  You&#39;re already signed up!{' '}
                  <Link href='/users/log-in'>Log in</Link>
                </p>
              ) : (
                <p className='error-message'>{error.message}</p>
              )
            ) : null}
            <button
              className='mt-2 w-full text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              type='submit'
              disabled={loading}>
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
          </fieldset>
          <p>
            Already have an account?{' '}
            <Link href='/users/log-in'>
              <a className='text-indigo-600 hover:underline'>Log in</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
