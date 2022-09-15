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
    <div className='p-6 mx-auto max-w-4xl text-center lg:py-16 lg:px-12 dark:text-white'>
      {/* avatar */}
      <div className='w-32 rounded-full overflow-hidden mx-auto mb-4'>
        <img
          src='https://placeimg.com/192/192/people'
          alt='avatar placeholder'
        />
      </div>

      <h2 className='text-3xl font-bold'>Omar</h2>

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
          <hr className='my-1' />
          <QuizCard isCreateNew />
        </div>
      )}
    </div>
  );
};

export default Profile;
