import React, {useState, useEffect} from 'react'
import { Button, Tabs, Tab, InputGroup, FormControl, Modal } from 'react-bootstrap';
import hnalogo from '../../ThreeDfiles/ThreeDHNArc/HourNAtionArcccc.glb'
import '../../focus-visible'

  
const hna3Dlogo = {
    width: '350px',
    height: '350px',
};

const HNAInfo = () => {
    return (
        <div>
            <p className="mb-md-0">
                Every current mainstream event, news topic, and popular visualization created
                by HourNationArchive gets broadcasted and shared within this domain for data
                source documentation and download accessibility.
            </p>
        </div>

        );
    };
export default HNAInfo;