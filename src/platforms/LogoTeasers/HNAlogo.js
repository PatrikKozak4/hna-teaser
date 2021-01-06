import React from 'react'
import hnalogo from '../../ThreeDfiles/ThreeDHNArc/HourNAtionArcccc.glb'
import '../../focus-visible'
  
const hna3Dlogo = {
    width: '240px',
    height: '240px',
};

const HNALogo = () => {
    return (
        <div >
            <model-viewer src={hnalogo}
                camera-orbit="90deg 90deg 90m"
                interaction-policy="allow-when-focused"
                style={hna3Dlogo}>
            </model-viewer>

        </div>

        );
    };
    
export default HNALogo;