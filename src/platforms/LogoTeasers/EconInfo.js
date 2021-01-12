import React from 'react'
import '../../focus-visible'

const widthStyle = {
  width: '100%'
};

const EconInfo = () => {
    return (
      <div>
        <p className="mb-0">
          Enables professionals to visually understand where and why each sector within 
          their industry holds the most value, supply, and demand through economy driven 
          indicators - a current instantaneous glance.
        </p>

        <p></p>

        <p className="mb-0">
          Gain an understanding of the current financial climate, see how your company 
          ranks against competitors, and gain a competitive advantage in your industry.
        </p>

        <section className="px-md-1 mx-md-1 dark-grey-text text-center text-lg-left">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
              <img style={widthStyle} src={require('../../img/FlatNationMap.png')} className="img-fluid mb-4" alt=""/>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
              <img style={widthStyle} src={require('../../img/NationMap.png')} className="img-fluid mb-4" alt=""/>
            </div>

          </div>
        </section>
      </div>

        );
    };
    
export default EconInfo;