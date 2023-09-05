import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HomePage from './components/homePage';
import ListingPage from './components/listingPage';
import DetailsPage from './components/detailsPage';
import Footer from './components/footer';
import LoginPage from './components/login/login';
import PasswordResetPage from './components/login/resetpass';
import RegisterPage from './components/login/registrationPage';
import CarList from './components/carlist';
import './components/styles.css';
import Cars from './data/cars';
import Info from './data/info';

function App(props) {


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
          <Route path='/detailsPage' element={<DetailsPage />} />
          <Route path='/listingPage' element={<ListingPage/>} />
          <Route path='/carlist' element={<CarList/>} />
        </Routes>
       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
