import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HomePage from './components/homePage';
import ListingPage from './components/listingPage';
import Details from './components/detailsPage.js';
import Footer from './components/footer';
import LoginPage from './components/login/login';
import PasswordResetPage from './components/login/resetpass';
import RegisterPage from './components/login/registrationPage';

import './components/styles.css';
import Cars from './data/cars';
import Info from './data/info';

function App() {


  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage Info={Info}/>}/>
          <Route path='/' element={<HomePage Cars={Cars} />}/>

         <Route path='/login/login.js' element={<LoginPage />} />
          {/* <Route path='/login/resetpass' element={<PasswordResetPage />} /> */}
          <Route path='/login/registrationPage.js' element={<RegisterPage />} />
          <Route path='/detailsPage.js' element={<Details />} />
          <Route path='/listingPage' element={<ListingPage/>} />
       
        </Routes>
       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
