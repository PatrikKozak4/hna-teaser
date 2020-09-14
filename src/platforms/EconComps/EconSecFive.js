import React from 'react'


const widthStyle = {
    width: '100%'
  };

const backg = {
  backgroundColor: '#181818'
};

export const EconSecFive = () => (
<div style={backg}>
<div className="container my-5 py-5 z-depth-1">
    <section className="px-md-5 mx-md-5 text-center text-lg-left text-white">
        <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">

              <h3 className="font-weight-bold">Online Consultation</h3>

              <p className="">ArcEconomy provides direction for companies and individuals, 
              depending on the subscription edition, for economic growth in specific 
              industry types. While outside consultation was typically necessary, 
              it is no longer needed with ArcEconomy.</p>

              
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