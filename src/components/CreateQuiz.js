import AddQuestion from './AddQuestion';
import { QuestionsContext } from './utils/questionsContext';
import React from 'react';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

const CreateQuiz = () => {
  const HALF_NEAR = 10000000000;
  const ONE_NEAR = 1000000000000000000000000;

  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [availableFrom, setAvailableFrom] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [availableTill, setAvailableTill] = useState(
    new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0]
  );
  const [numberOfWinner, setNumberOfWinner] = useState('');
  const [rewardPerWinner, setRewardPerWinner] = useState('');
  const [percentageToWin, setPercentageToWin] = useState('');
  const [numberOfTrials, setNumberOfTrials] = useState('');

  const [form, setForm] = useState([]);

  const handleAddQuestion = (e) => {
    e.preventDefault();

    const inputState = {
      id: uuidv4(),
      questionText: '',
      options: [
        {
          id: uuidv4(),
          option: '',
        },
        {
          id: uuidv4(),
          option: '',
        },
      ],
      tags: [],
      trueHashed: '1',
    };

    setForm([...form, inputState]);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    /*
      quizTitle, ✅
      quizDescription, ✅
      questions, ✅
      specificUsers, 
      availableFrom, ✅
      availableTill, ✅
      allowMultipleTrials, ✅
      rewardPerWinner, ✅
      winnerCount, ✅
      percentageToWin, ✅
      |
      |
      ((rewardPerWinner * winnerCount) + one_Near + half_Near).toLocaleString('fullwide', {useGrouping:false})
      */
    const money =
      parseNearAmount(rewardPerWinner) * numberOfWinner + ONE_NEAR + HALF_NEAR;

    const newQuestions = form.map((q) => {
      return {
        ...q,
        options: q.options.map((option) => option.option),
      };
    });

    const avFromInSeconds =
      Math.floor(new Date(availableFrom).getTime()) * 1000000;

    const avTillInSeconds =
      Math.floor(new Date(availableTill).getTime()) * 1000000;

    console.log({
      quiz: {
        quizTitle,
        quizDescription,
        questions: { ...newQuestions },
        specificUsers: [],
        availableFrom: avFromInSeconds,
        availableTill: avTillInSeconds,
        allowMultipleTrials: numberOfTrials,
        rewardPerWinner,
        winnerCount: numberOfWinner,
        percentageToWin,
      },
    });

    window.contract.createQuiz(
      {
        quiz: {
          quizTitle,
          quizDescription,
          questions: { ...newQuestions },
          specificUsers: [],
          availableFrom: avFromInSeconds,
          availableTill: avTillInSeconds,
          allowMultipleTrials: numberOfTrials,
          rewardPerWinner,
          winnerCount: numberOfWinner,
          percentageToWin,
        },
      },
      100000000000000,
      money
    );
    // Add_Quiz(
    //   {
    //     quiz: {
    //       quizTitle,
    //       quizDescription,
    //       questions: { ...newQuestions },
    //       specificUsers: [],
    //       availableFrom: avFromInSeconds,
    //       availableTill: avTillInSeconds,
    //       allowMultipleTrials: numberOfTrials,
    //       rewardPerWinner,
    //       winnerCount: numberOfWinner,
    //       percentageToWin,
    //     },
    //   },
    //   money.toLocaleString('fullwide', { useGrouping: false })
    // )
    //   .then((res) => {
    //     console.log('Success ', res);
    //   })
    //   .catch((err) => {
    //     console.log('Error ', err);
    //   });
  };

  const { t, i18n } = useTranslation();

  return (
    <main className='flex flex-col items-center justify-between bg-white dark:bg-gray-900 dark:text-white my-5 px-6 mx-auto max-w-4xl text-center lg:p-12 lg:pt-8'>
      <h1 className='mb-8 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white'>
        {t('create-quiz-title')}
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
                  style={
                    i18n.language === 'ar'
                      ? {
                          textAlign: 'right',
                        }
                      : {}
                  }
                  htmlFor='title'
                  className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                  {t('create-quiz-form-title')}
                </label>
                <input
                  type='text'
                  style={
                    i18n.language === 'ar'
                      ? {
                          textAlign: 'right',
                        }
                      : {}
                  }
                  name='title'
                  id='title'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder={t('create-quiz-form-title-ph')}
                  required=''
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                />
              </div>
              <div>
                <label
                  style={
                    i18n.language === 'ar'
                      ? {
                          textAlign: 'right',
                        }
                      : {}
                  }
                  htmlFor='description'
                  className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                  {t('create-quiz-form-desc')}
                </label>
                <textarea
                  style={
                    i18n.language === 'ar'
                      ? {
                          textAlign: 'right',
                        }
                      : {}
                  }
                  type='text'
                  name='description'
                  id='description'
                  placeholder={t('create-quiz-form-desc-ph')}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  required=''
                  value={quizDescription}
                  onChange={(e) => setQuizDescription(e.target.value)}
                />
              </div>
              <div
                className={`flex flex-col gap-4 w-full ${
                  i18n.language === 'en'
                    ? 'sm:flex-row'
                    : ' sm:flex-row-reverse'
                }`}>
                <div className='w-full'>
                  <label
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    htmlFor='av-from'
                    className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    {t('create-quiz-form-date-from')}
                  </label>
                  <input
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    type='date'
                    name='av-from'
                    id='av-from'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    required=''
                    value={availableFrom}
                    onChange={(e) => setAvailableFrom(e.target.value)}
                  />
                </div>
                <div className='w-full'>
                  <label
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    htmlFor='av-until'
                    className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    {t('create-quiz-form-date-till')}
                  </label>
                  <input
                    type='date'
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    name='av-until'
                    id='av-until'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    required=''
                    value={availableTill}
                    onChange={(e) => setAvailableTill(e.target.value)}
                  />
                </div>
              </div>
              <div
                className={`flex flex-col gap-4 w-full ${
                  i18n.language === 'en'
                    ? 'sm:flex-row'
                    : ' sm:flex-row-reverse'
                }`}>
                <div className='w-full'>
                  <label
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    htmlFor='winners'
                    className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    {t('create-quiz-form-number-winners')}
                  </label>
                  <input
                    type='number'
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    min={0}
                    name='winners'
                    id='winners'
                    placeholder='5'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    required=''
                    value={numberOfWinner}
                    onChange={(e) => setNumberOfWinner(e.target.value)}
                  />
                </div>
                <div className='w-full'>
                  <label
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                    htmlFor='reward'
                    className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    {t('create-quiz-form-reward')}
                  </label>
                  <input
                    type='number'
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    min={0}
                    name='reward'
                    id='reward'
                    placeholder='2'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    required=''
                    value={rewardPerWinner}
                    onChange={(e) => setRewardPerWinner(e.target.value)}
                  />
                </div>
              </div>
              <div
                className={`flex flex-col gap-4 w-full ${
                  i18n.language === 'en'
                    ? 'sm:flex-row'
                    : ' sm:flex-row-reverse'
                }`}>
                <div className='w-full'>
                  <label
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    htmlFor='reward'
                    className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    {t('create-quiz-form-percentage')}
                  </label>
                  <input
                    type='number'
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    min={0}
                    name='reward'
                    id='reward'
                    placeholder='50'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    required=''
                    value={percentageToWin}
                    onChange={(e) => setPercentageToWin(e.target.value)}
                  />
                </div>
                <div className='w-full'>
                  <label
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    htmlFor='trials'
                    className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
                    {t('create-quiz-form-trials')}
                  </label>
                  <input
                    type='number'
                    style={
                      i18n.language === 'ar'
                        ? {
                            textAlign: 'right',
                          }
                        : {}
                    }
                    min={0}
                    name='trials'
                    id='trials'
                    placeholder='3'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    required=''
                    value={numberOfTrials}
                    onChange={(e) => setNumberOfTrials(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className='flex items-center mb-4'>
                <input
                  id='retake'
                  type='checkbox'
                  className='w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                style={
                i18n.language === 'ar'
                  ? {
                      textAlign: 'right',
                    }
                  : {}
              }
                  htmlFor='retake'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Participants can retake the quiz multiple times
                </label>
              </div> */}
            </form>
          </div>
          {/* Right Section */}
          <div className='flex flex-col items-center justify-center text-left px-6 py-8 mx-auto w-full lg:p-0'>
            <h2 className='mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              {t('create-quiz-questions-title')}
            </h2>
            <form
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
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
                  {t('create-quiz-questions-btn')}
                </button>
              </div>
              <button
                className='mx-auto flex items-center bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded'
                dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                {t('create-quiz-form-button')}
              </button>
            </form>
          </div>
        </div>
      </QuestionsContext.Provider>
    </main>
  );
};

export default CreateQuiz;
