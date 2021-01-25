import React from 'react'
import '../../focus-visible'
 
const deed= {
  width: '200px',
  height: '160px'
};
  

const DeedLogo = () => {
    return (
        <div className="mt-2 mb-2">
          <img style={deed} className="img-fluid" src={require('../../img/ArcDeed3.png')} alt=""/>
        </div>

        );
    };
    
export default DeedLogo;