import { DarkThemeToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { login } from '../utils/near';

const Navbar = ({ account }) => {
  return (
    <nav className='bg-white border-gray-200 p-4 shadow-md mb-3 sm:px-4 py-5co dark:bg-gray-800'>
      <div className='container flex flex-wrap justify-between items-center max-w-4xl mx-auto lg:px-12'>
        {/* Logo */}
        <Link to={'/'} className='flex items-center'>
          <img
            src='https://res.cloudinary.com/omar45/image/upload/v1663170670/LogoQc.svg'
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite Logo'
          />
          <span className='logo-font self-center text-3xl font-normal whitespace-nowrap dark:text-white'>
            Quizly
          </span>
        </Link>

        {/* Button */}
        <div className='toggle-wrapper ml-auto'>
          <DarkThemeToggle />
        </div>
        <div className=' hidden md:flex md:order-2'>
          {account.accountId ? (
            <Link
              to={'/profile'}
              className='ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
              {account.accountId}
            </Link>
          ) : (
            <button
              onClick={login}
              className='ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
              {' '}
              Login with NEAR
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
