import React from 'react'


const widthStyle = {
    width: '100%'
  };

export const EconSecSix = () => (

<div className="container my-2 py-2 z-depth-1">
    <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

        <img style={widthStyle} src={require('../../img/Academia5.png')} classNameName="img-fluid" alt=""/>

        </div>
    
        <div className="col-lg-6 mb-4 mb-lg-0">

          <h3 className="font-weight-bold">Investment Suggestions</h3>

          <p className="text-muted">ArcEconomy implements real-time GIS software that 
          highlights property parcels for expansion opportunities, as well as alludes 
          to areas of infrastructure that require more resource allocation. </p>

            <p className="text-muted">The algorithm present in the software serves as a 
            guide for financial decision making to promote the highest probability of 
            successful business ventures.</p>

          <a className="font-weight-bold" href="google.com" >Learn more<i className="fa fa-angle-right ml-2"></i></a>

        </div>
      </div>
    </section>
  </div>

)