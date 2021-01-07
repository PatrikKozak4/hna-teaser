import React from 'react'
import '../../focus-visible'

const hna3D = {
    width: '240px',
    height: '210px'
}


const HNALogo = () => {
    return (
        <div >
            <img style={hna3D} className="img-fluid" src={require('../../img/HNA1.png')} alt=""/>

        </div>

        );
    };
    
export default HNALogo;