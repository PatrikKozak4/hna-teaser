import React from 'react'
import '../../focus-visible'


const hna = {
    width: '195px',
    height: '195px'
}

const HNALogo = () => {
    return (
        <div className="mt-2 mb-2">
            <img style={hna} className="img-fluid" src={require('../../img/HNA2.png')} alt=""/>

        </div>

        );
    };
    
export default HNALogo;