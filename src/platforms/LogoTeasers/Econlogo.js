import React from 'react'
import '../../focus-visible'
  
const econ= {
  width: '160px',
  height: '160px'
  
};

const EconLogo = () => {
    return (
        <div className="mt-2 mb-2">
          <img style={econ} className="img-fluid" src={require('../../img/AE2.png')} alt=""/>

        </div>

        );
    };
    
export default EconLogo;