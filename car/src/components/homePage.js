import React,{useState} from 'react';
import './homePage.css'


function HomePage(props) {
  return (
    <div>
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to CarTrade</h1>
          <p>Your Destination for Buying and Selling Cars</p>
        </div>
        <div className=" img-content">
          <img src="https://i.ibb.co/LSkfVQP/car-png-16828.png"></img>
        </div>
      </div>
      <h1 style={{ paddingTop: "5%", textAlign: "center", color: " #042a36" }}>
        Enjoy With Our Services
      </h1>

      {/* ---------------First Section-------------- */}
      <div className="container">
        <section className="services">
          <div className="service-img">
            <img
              src="https://i.ibb.co/GnD8588/8357614.jpg"
              className="service-img"
              alt="Service"
            />
          </div>
          <div className="service-txt">
          <div className="service-head">
              <h4>Affordable Car Ownership with Easy EMI Service</h4>
            </div>
            <div className="service-des">
              <p>
                Our Easy EMI Service takes the hassle out of car buying, making
                your dream car more accessible than ever. With flexible monthly
                payments, you can cruise the roads in your preferred vehicle
                without breaking the bank. Say goodbye to budget constraints and
                hello to a seamless car buying experience. Embrace the freedom
                of owning your own car with convenience and peace of mind
              </p>
            </div>
          </div>
        </section>

        {/* ---------------second Section-------------- */}
        <section className="services">
          <div className="service-txt">
          <div className="service-head">
              <h4>Experience Your Future Car Today</h4>
            </div>
            <div className="service-des">
              <p>
              Discover the thrill of driving your future car firsthand with our Test Drive service. Get behind the wheel and feel the power, comfort, and style that await you. Our experts are ready to guide you through an unforgettable test drive, helping you make an informed choice. Experience the road ahead in the car of your dreams, and take the first step towards a new journey.'
              </p>
            </div>
          </div>
          <div className="service-img">
            <img
              src="https://i.ibb.co/JsFLL8y/19199287.jpg"
              className="service-img"
              alt="Service"
            />
          </div>
        </section>

        {/* ---------------Third Section-------------- */}
        <section className="services">
          <div className="service-img">
            <img
              src="https://i.ibb.co/7Jr95Qd/GIU-NIC-1010-17.jpg"
              className="service-img"
              alt="Service"
            />
          </div>
          <div className="service-txt">
            <div className="service-head">
              <h4> Car Ownership with Easy EMI Service</h4>
            </div>
            <div className="service-des">
              <p>
                Our Easy EMI Service takes the hassle out of car buying, making
                your dream car more accessible than ever. With flexible monthly
                payments, you can cruise the roads in your preferred vehicle
                without breaking the bank. Say goodbye to budget constraints and
                hello to a seamless car buying experience. Embrace the freedom
                of owning your own car with convenience and peace of mind
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
