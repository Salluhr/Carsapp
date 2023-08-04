import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigateTo = useNavigate();


  function validateEmail() {
    let email = document.getElementById("email").value;
    if (email.trim().length == 0) {
      document.getElementById("eout").innerText = "Please Enter Email Id";
    } else {
      if (
        email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$") == null) {
        document.getElementById("eout").innerText = "Please Enter Valid Email";
      } else {
        document.getElementById("eout").innerText = "";
      }
    }
  }
  return (
    <>
      <div id="header">
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand"  href="#">Car</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"   aria-label="Toggle navigation">
           <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product List</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              
            </ul>
            <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a  className="nav-link"  onClick={() => {navigateTo("/components/registration.js")}}>SignUp</a>
                    </li>
                    <li>
                        <a className="nav-link" onClick={() => {navigateTo("/components/login.js")}}>Login</a>
                    </li>
                </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> 
      </div>

     <div id="imagediv">
         <div id="image"><img src="https://i.ibb.co/hgKkBNf/car.jpg"></img></div>
         <div id="text"> </div>
     </div>
      {/*main div*/}
      <div id="maindivs">
        <div className="cardcontainer">
          <div className="cardimg">
              <img src="https://i.ibb.co/hgKkBNf/car.jpg"></img>
          </div>
          <div className="cardtxt">
                <p>  Line 8:17:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
                </p>
          </div>     
        </div> 


        <div className="cardcontainer">
          <div className="cardimg">
              <img src="https://i.ibb.co/hgKkBNf/car.jpg"></img>
          </div>
          <div className="cardtxt">
                <p>  Line 8:17:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
                </p>
          </div>     
        </div> 

        <div className="cardcontainer">
          <div className="cardimg">
              <img src="https://i.ibb.co/hgKkBNf/car.jpg"></img>
          </div>
          <div className="cardtxt">
                <p>  Line 8:17:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
                </p>
          </div>     
        </div> 

      </div>

      <div id="footer">
        <div id="footcontent">
          {/*First map div*/}
          <div className="foot1">
             <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121656.2569440789!2d75.83621429370098!3d17.66161575058739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d082b54ac5d5%3A0x3c719de6c83710d0!2sSolapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690868751660!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
             <div className="div22"><button>Locate Us</button></div>
          </div>

          
          {/*Third about us div*/}
          <div className="foot1">
              <div className="div2"><button>About Us</button></div>
              <div className="div22"><button>Terms and Conditions</button></div>
          </div>
          
          <div className="foot1">
               <div className="div2"><button>Contact Us On</button></div>
               <div id="contact">
                  <p>abc@gmail.com</p>
                  <p>1800 2000 456</p>
               </div>
          </div>

          {/*Second email div*/}
          <div className="foot1">
            <div className="foot1input">
                <input type="text"  placeholder="Enter e-mail here" name="email" id="email" onInput={() => validateEmail()} ></input>
                <div className="lab3"><p id="eout" /></div>
            </div>
            <div className="foot1but">
               <button className="btn btn-success">Go</button>
            </div>
          </div>

        </div>
        <div id="foot2"><hr/></div>
        <div id="foot3">
            <p>@2023 Car Buying and Selling Platform,Maharshtra,India</p>
            <p>&copy; All Copyrights Reserved</p>
        </div>

      </div>
    </>
  );
}

export default Home;
