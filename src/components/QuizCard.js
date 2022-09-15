import { Link } from 'react-router-dom';
import React from 'react';

const QuizCard = ({ title, btn, isCreateNew }) => {
  if (isCreateNew)
    return (
      <div className=' p-5 mx-auto min-w-full flex justify-between align-middle bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <h5 className='mt-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Create a new Quiz?
        </h5>

        <Link
          to={'/create'}
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Start Now
          <svg
            aria-hidden='true'
            className='ml-2 -mr-1 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'></path>
          </svg>
        </Link>
      </div>
    );

  let className = '';
  let goTo = '/';

  if (btn === 'Take') {
    goTo = '/quiz';
    className =
      'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
  } else if (btn === 'Retake') {
    goTo = '/quiz';
    className =
      'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-amber-700';
  } else if (btn === 'Results') {
    goTo = '/results';
    className =
      'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700';
  } else if (btn === 'Delete') {
    goTo = '/delete';
    className =
      'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800';
  } else
    className =
      'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800';
  return (
    <div className='p-5 mx-auto min-w-full flex justify-between align-middle bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <h5 className='mt-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {title}
      </h5>

      <Link to={goTo} className={className}>
        {btn}
        <svg
          aria-hidden='true'
          className='ml-2 -mr-1 w-4 h-4'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
      </Link>
    </div>
  );
};

export default QuizCard;
