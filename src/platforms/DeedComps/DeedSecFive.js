import React from 'react'


const widthStyle = {
    width: '100%'
  };

const backg = {
  backgroundColor: '#181818'
};

export const DeedSecFive = () => (
<div style={backg}>
<div className="container my-5 py-5 z-depth-1">
    <section className="px-md-5 mx-md-5 text-center text-lg-left text-white">
        <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">

              <h3 className="font-weight-bold">Continuous Verification</h3>

              <p className="">ArcDeed integrates AI software to ensure that the 
              real-time information pertaining to the real estate market is 
              accurate and current.</p>

              <p className="">This information is congruent with the property parcels across all four 
              regions in the United States and is continuously monitored by the ArcDeed team.</p>
    
            </div>
           
            <div className="col-md-6 mb-4 mb-md-0">
              
              <div className="view overlay z-depth-1-half">
                <img style={widthStyle} src={require('../../img/Academia2.png')} classNameName="img-fluid" alt=""/> 
    
                  <div className="mask rgba-white-light"></div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
)