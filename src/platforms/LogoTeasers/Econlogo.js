import React from 'react'
import '../../focus-visible'
  
const econ3D= {
  width: '90%',
  
};

const EconLogo = () => {
    return (
        <div>
          <img style={econ3D} className="img-fluid" src={require('../../img/AE1.png')} alt=""/>

        </div>

        );
    };
    
export default EconLogo;