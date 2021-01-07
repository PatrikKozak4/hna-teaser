import React from 'react'
import '../../focus-visible'
 
const deed3D= {
  width: '270px',
  height: '225px'
};
  

const DeedLogo = () => {
    return (
        <div>
          <img style={deed3D} className="img-fluid" src={require('../../img/AD1.png')} alt=""/>
        </div>

        );
    };
    
export default DeedLogo;