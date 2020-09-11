import React from 'react'


const widthStyle = {
    width: '100%'
  };

export const Sectionfive = () => (

<div className="container my-2 py-2 z-depth-1">
    <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

        <img style={widthStyle} src={require('../../img/Academia5.png')} classNameName="img-fluid" alt=""/>

        </div>
    
        <div className="col-lg-6 mb-4 mb-lg-0">

          <h3 className="font-weight-bold">Big Data Instruction</h3>

          <p className="text-muted">Big Data exists in every sphere of 
              education; thus, ArcAcademia will provide users with a crash-course 
              on how to interpret the real-time Big Data that is already present in 
              the world. </p>

            <p className="text-muted">You no longer need a Data Analytics degree to thrive, 
            you simply need the help of HourNationArchive!</p>

          <a className="font-weight-bold" href="google.com" >Learn more<i className="fa fa-angle-right ml-2"></i></a>

        </div>
      </div>
    </section>
  </div>

)