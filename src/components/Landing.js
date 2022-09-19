import { Link } from 'react-router-dom';
import React from 'react';

const Landing = () => {
  return (
    <main className='bg-white dark:bg-gray-900 my-10 px-6 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
      <h1 className='logo-font my-4 text-6xl tracking-wider font-semibold leading-none text-gray-900 md:text-7xl lg:text-8xl dark:text-white'>
        Quizly
      </h1>
      <p className='my-12 px-4 text-2xl font-bold  text-gray-900 md:text-3xl lg:text-4xl dark:text-white max-w-3xl mx-auto'>
        Create and solve quizzes with rewards on NEAR blockchain!
      </p>
      <div className='flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
        <Link
          to={'/profile'}
          href='https://near.org/'
          className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'>
          Login with NEAR
          <svg
            className='ml-2 -mr-1 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'></path>
          </svg>
        </Link>
        <a
          href='https://near.org/'
          className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
          <svg
            className='mr-2 -ml-1 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
          </svg>
          Watch video
        </a>
      </div>
      <p className='my-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
        Powered by{' '}
        <a className='hover:underline' href='https://near.org/'>
          NEAR
        </a>
      </p>
    </main>
  );
};

export default Landing;
