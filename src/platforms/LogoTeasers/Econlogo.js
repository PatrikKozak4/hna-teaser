import React, {useState, useEffect} from 'react'
import { Button, Tabs, Tab, InputGroup, FormControl } from 'react-bootstrap';
import Econlogo from '../../ThreeDfiles/ThreeDEconomy/AELogo3DLo.glb'
import '../../focus-visible'
  
const econ3D= {
  width: '225px',
  height: '235px',
};

const EconLogo = () => {
    return (
        <div>
          <model-viewer src={Econlogo}
              auto-rotate
              camera-orbit="130deg 90deg 85m"
              interaction-policy="allow-when-focused"
              style={econ3D}>
          </model-viewer>

        </div>

        );
    };
    
export default EconLogo;