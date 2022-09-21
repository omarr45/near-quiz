import { useEffect, useState } from 'react';

import Question from './Question';
import { getQuizzes } from '../utils/functions';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TakeQuiz = () => {
  // const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [quiz, setQuiz] = useState();
  const [loading, setLoading] = useState(true);

  const handleButtonClick = (action) => {
    if (action === 'next') {
      if (currentQuestion < quiz.questions.length - 1)
        setCurrentQuestion(currentQuestion + 1);
    } else if (action === 'prev') {
      if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    const getQuiz = async () => {
      try {
        setLoading(true);
        const quizID = pathname.split('/')[2];
        const quizzes = await getQuizzes();
        const ourQuiz = quizzes.find(
          (quiz) => quiz.quizId.toString() === quizID.toString()
        );
        setQuiz(ourQuiz);
        // console.log(ourQuiz);
      } catch (error) {
        console.log({ error });
        setQuiz(null);
      } finally {
        setLoading(false);
      }
    };

    getQuiz();

    console.log('Quiz ID: ', pathname.split('/')[2]);
  }, [pathname]);

  const { t, i18n } = useTranslation();

  return (
    <main className='bg-white dark:bg-gray-900 dark:text-white py-12 px-6 mx-auto max-w-4xl text-left lg:p-12'>
      <h2 className='text-3xl font-bold'>{quiz?.quizTitle}</h2>
      <p className='text-xl my-2 mb-5'>{quiz?.quizDescription}</p>

      {
        // started ? (
        !loading ? (
          quiz ? (
            <>
              {/* Progress */}
              <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
                <div
                  dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                  className='bg-primary-500 text-xs font-medium text-white text-center p-1.5 leading-none rounded-full'
                  style={{
                    marginLeft: `${i18n.language === 'ar' ? 'auto' : '0'}`,
                    marginRight: `${i18n.language === 'ar' ? '0' : 'auto'}`,
                    width: `${
                      ((currentQuestion + 1) / quiz?.questions.length) * 100
                    }%`,
                  }}>
                  {t('add-question-title')} {currentQuestion + 1} /{' '}
                  {quiz?.questions.length}
                </div>
              </div>

              <hr className='my-4 dark:opacity-25' />

              {/* Question */}
              <div className='flex flex-col gap-4 my-4'>
                <Question
                  question={quiz?.questions[currentQuestion]}
                  key={quiz?.questions[currentQuestion].questionText}
                />
              </div>

              {/* Buttons */}
              <div
                className={`flex justify-between ${
                  i18n.language === 'en' ? 'flex-row' : ' flex-row-reverse'
                }`}>
                <button
                  disabled={currentQuestion === 0}
                  onClick={() => handleButtonClick('prev')}
                  className={`font-semibold py-2 px-4 rounded ${
                    currentQuestion === 0
                      ? 'cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-gray-700'
                      : 'bg-primary-500 hover:bg-primary-700 text-white'
                  }`}>
                  {t('take-quiz-previous')}
                </button>
                {currentQuestion === quiz?.questions.length - 1 ? (
                  <button className='flex items-center bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded'>
                    {t('take-quiz-submit')}
                  </button>
                ) : (
                  <button
                    onClick={() => handleButtonClick('next')}
                    className='bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded'>
                    {t('take-quiz-next')}
                  </button>
                )}
              </div>
            </>
          ) : (
            <div
              className='font-bold my-32 mx-auto text-center'
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
              <h2 className='text-3xl'>{t('take-quiz-error-title')}</h2>
              <h4 className='text-xl mt-8'>{t('take-quiz-error-subtitle')}</h4>
            </div>
          )
        ) : (
          <div className='flex justify-center items-center h-96'>
            <div className='flex flex-col items-center justify-center'>
              <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
              <p className='text-xl font-semibold mt-4'>
                {t('take-quiz-loading')}
              </p>
            </div>
          </div>
        )
        // ) : (
        //   <>
        //     <p className='text-lg my-2'>
        //       Quiz Duration: 30 mins. Timer will begin after you click start
        //     </p>

        //     <button
        //       onClick={() => setStarted(true)}
        //       className='bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded'>
        //       Start Quiz
        //     </button>
        //   </>
        // )
      }
    </main>
  );
};

export default TakeQuiz;
