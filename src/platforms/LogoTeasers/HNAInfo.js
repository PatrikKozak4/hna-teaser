import React from 'react'
import '../../focus-visible'

const widthStyle = {
    width: '100%'
};

const HNAInfo = () => {
    return (
        <div>
            <p className="mb-md-0">
                Every current mainstream event, news topic, and popular visualization created
                by HourNationArchive gets broadcasted and shared within this domain for data
                source documentation and download accessibility.
            </p>

            <p></p>

            <p className="mb-md-0">
                Our real-time data sanitization software provides unbiased and
                honest current event news while promoting social interaction that mirrors 
                social media.
            </p>

            <div className="mt-4 px-md-1 mx-md-1 dark-grey-text text-center text-lg-left">
                <div className="row">
                    <div className="col-lg-12 mb-lg-0 d-flex align-items-center justify-content-center">
                        <img style={widthStyle} src={require('../../img/HNAcubes.png')} className="img-fluid" alt=""/>
                    </div>

                </div>
            </div>

        </div>

        );
    };
export default HNAInfo;