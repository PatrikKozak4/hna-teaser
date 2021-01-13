import React from 'react'

const widthStyleGR = {
    width: '100%'
};

const widthStyleDenver = {
  width: '90%'
};

const widthStyleBridgman = {
  width: '82%'
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

      <div style={hqimg} className="col-lg-4 col-md-6 mb-lg-0 mb-3">

        <h4 className="font-weight-bold mb-3">Denver</h4>

        <img style={widthStyleDenver} src={require('../../img/DenverScetchv6.png')} className="img-fluid mb-4" alt=""/>

      </div>

      <div style={hqimg} className="col-lg-4 col-md-6 mb-lg-0 mb-3">

        <h4 className="font-weight-bold mb-3">Grand Rapids</h4>

        <img style={widthStyleGR} src={require('../../img/GrandRapidsScetchv2.png')} className="img-fluid mb-4" alt=""/>

      </div>

      <div style={hqimg} className="col-lg-4 col-md-6 mb-lg-0 mb-3">

        <h4 className="font-weight-bold mb-3">Bridgman</h4>

        <img style={widthStyleBridgman} src={require('../../img/BridgmanScetch1.png')} className="img-fluid mb-5" alt=""/>

      </div>

    </div>
  </section>
</div>
)