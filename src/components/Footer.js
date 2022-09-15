import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className='p-4 bg-gray-100 md:p-8 lg:p-10 dark:bg-gray-800'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <Link
          to={'/'}
          className='logo-font self-center text-3xl font-normal flex align-middle justify-center dark:text-white'>
          <img
            src='https://res.cloudinary.com/omar45/image/upload/v1663170670/LogoQc.svg'
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite Logo'
          />
          <span className='logo-font self-center text-3xl font-normal whitespace-nowrap dark:text-white'>
            Quiz<bdi className='text-primary-400'>4</bdi>U
          </span>
        </Link>
        {/* <p className='my-6 text-gray-500 dark:text-gray-400'>
          Create and solve quizzes with rewards on NEAR blockchain!
        </p> */}
        <p className='mt-6 text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © {new Date().getFullYear()} Quiz4U™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
