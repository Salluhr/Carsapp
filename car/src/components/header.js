import React from 'react';
import './header.css';
import {useNavigate } from 'react-router-dom';

function Header () {
   const navigateTo =useNavigate();

  return (
<>
      <nav className="navbar navbar-expand-lg back">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='/'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/listingPage">Product</a>
              </li>
              
            </ul>
            <form style={{height:'6vh',width:'30%',marginTop:'-1%',}}   >
              <input  type="search" placeholder="Search" aria-label="Search" />
              <button className='btn btn-primary' type="submit">Search</button>
              <button  className='btn btn-success' type="submit" onClick={()=>{navigateTo('/login/login.js');}} >Login</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;



// * <nav>
//         <ul>
//           <li>
//             <a href={"/"} role="button" >Home</a>     {/*  onClick={()=>{navigateTo("/")}} */}
//           </li>
//           <li>
//             <a href="#" role="button"  onClick={()=>{navigateTo("/components/listingPage.js")}}>Product List</a>
//           </li>
//           <li>Srarch  </li>
//           <li>Login</li>
//         </ul>
//       </nav>

//       <div>
//       </div> 




