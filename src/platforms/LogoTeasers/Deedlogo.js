import React from 'react'
import Deedlogo from '../../ThreeDfiles/ThreeDArcDeed/ADLogo3Dim.glb'
import '../../focus-visible'
 
const deed3D= {
  width: '95%'
};
  

const DeedLogo = () => {
    return (
        <div>
          <img style={deed3D} className="img-fluid" src={require('../../img/AD1.png')} alt=""/>
        </div>

        );
    };
    
export default DeedLogo;