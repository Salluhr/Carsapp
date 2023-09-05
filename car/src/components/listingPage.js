import React, { useState } from "react";
import "./listingPage.css";
import Cars from "../data/cars";
import { useNavigate } from "react-router-dom";

function ListingPage(){ 
  const navigateTo=useNavigate();
  const carBrands = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Hyundai",
    "Kia",
  ];

  const [checkedBrands, setCheckedBrands] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    // Update the checked brands based on the checkbox
    if (checked) {
      setCheckedBrands([...checkedBrands, value]);
    } else {
      setCheckedBrands(checkedBrands.filter((brand) => brand !== value));
    }
  };

  const carColor = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Hyundai",
    "Kia",
  ];
  const [checkedcolor, setcheckedcolor] = useState([]);

  const handleCheckcolorChange = (event) => {
    const { value, checked } = event.target;

    // Update the checked brands based on the checkbox
    if (checked) {
      setcheckedcolor([...checkedcolor, value]);
    } else {
      setcheckedcolor(checkedcolor.filter((colour) => colour !== value));
    }
  };


  return (
    <div id="lmain">
      <div className="filterdiv" >
        {/* ---------------Brand Div------------------ */}
        <div className="car-brands">
          <details>
          <summary>Filter By Brand</summary>
          
          {carBrands.map((brand) => (
            <label key={brand} className="car-brand-label">
              <input
                type="checkbox"
                value={brand}
                onChange={handleCheckboxChange}
                checked={checkedBrands.includes(brand)}
              />
              {brand}
            </label>
          ))}
            </details>
        </div>
        {/* ---------------Color Div------------------ */}


        <div className="car-brands">
          <details>
          <summary >Filter By Colour</summary>
          
          {carColor.map((colour) => (
            <label key={colour} className="car-brand-label">
              <input
                type="checkbox"
                value={colour}
                onChange={handleCheckcolorChange}
                checked={checkedcolor.includes(colour)}
              />
              {colour}
            </label>
          ))}
            </details>
        </div>
        
          
      </div>

      {/*------------List of cars------------------ */}

      <div className="listdiv">
       {
        Cars.map((item,index)=>
         <div className="cards" key={index}>
            <div className="card-img"><img src={item.imageurl} onClick={()=>{navigateTo('/detailsPage.js')}}></img></div>
            <div className="card-detail">
              <div className="car-head">
                <a href="/detailsPage.js">{item.year} {item.brand}</a> 
              </div>
              <div className="car-details">
                <span>{item.type}</span>
                <span>{item.kilometer}</span>
                <span>{item.owner}</span>
                <span>{item.fuel}</span>
              </div>
              <div className="car-rate">
                <div className="cr-emi"><b> &#8377; {item.emis}/Month</b></div>
                <div className="cr-rate"><b> &#8377; {item.price}  </b></div>
              </div>
              <div className="cr-opt">
                <div className="cr-opt1"><p >Easy Emi</p></div>
                 <div className="cr-opt2"><p> &#8377; <strike>{item.originalprice}</strike></p></div>
              </div>
              <div className="car-address">
                <b>{item.address} </b>
              </div>      
            </div>
          </div>
        )} 
      </div>   
    </div>
  );
}

export default ListingPage;




    