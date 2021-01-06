import React from 'react'

const widthStyle = {
    width: '100%'
};

const widthStyleDenver = {
  width: '100%'
};

const widthStyleBridgman = {
  width: '85%'
};

const backg = {
  backgroundColor: '#181818'
};

const hqimg = {
    top: '-25px',  
};

export const Offices = () => (
<div style={backg} className="z-depth-1">
  <section className="p-md-3 mx-md-5 text-lg-left text-white">

    <h2 className=" text-center mb-5 pb-3">Remote Offices</h2>

    <div className="row text-center d-flex justify-content-center">

      <div style={hqimg} className="col-lg-4 col-md-6 mb-lg-0 mb-0">

        <img style={widthStyleDenver} src={require('../../img/DenverScetchv6.png')} className="img-fluid mb-4" alt=""/>

        <h4 className="font-weight-bold mb-0">Denver</h4>

      </div>

      <div style={hqimg} className="col-lg-4 col-md-6 mb-lg-0 mb-0">

        <img style={widthStyle} src={require('../../img/GrandRapidsScetchv2.png')} className="img-fluid mb-4" alt=""/>

        <h4 className="font-weight-bold mb-0">Grand Rapids</h4>

      </div>

      <div style={hqimg} className="col-lg-4 col-md-6 mb-lg-0 mb-0">

        <img style={widthStyleBridgman} src={require('../../img/BridgmanScetch1.png')} className="img-fluid mb-5" alt=""/>

        <h4 className="font-weight-bold mb-0">Bridgman</h4>

      </div>

    </div>
  </section>
</div>
)