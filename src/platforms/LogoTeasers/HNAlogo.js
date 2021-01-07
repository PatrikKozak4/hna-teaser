import React from 'react'
import hnalogo from '../../img/HourNAtionArcccc.glb'
import '../../focus-visible'

const hna3D = {
    width: '240px',
    height: '240px'
}


const HNALogo = () => {
    return (
        <div >
            <model-viewer 
                src={hnalogo}
                camera-orbit="90deg 90deg 90m"
                interaction-policy="allow-when-focused"
                style={hna3D}>
            </model-viewer>

        </div>

        );
    };
    
export default HNALogo;