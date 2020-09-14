import React from 'react'


const widthStyle = {
    width: '100%'
  };

export const HNASecSix = () => (

<div className="container my-2 py-2 z-depth-1">
    <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

        <img style={widthStyle} src={require('../../img/Academia5.png')} classNameName="img-fluid" alt=""/>

        </div>
    
        <div className="col-lg-6 mb-4 mb-lg-0">

          <h3 className="font-weight-bold">I Also Don't Know</h3>

          <p className="text-muted">HNA provides clear statistics and high-definition 
          renders to relay current real-time events to users.</p>

          <p className="text-muted">The NY Times and Washington Post provide two-dimensional graphic 
          renderings and are influenced by benefactors. HourNationArc presents its 
          users with three-dimensional graphic renderings and only has allegiance 
          to its users. </p>

          <a className="font-weight-bold" href="google.com" >Learn more<i className="fa fa-angle-right ml-2"></i></a>

        </div>
      </div>
    </section>
  </div>

)