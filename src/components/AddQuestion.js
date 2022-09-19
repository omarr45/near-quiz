import { QuestionsContext } from './utils/questionsContext';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddQuestion = ({ n = 1, id, options }) => {
  const { form, setForm } = useContext(QuestionsContext);

  return (
    <div className='p-4 rounded-md space-y-3 bg-gray-200 dark:bg-gray-800'>
      <div className='flex items-center justify-between'>
        <label
          htmlFor={'q' + ('0' + n).slice(-2)}
          className='block text-lg mt-1 font-semibold text-gray-900 dark:text-white'>
          Question {n}
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            const newForm = form.filter((q) => q.id !== id);
            setForm(newForm);
          }}
          className='ml-auto text-red-700 bg-transparent border-2 border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-md font-semibold text-sm p-2.5 text-center inline-flex items-center justify-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
          Remove Question
        </button>
      </div>
      <input
        type='text'
        name={'question ' + n}
        id={'q' + ('0' + n).slice(-2)}
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
        placeholder='Question Text'
        required=''
        value={
          form.filter((q) => q.id === id)[0]
            ? form.filter((q) => q.id === id)[0].question
            : ''
        }
        onChange={(e) => {
          const newForm = form.map((q) => {
            if (q.id === id) {
              q.question = e.target.value;
            }
            return q;
          });
          setForm(newForm);
        }}
      />

      <p className='flex items-center justify-between pt-2 text-md font-semibold text-gray-900 dark:text-white'>
        Question {n} Options{' '}
        <button
          onClick={(e) => {
            e.preventDefault();
            // add a new option
            const newForm = form.map((q) => {
              if (q.id === id) {
                q.options.push({
                  id: uuidv4(),
                  option: '',
                  isCorrect: false,
                });
              }
              return q;
            });
            setForm(newForm);
          }}
          className='h-8 w-8 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center ml-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800'>
          <span className='text-lg'>+</span>
        </button>
      </p>

      {options.map((option, i) => {
        return (
          <div className='flex items-center' key={'div-opt-' + i}>
            <input
              key={'rad-opt-' + i}
              defaultChecked={option.isCorrect}
              onChange={(e) => {
                const newForm = form.map((q) => {
                  if (q.id === id) {
                    q.options = q.options.map((o) => {
                      if (o.id === option.id) {
                        o.isCorrect = e.target.checked;
                      } else {
                        o.isCorrect = false;
                      }
                      return o;
                    });
                  }
                  return q;
                });
                setForm(newForm);
              }}
              id={'bordered-radio-' + option.id}
              type='radio'
              value=''
              name={'bordered-radio-q' + n}
              className='w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            <label
              htmlFor={'bordered-radio-' + option.id}
              className='ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>
              <input
                type='text'
                key={`opt-${i}`}
                placeholder={'New Option'}
                onChange={(e) => {
                  // update option with e.target.value
                  const newForm = form.map((q) => {
                    if (q.id === id) {
                      q.options = q.options.map((o) => {
                        if (o.id === option.id) {
                          o.option = e.target.value;
                        }
                        return o;
                      });
                    }
                    return q;
                  });
                  setForm(newForm);
                }}
                value={
                  form
                    .find((q) => q.id === id)
                    .options.find((o) => o.id === option.id).option
                }
                className='pl-4 rounded border w-full border-gray-200 dark:border-gray-700 focus:ring-primary-500 focus:border-primary-500'
              />
            </label>
            <button
              type='button'
              onClick={(e) => {
                e.preventDefault();
                // remove option
                const newForm = form.map((q) => {
                  if (q.id === id) {
                    q.options = q.options.filter((o) => o.id !== option.id);
                  }
                  return q;
                });
                setForm(newForm);
              }}
              className='h-8 w-9 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium  rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center ml-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
              <span>X</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AddQuestion;
