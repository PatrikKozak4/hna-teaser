import React from 'react'


const widthStyle = {
    width: '100%'
  };

export const Sectionthree = () => (
<div className="bg-dark">
<div className="container my-5 py-5 z-depth-1">
    <section className="px-md-5 mx-md-5 text-center text-lg-left text-white">
        <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">

              <h3 className="font-weight-bold">Students, Not Cheaters</h3>

              <p className="text-muted">Most students are accustomed to a learning-style 
                consistent with our competitors, which consists of being given direct 
                answers to questions. However, ArcAcademia will guide users in discovering 
                the answers themselves to promote learning and material retention.</p>

              <p className="text-muted">Don’t sacrifice your learning experience to an outdated format of learning, 
                 when you can attain better results at a fraction of the time.</p>
    
            </div>
           
            <div className="col-md-6 mb-4 mb-md-0">
              
              <div className="view overlay z-depth-1-half">
                <img style={widthStyle} src={require('../../img/Academia2.png')} classNameName="img-fluid" alt=""/> 
    
                  <div className="mask rgba-white-light"></div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
)