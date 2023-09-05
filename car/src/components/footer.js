import "./footer.css";

function Footer() {
  function validateEmail() {
    let email = document.getElementById("email").value;
    if (email.trim().length == 0) {
      document.getElementById("eout").innerText = "Please Enter Email Id";
    } else {
      if (
        email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$") == null
      ) {
        document.getElementById("eout").innerText = "Please Enter Valid Email";
      } else {
        document.getElementById("eout").innerText = "";
      }
    }
  }
  return (
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
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=new " target="_blank" ta>abc@gmail.com</a>
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
      );
    };
    
 export default Footer;
