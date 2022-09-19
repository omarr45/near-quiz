import { Link } from 'react-router-dom';
import QuizCard from './QuizCard';
import React from 'react';
import { useState } from 'react';

const Profile = () => {
  const [chosenTab, setChosenTab] = useState(2);

  const myQuizzesCards = [
    { name: 'Quiz Name 1', button: 'Take' },
    { name: 'Quiz Name 2', button: 'Take' },
    { name: 'Quiz Name 3', button: 'Retake' },
    { name: 'Quiz Name 4', button: 'Results' },
    { name: 'Quiz Name 5', button: 'Results' },
  ];

  const createdQuizzesCards = [
    { name: 'Quiz Name 1', button: 'Delete' },
    { name: 'Quiz Name 2', button: 'Delete' },
  ];

  return (
    <div className='px-6 mx-auto max-w-4xl text-center lg:py-5 lg:px-12 dark:text-white'>
      {/* avatar */}
      <header className='flex flex-col justify-between items-center pb-4 md:flex-row md:mt-0 mt-8'>
        <div className='flex items-center'>
          <div className='w-28 rounded-full overflow-hidden'>
            <img
              src='https://placeimg.com/192/192/people'
              alt='avatar placeholder'
            />
          </div>
          <div className='flex flex-col gap-2 mr-auto ml-8 items-start'>
            <h2 className='text-3xl font-bold'>Welcome, Omar</h2>
            <h4 className='text-1xl font-semibold'>omar45.testnet</h4>
          </div>
        </div>
        <Link
          to={'/create'}
          className='mt-5 md:mt-0 inline-flex items-center py-4 px-6 md:py-2 md:px-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Create a new Quiz
        </Link>
      </header>

      <ul className='grid gap-4 w-full mt-4 font-bold md:grid-cols-2'>
        <li>
          <input
            type='radio'
            id='hosting-small'
            name='hosting'
            value='hosting-small'
            className='hidden peer'
            required=''
            onClick={() => setChosenTab(1)}
            defaultChecked={chosenTab === 1}
          />
          <label
            htmlFor='hosting-small'
            className='inline-flex justify-center items-center p-5 w-full text-gray-400 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-300 peer-checked:border-primary-500 peer-checked:text-primary-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700'>
            <div className='block'>
              <div className='w-full text-xl'>Quizzes Created</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type='radio'
            id='hosting-big'
            name='hosting'
            value='hosting-big'
            className='hidden peer'
            onClick={() => setChosenTab(2)}
            defaultChecked={chosenTab === 2}
          />
          <label
            htmlFor='hosting-big'
            className='inline-flex justify-center items-center p-5 w-full text-gray-400 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-300 peer-checked:border-primary-500 peer-checked:text-primary-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700'>
            <div className='block'>
              <div className='w-full text-xl'>My Quizzes</div>
            </div>
          </label>
        </li>
      </ul>

      {/* cards */}
      {chosenTab === 2 ? (
        <div className='flex gap-4 flex-col my-4'>
          {myQuizzesCards.map((card) => (
            <QuizCard title={card.name} btn={card.button} key={card.name} />
          ))}
        </div>
      ) : (
        <div className='flex gap-4 flex-col my-4'>
          {createdQuizzesCards.map((card) => (
            <QuizCard title={card.name} btn={card.button} key={card.name} />
          ))}
          <hr className='my-1 dark:opacity-25' />
          <QuizCard isCreateNew />
        </div>
      )}
    </div>
  );
};

export default Profile;
