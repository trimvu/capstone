import React from 'react';
import {BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import './index.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
// import Homepage from './components/Homepage';
import NumberResult from './components/NumberResult';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import ReactDOM from 'react-dom'
import Profile from './components/Profile';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/:numberResult' element={<NumberResult />}/>
          <Route path='/signUp' element={<Signup />}/>
          <Route path='/signIn' element={<Signin />}/>
          <Route path='/:profile' element={<Profile />}/>
          <Route path='/aboutUs' element={<About />}/>
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
);
