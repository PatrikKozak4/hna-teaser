import React from 'react'
import '../../focus-visible'

const aca3D= {
    width: '260px',
    height: '219px'
  };

const AcademiaLogo = () => {
    return (
        <div>
            <img style={aca3D} className="img-fluid" src={require('../../img/AA1.png')} alt=""/>

        </div>

        );
    };
    
export default AcademiaLogo;