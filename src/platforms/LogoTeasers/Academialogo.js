import React from 'react'
import Academialogo from '../../ThreeDfiles/ThreeDAcademia/TryThis.glb'
import '../../focus-visible'

const academ3D= {
    width: '285px',
    height: '235px',
};

const AcademiaLogo = () => {
    return (
        <div>
            <model-viewer src={Academialogo}
                auto-rotate
                camera-orbit="95deg 90deg 87m"
                interaction-policy="allow-when-focused"
                style={academ3D}>
            </model-viewer>

        </div>

        );
    };
    
export default AcademiaLogo;