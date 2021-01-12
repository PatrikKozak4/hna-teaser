import React from 'react'
import '../../focus-visible'

const widthStyle = {
    width: '90%'
};

const AcademiaInfo = () => {
    return (
        <div>
            <p className="mb-md-0">
                Provides credible, unbiased, and sanitized curriculum Big Data;
                accompanied by compelling graphic visualizations and critical point
                template elaboration aid for scholarly studies and classes.
            </p>

            <p></p>

            <p className="mb-md-0">
                Employing Artificial Intelligence to
                personalize and tailor the learning experience for every user based
                on their individual criteria. The classroom is changing as we know it!
            </p>

            <div className="mt-4 px-md-1 mx-md-1 dark-grey-text text-center text-lg-left">
                <div className="row">
                    <div className="col-lg-12 mb-lg-0 d-flex align-items-center justify-content-center">
                        <img style={widthStyle} src={require('../../img/AcademiaScreens.png')} className="img-fluid" alt=""/>
                    </div>

                </div>
            </div>

        </div>

        );
    };
    
export default AcademiaInfo;