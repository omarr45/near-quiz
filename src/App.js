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

  return (
    <HashRouter>
      <Flowbite>
        <div className='App bg-white dark:bg-gray-900 min-h-screen'>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Landing />} />
            <Route path='/profile' exact element={<Profile />} />
            <Route path='/quiz' exact element={<TakeQuiz />} />
            <Route path='/create' exact element={<CreateQuiz />} />
          </Routes>
          <Footer />
        </div>
      </Flowbite>
    </HashRouter>
  );
}

export default App;
