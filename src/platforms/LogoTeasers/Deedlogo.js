import React from 'react'
import '../../focus-visible'
 
const deed= {
  width: '210px',
  height: '165px'
};
  

const DeedLogo = () => {
    return (
        <div className="mt-2 mb-2">
          <img style={deed} className="img-fluid" src={require('../../img/AD2.png')} alt=""/>
        </div>

        );
    };
    
export default DeedLogo;