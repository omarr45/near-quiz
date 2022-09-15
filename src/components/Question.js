import React from 'react';

const Question = ({ question }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-2xl font-bold'>{question.questionText}</h4>
      <div className='flex flex-col gap-4'>
        {question.answerOptions.map((answerOption) => (
          <div className='flex gap-4' key={answerOption.answerText}>
            <input
              type='radio'
              id={answerOption.answerText}
              name='hosting'
              value={answerOption.answerText}
              className='hidden peer'
              required=''
            />
            <label
              htmlFor={answerOption.answerText}
              className='inline-flex justify-center items-center p-5 w-full text-gray-400 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-300 peer-checked:border-primary-500 peer-checked:font-semibold peer-checked:text-primary-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700'>
              <div className='block'>
                <div className='w-full text-xl'>{answerOption.answerText}</div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
