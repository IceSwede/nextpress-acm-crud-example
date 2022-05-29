import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import Link from 'next/link';

const RESET_PASSWORD = gql`
  mutation resetUserPassword(
    $key: String!
    $login: String!
    $password: String!
  ) {
    resetUserPassword(
      input: { key: $key, login: $login, password: $password }
    ) {
      user {
        databaseId
      }
    }
  }
`;

interface Props {
  resetKey: string;
  login: string;
}

export default function SetPasswordForm({ resetKey: key, login }: Props) {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [clientErrorMessage, setClientErrorMessage] = useState('');
  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD);
  const wasPasswordReset = Boolean(data?.resetUserPassword?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    resetPassword({
      variables: {
        key,
        login,
        password,
      },
    }).catch((error) => {
      console.error(error);
    });
    console.log('Set password completed');
  }

  function validate() {
    setClientErrorMessage('');

    const isPasswordLongEnough = password.length >= 5;
    if (!isPasswordLongEnough) {
      setClientErrorMessage('Password must be at least 5 characters.');
      return false;
    }

    const doPasswordsMatch = password === passwordConfirm;
    if (!doPasswordsMatch) {
      setClientErrorMessage('Passwords must match.');
      return false;
    }

    return true;
  }

  if (wasPasswordReset) {
    console.log('Password set');
    return (
      <>
        <p>Your new password has been set!</p>
        <Link href='/users/log-in'>
          <a>Log in</a>
        </Link>
      </>
    );
  }

  return (
    <div className='flex flex-col justify-start items-center mt-12'>
      <div className='bg-white shadow-md border border-gray-200 rounded-lg w-96 p-4 sm:p-6 lg:p-8 my-6'>
        <form className='space-y-6' method='post' onSubmit={handleSubmit}>
          <fieldset disabled={loading} aria-busy={loading}>
            <label
              className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
              htmlFor='new-password'>
              Password
            </label>
            <input
              className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
              id='new-password'
              type='password'
              value={password}
              autoComplete='new-password'
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <label
              className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
              htmlFor='password-confirm'>
              Confirm Password
            </label>
            <input
              className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
              id='password-confirm'
              type='password'
              value={passwordConfirm}
              autoComplete='new-password'
              onChange={(event) => setPasswordConfirm(event.target.value)}
              required
            />
            {clientErrorMessage ? (
              <p className='error-message'>{clientErrorMessage}</p>
            ) : null}
            {error ? <p className='error-message'>{error.message}</p> : null}
            <button
              className='np-button w-full '
              type='submit'
              disabled={loading}>
              {loading ? 'Saving...' : 'Set password'}
            </button>
          </fieldset>
        </form>
        <p className='mt-3'>
          Return to{' '}
          <Link href='/users/log-in'>
            <a className='text-indigo-600 hover:underline'>Login</a>
          </Link>{' '}
          after setting the password{' '}
          <span className='italic text-xs text-red-500 '>
            (ToDo: Add auto-redirect)
          </span>
        </p>
      </div>
    </div>
  );
}
