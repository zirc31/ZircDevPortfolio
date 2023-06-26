import React from 'react';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import FrontPage from './pages/FrontPage';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';

export const AppContext = createContext();

const App = () => {

  const [ isTokenExist, setIsTokenExist  ] = useState(false);

  // check if user have token or is logged in.
  useEffect(() => {
    if( localStorage.getItem("zee_token") === null ) {
    } else {
        setIsTokenExist(true);
    }
  }, []);

  return (
    <AppContext.Provider value={{ isTokenExist, setIsTokenExist }}>
      <div className="App">
        <Routes>
          <Route path='/' element={<FrontPage /> } />
          <Route path='/index.html' element={<FrontPage /> } />
          <Route path='/about' element={<AboutPage /> } />
          <Route path='/about#about' element={<AboutPage /> } />
          <Route path='/skills' element={<SkillsPage /> } />
          <Route path='/skills#skills' element={<SkillsPage /> } />
          <Route path='*' element={<NotFound /> } />
        </Routes>
      </div>
    </AppContext.Provider>
  )

}

export default App;
