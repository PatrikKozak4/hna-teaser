import React from 'react'
import Deedlogo from '../../ThreeDfiles/ThreeDArcDeed/ADLogo3Dim.glb'
import '../../focus-visible'
 
const deed3D= {
  width: '235px',
  height: '235px',
};
  

const DeedLogo = () => {
    return (
        <div>
          <model-viewer src={Deedlogo}
              auto-rotate
              camera-orbit="160deg 90deg 85m"
              interaction-policy="allow-when-focused"
              style={deed3D}>
          </model-viewer> 
        </div>

        );
    };
    
export default DeedLogo;