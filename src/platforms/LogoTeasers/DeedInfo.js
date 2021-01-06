import React, {useState, useEffect} from 'react'
import { Button, Tabs, Tab, InputGroup, FormControl } from 'react-bootstrap';
import Deedlogo from '../../ThreeDfiles/ThreeDArcDeed/ADLogo3Dim.glb'
import '../../focus-visible'

  
const deed3D= {
  width: '350px',
  height: '350px',
};
  

const DeedInfo = () => {
    return (
      <div>
        <p className="mb-0">
          High precision 3-dimensional graphic renders representing every property parcel
          in the nation. Each unique property plot illustrates its value by conveying its
          numerical rnage through height and color.
        </p>
      </div>

        );
    };
    
export default DeedInfo;