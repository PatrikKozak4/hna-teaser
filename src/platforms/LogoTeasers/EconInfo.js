import React, {useState, useEffect} from 'react'
import { Button, Tabs, Tab, InputGroup, FormControl } from 'react-bootstrap';
import Econlogo from '../../ThreeDfiles/ThreeDEconomy/AELogo3DLo.glb'
import '../../focus-visible'
  
const econ3D= {
  width: '340px',
  height: '350px',
};

const EconInfo = () => {
    return (
      <div>
        <p className="mb-0">
          Allows professionals to visually understand where and why each sector within 
          their industry holds the most value, supply, and demand through economy driven 
          indicators - a current instantaneous glance.
        </p> 
      </div>

        );
    };
    
export default EconInfo;