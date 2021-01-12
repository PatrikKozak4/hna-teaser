import React from 'react'
import '../../focus-visible'
  
const widthStyle = {
  width: '100%'
};

const DeedInfo = () => {
    return (
      <div>
        <p className="mb-0">
          High precision 3-dimensional graphic renders representing any property parcel
          in the nation. Each unique property plot illustrates its value by conveying its
          numerical range through height and color.
        </p>

        <p></p>

        <p className="mb-0">
          ArcDeed is a Big Data property analysis tool and a
          virtual consultant, eliminating indecisive research.
        </p>

        <div className="mt-4 px-md-1 mx-md-1 dark-grey-text text-center text-lg-left">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 d-flex align-items-center justify-content-center">
              <img style={widthStyle} src={require('../../img/FlatCounty.png')} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 mb-lg-0 d-flex align-items-center justify-content-center">
              <img style={widthStyle} src={require('../../img/County1.png')} className="img-fluid" alt=""/>
            </div>

          </div>
        </div>
      </div>

        );
    };
    
export default DeedInfo;