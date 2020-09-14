import React from 'react'
import { Button } from 'react-bootstrap';

const widthStyle = {
    width: '100%'
  };

  const backg = {
    backgroundColor: '#181818'
  };

export const HNASecThree = () => (
<div style={backg}>
<div className="container my-5 py-5 z-depth-1">
    <section className="px-md-5 mx-md-5 text-center text-lg-left text-white">
        <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">

              <h3 className="font-weight-bold">Personalized HNA.LIVE Account</h3>
    
              <p className="">A subscription to HourNationArc grants users access to an 
              HNA.LIVE account that is tailored to accommodate their unique needs and 
              allows for personalization of all content. </p>

              <p className="">Users can modify icons, tools, and documents present 
              on their dashboard to promote convenience and showcase their individuality!</p>

              <Button variant="primary">Subscribe</Button>{' '}
    
            </div>
           
            <div className="col-md-6 mb-4 mb-md-0">
              
              <div className="view overlay z-depth-1-half">
                <img style={widthStyle} src={require('../../img/Academia4.png')} classNameName="img-fluid" alt=""/> 
    
                  <div className="mask rgba-white-light"></div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
)