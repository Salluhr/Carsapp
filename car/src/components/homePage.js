import React,{useState} from 'react';
import './homePage.css'


function HomePage (props) {
  return (
    <div>
      <div className="home-container">
        
      <div className="home-content">
        <h1>Welcome to CarTrade</h1>
        <p>Your Destination for Buying and Selling Cars</p>
      </div>
      <div className=' img-content'>
        <img src="https://i.ibb.co/LSkfVQP/car-png-16828.png"></img>
       
      </div>
      
    </div>

    <section className="service">
        <div className="container">
          <div className="row text-center">
            <h1 style={{ paddingTop: '5%' }}>Know More About Us</h1>

            {props.Info.map((service, index) => (
              <div className="col-md-4 services" key={index}>
                <img src={service.imageurl} className='service-img' alt="Service" />
                <div className='service-txt'>
                  <h4>{service.heading}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   </div>
  );
};

export default HomePage;
