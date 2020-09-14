import React from 'react'


const widthStyle = {
    width: '100%'
  };

export const HNASecFour = () => (

<div className="container my-2 py-2 z-depth-1">
    <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

        <img style={widthStyle} src={require('../../img/Academia3.png')} classNameName="img-fluid" alt=""/>

        </div>
    
        <div className="col-lg-6 mb-4 mb-lg-0">

          <h3 className="font-weight-bold">Need Help? We’re Here For You</h3>

          <p className="text-muted">A subscription to HourNationArc allows users access to our vast network 
          of experts within the platform. These experts can serve as a means of guidance, 
          answer questions, and/or provide improvements to individual accounts.  
          </p>

          <p className="text-muted">We will accommodate any user and solve problems that can’t be immediately fixed in a 
          software update.</p>

          <a className="font-weight-bold" href="google.com" >Learn more<i className="fa fa-angle-right ml-2"></i></a>

        </div>
      </div>
    </section>
  </div>

)