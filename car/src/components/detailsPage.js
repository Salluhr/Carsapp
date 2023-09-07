import React from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListingPage from './listingPage';

function Details () {


  return(
    <>
      
        <div id="mainContent">
            <div className='imgDiv'>
                <img src='https://i.ibb.co/LSkfVQP/car-png-16828.png' alt="image"/>
            </div>
            <div className="contentDiv">
                <h2>Toyota 2018</h2>
                
                <ul>
                  <li>Manual</li>
                  <li>Petrol</li>
                  <li>2nd Owner</li>
                </ul>
                <h3><del>Market Price: Rs.3,80,000</del></h3>
                 <span>Save your money with our best price</span>
                <h3>Offered Price: Rs. 3,00,000</h3>
                
                <div class="feature_container">
                    <figure>
                        <img src="https://i.ibb.co/GnD8588/8357614.jpg" class="featureIcon"/>
                        <figcaption>Test Drive</figcaption>
                    </figure>
                    <figure>
                        <img src="https://i.ibb.co/7Jr95Qd/GIU-NIC-1010-17.jpg" class="featureIcon"/>
                        <figcaption>Easy Emi's</figcaption>
                    </figure>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>Details</Tab>
                        <Tab>Contact</Tab>
                    </TabList>

                    <TabPanel>
                        <h3>Toyota 2018</h3>
                        <p>Toyota 2018 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I</p>
                    </TabPanel>
                    <TabPanel>
                        <h3>At Shaitan Galli Khatra Mahal, Shamshan Ke Pass,Pune  Maharashtra</h3>
                        <h3>Phone: 8554655697 </h3>
                    </TabPanel>
                    
                </Tabs>
                <div>
                    <Link to='/listingPage.js' className="btn btn-danger">
                        Back 
                    </Link>&nbsp;
                    <button className="btn btn-success"
                   >Proceed</button>
                </div>
            </div>
            {/* <div className="col-md-12">
                <MenuDisplay menudata={this.state.menuList}
            finalOrder={(data) => {this.addToCart(data)}}/>
            </div> */}
        </div>
        
    </>
)
}

 

export default Details;

