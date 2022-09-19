import AddQuestion from './AddQuestion';
import { QuestionsContext } from './utils/questionsContext';
import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateQuiz = () => {
  const [form, setForm] = useState([]);

  const handleAddQuestion = (e) => {
    e.preventDefault();

    const inputState = {
      id: uuidv4(),
      question: '',
      options: [
        {
          id: uuidv4(),
          option: '',
          isCorrect: true,
        },
        {
          id: uuidv4(),
          option: '',
          isCorrect: false,
        },
      ],
    };

    setForm([...form, inputState]);
  };

  // const [quizQuestions, setQuizQuestions] = useState([
  //   {
  //     id: 1,
  //     question: '',
  //     options: [
  //       { id: uuidv4(), option: '', isCorrect: true },
  //       { id: uuidv4(), option: '', isCorrect: false },
  //     ],
  //   },
  // ]);

  return (
    <main className='flex flex-col items-center justify-between bg-white dark:bg-gray-900 dark:text-white my-5 px-6 mx-auto max-w-4xl text-center lg:p-12 lg:pt-8'>
      <h1 className='mb-8 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white'>
        Create a new Quiz
      </h1>
      <QuestionsContext.Provider value={{ form, setForm }}>
        <div className='flex flex-col items-start justify-between gap-0 w-full  md:gap-8'>
          {/* Left Section */}
          <div className='flex flex-col items-center justify-center text-left px-6 py-8 mx-auto w-full lg:p-0'>
            <form
              className='space-y-2 md:space-y-4 w-full'
              action='#'
              autoComplete='false'>
              <div>
                <label
                  htmlFor='title'
                  className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                  Title
                </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Quiz Title'
                  required=''
                />
              </div>
              <div>
                <label
                  htmlFor='description'
                  className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                  Description
                </label>
                <textarea
                  type='text'
                  name='description'
                  id='description'
                  placeholder='Quiz Description'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  required=''
                />
              </div>
              <div className='flex gap-4 w-full'>
                <div className='w-full'>
                  <label
                    htmlFor='winners'
                    className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    Number of Winners
                  </label>
                  <input
                    type='number'
                    min={0}
                    name='winners'
                    id='winners'
                    placeholder='5'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    required=''
                  />
                </div>
                <div className='relative w-full'>
                  <label
                    htmlFor='reward'
                    className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    Reward per Winner
                  </label>
                  <div className='flex absolute inset-y-0 right-8 top-7 items-center pl-3 pointer-events-none'>
                    Ⓝ
                  </div>
                  <input
                    type='number'
                    min={0}
                    name='reward'
                    id='reward'
                    placeholder='2'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    required=''
                  />
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <input
                  id='retake'
                  type='checkbox'
                  className='w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='retake'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Participants can retake the quiz multiple times
                </label>
              </div>
            </form>
          </div>
          {/* Right Section */}
          <div className='flex flex-col items-center justify-center text-left px-6 py-8 mx-auto w-full lg:p-0'>
            <h2 className='mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Configure Questions
            </h2>
            <form
              key='my-form'
              className='space-y-2 md:space-y-4 w-full'
              action='#'
              autoComplete='false'>
              <div className='flex flex-col gap-4'>
                {form.map((item, index) => {
                  return (
                    <AddQuestion
                      key={index}
                      id={item.id}
                      n={index + 1}
                      options={item.options}
                    />
                  );
                })}
                <button
                  onClick={handleAddQuestion}
                  className='text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-md p-2.5 text-center inline-flex items-center justify-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800'>
                  Add a new question
                </button>
              </div>
              <button
                className='mx-auto flex items-center bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded'
                onClick={(e) => {
                  e.preventDefault();
                  console.log(form);
                }}>
                Submit (to console)
              </button>
            </form>
          </div>
        </div>
      </QuestionsContext.Provider>
    </main>
  );
};

export default CreateQuiz;
