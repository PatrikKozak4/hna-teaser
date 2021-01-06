import React from "react";

const widthStyleCoop = {
  width: '98%'
};

const widthStyle = {
  width: '100%'
};

class Gallery extends React.Component {
  render() {
    return (
      <div className="container">
			  <section className="py-5">
				  <h1 className="text-center mb-5">Team HourNationArchive</h1>
          <div className="row">
            

              <div className="col-md-3">
                <div className="hovereffect">
                  <img style={widthStyleCoop} className="img-fluid" src={require('../../img/portraitCoop.png')} alt=""/>
                    <div className="overlay">
                      <h2>Cooper Mojsiejenko</h2>
                        <p>CEO</p>
                    </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="hovereffect">
                  <img style={widthStyle} className="img-fluid" src={require('../../img/JaredHeadshot.jpg')} alt=""/>
                    <div className="overlay">
                      <h2>Jared Menzel</h2>
                        <p>COO</p>
                    </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="hovereffect">
                  <img style={widthStyle} className="img-fluid" src={require('../../img/SwainHeadshot.jpg')} alt=""/>
                    <div className="overlay">
                      <h2>Tyjuan Swain</h2>
                        <p>CMO</p>
                    </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="hovereffect">
                  <img style={widthStyle} className="img-fluid" src={require('../../img/PatrikHeadshot1.jpg')} alt=""/>
                    <div className="overlay">
                      <h2>Patrik Kozak</h2>
                        <p>CTO</p>
                    </div>
                </div>
              </div>

            </div>
          
        </section>
      </div>
    );
  }
}

export default Gallery;