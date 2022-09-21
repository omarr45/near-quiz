import './App.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

import CreateQuiz from './components/CreateQuiz';
import { Flowbite } from 'flowbite-react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import TakeQuiz from './components/TakeQuiz';
import { useEffect } from 'react';

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const account = window.walletConnection.account();

  return (
    <HashRouter>
      <Flowbite>
        <div className='App bg-white dark:bg-gray-900 min-h-screen'>
          <Navbar account={account} />
          <Routes>
            <Route path='/' exact element={<Landing account={account} />} />
            <Route path='/profile' element={<Profile account={account} />} />
            <Route path='/quiz/:quizId' element={<TakeQuiz />} />
            <Route path='/create' element={<CreateQuiz />} />
          </Routes>
          <Footer />
        </div>
      </Flowbite>
    </HashRouter>
  );
}

export default App;
