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
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import reduxThunk from 'redux-thunk'
import RequireAuth from './components/RequireAuth'
import { checkToken } from './actions'
import {Provider} from 'react-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, {},  
  composeEnhancers(applyMiddleware(reduxThunk)));


  store.dispatch(checkToken())


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <BaseLayout>
//         <Routes>
//           <Route path='/' element={<App />}/>
//           <Route path='/:numberResult' element={<NumberResult />}/>
//           <Route path='/signUp' element={<Signup />}/>
//           <Route path='/signIn' element={<Signin />}/>
//           <Route path='/:profile' element={<Profile />}/>
//           <Route path='/aboutUs' element={<About />}/>
//         </Routes>
//       </BaseLayout>
//     </Router>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
          <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/:numberResult' element={<NumberResult />}/>
            <Route path='/signUp' element={<Signup />}/>
            <Route path='/signIn' element={<Signin />}/>
            <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>}/>
            <Route path='/aboutUs' element={<About />}/>
          </Routes>
      </BaseLayout>
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
