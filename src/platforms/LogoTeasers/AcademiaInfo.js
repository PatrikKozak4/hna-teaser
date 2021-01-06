import React, {useState, useEffect} from 'react'
import { Button, Tabs, Tab, InputGroup, FormControl } from 'react-bootstrap';
import Academialogo from '../../ThreeDfiles/ThreeDAcademia/TryThis.glb'
import '../../focus-visible'

const academ3D= {
    width: '400px',
    height: '350px',
};

const AcademiaInfo = () => {
    return (
        <div>
            <p className="mb-md-0">
                Provides credible, unbiased, and sanitized curriculum Big Data;
                accompanied by compelling graphic visualizations and critical point
                template elaboration aid for scholarly studies and classes.
            </p>
        </div>

        );
    };
    
export default AcademiaInfo;