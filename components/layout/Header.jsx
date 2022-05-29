import { useState } from 'react';
import Link from 'next/link';

import useAuth from '@/hooks/useAuth';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const { loggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='container w-full sticky top-0 bg-slate-50 z-50 flex justify-between items-center py-4 sm:py-6 border-b-2 mt-4'>
      {/* Left - Logo */}

      <Link href='/'>
        <a className='font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-900 to-indigo-600'>
          NEXTPRESS
        </a>
      </Link>

      {/* Right */}
      <nav className='flex  items-center justify-end text-lg text-gray-900 md:ml-auto'>
        <ul className='space-x-8'>
          <li className='hidden md:inline cursor-pointer hover:text-indigo-400'>
            <Link href='/blogposts'>
              <a>Blog</a>
            </Link>
          </li>

          {!loggedIn ? (
            <li className='hidden md:inline cursor-pointer bg-indigo-600 hover:bg-indigo-800 py-2 px-7 mx-4 rounded-lg'>
              <Link href='/users/log-in'>
                <a className='text-white text-lg'>Login</a>
              </Link>
            </li>
          ) : (
            <>
              <li className='hidden md:inline cursor-pointer mr-3 hover:text-indigo-400'>
                <Link href='/mynotes'>
                  <a>My notes</a>
                </Link>
              </li>

              <li className='hidden md:inline cursor-pointer bg-indigo-600 hover:bg-indigo-800 py-2 px-4 mx-4 rounded-lg'>
                <Link href='/users/log-out'>
                  <a className='text-white text-lg'>Logout</a>
                </Link>
              </li>
            </>
          )}
          {!menuOpen && (
            <HiMenu
              className='text-3xl text-gray-900 md:hidden cursor-pointer'
              onClick={() => setMenuOpen(true)}
            />
          )}
        </ul>

        {/* Open mobile menu starts      */}
        <div className='flex relative'>
          {menuOpen && (
            <AiOutlineClose
              fontSize={28}
              className='text-white md:hidden cursor-pointer'
              onClick={() => setToggleMenu(false)}
            />
          )}
          {menuOpen && (
            <ul
              className='z-10 fixed -top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl lg:hidden list-none
            flex flex-col justify-start items-end rounded-md bg-white text-gray-700 animate-slide-in'>
              <li className='text-3xl mt-3 mb-6 cursor-pointer'>
                <AiOutlineClose onClick={() => setMenuOpen(false)} />
              </li>

              <li className='my-2 mr-3 text-lg cursor-pointer hover:underline'>
                <Link href='/blogposts' onClick={() => setMenuOpen(false)}>
                  <a onClick={() => setMenuOpen(false)}>Blog</a>
                </Link>
              </li>

              {!loggedIn ? (
                <>
                  <li className='my-2 mr-3 text-lg cursor-pointer hover:underline'>
                    <Link href='/users/log-in'>
                      <a onClick={() => setMenuOpen(false)}>Login</a>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className='my-2 mr-3 text-lg cursor-pointer hover:underline'>
                    <Link href='/mynotes'>
                      <a onClick={() => setMenuOpen(false)}>My notes</a>
                    </Link>
                  </li>

                  <li className='my-2 mr-3 text-lg cursor-pointer hover:underline'>
                    <Link href='/users/log-out'>
                      <a onClick={() => setMenuOpen(false)}>Log Out</a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
