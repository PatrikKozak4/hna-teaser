import React from 'react'
import '../../focus-visible'


const aca = {
    width: '170px',
    height: '155px'
};

const AcademiaLogo = () => {
    return (
        <div className="mt-2 mb-2">
            <img style={aca} className="img-fluid" src={require('../../img/AA3.png')} alt=""/>

        </div>

        );
    };
    
export default AcademiaLogo;