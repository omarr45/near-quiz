import Question from './Question';
import { useState } from 'react';

const TakeQuiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '3', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '7', isCorrect: true },
        { answerText: '9', isCorrect: false },
      ],
    },
  ];

  const handleButtonClick = (action) => {
    if (action === 'next') {
      if (currentQuestion < questions.length - 1)
        setCurrentQuestion(currentQuestion + 1);
    } else if (action === 'prev') {
      if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <main className='bg-white dark:bg-gray-900 dark:text-white my-5 px-6 mx-auto max-w-4xl text-left lg:p-12'>
      <h2 className='text-3xl font-bold'>Quiz Title</h2>
      <p className='text-xl my-2'>
        Quiz Description. This quiz is out of 5 marks.
      </p>

      {started ? (
        <>
          <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
            <div
              className='bg-primary-500 text-xs font-medium text-white text-center p-1.5 leading-none rounded-full'
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}>
              Question {currentQuestion + 1} / {questions.length}
            </div>
          </div>

          <hr className='my-4 dark:opacity-25' />

          <div className='flex flex-col gap-4 my-4'>
            <Question
              question={questions[currentQuestion]}
              key={questions[currentQuestion].questionText}
            />
          </div>

          <div className='flex justify-between'>
            <button
              disabled={currentQuestion === 0}
              onClick={() => handleButtonClick('prev')}
              className={`font-semibold py-2 px-4 rounded ${
                currentQuestion === 0
                  ? 'cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-gray-700'
                  : 'bg-primary-500 hover:bg-primary-700 text-white'
              }`}>
              Previous
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button className='flex items-center bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded'>
                Submit
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
              </button>
            ) : (
              <button
                onClick={() => handleButtonClick('next')}
                className='bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded'>
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <p className='text-lg my-2'>
            Quiz Duration: 30 mins. Timer will begin after you click start
          </p>

          <button
            onClick={() => setStarted(true)}
            className='bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded'>
            Start Quiz
          </button>
        </>
      )}
    </main>
  );
};

export default TakeQuiz;
