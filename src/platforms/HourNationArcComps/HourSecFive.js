import React from 'react'


const widthStyle = {
    width: '100%'
  };

const backg = {
  backgroundColor: '#181818'
};

export const HourSecFive = () => (
<div style={backg}>
<div className="container my-5 py-5 z-depth-1">
    <section className="px-md-5 mx-md-5 text-center text-lg-left text-white">
        <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">

              <h3 className="font-weight-bold">I Don't Know lol</h3>

              <p className="">Through our limited characters and unbiased news reports, 
              users will no longer have to sacrifice hours of their day to personal 
              agenda oriented media conglomerates.</p>

              <p className="">HourNationArc supplements the related big data 
              values into graphical, easy-to-understand comprehension.</p>
    
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