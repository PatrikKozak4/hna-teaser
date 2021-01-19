import React from 'react'
import Gallery from './CompanyComps/Gallery'
import {Offices} from './CompanyComps/Offices'
import GetStarted from '../platforms/GetStarted'


const bluecolor = {
  backgroundColor: '#00BFFF'
}

const backg = {
    backgroundColor: '#181818'
};


class Company extends React.Component {

  render() {
    return (

      <React.Fragment>
          <div style={backg} className="view">
            <div className="d-flex justify-content-center align-items-center">
              <div className="container px-md-3 px-sm-0">
                <div className="row">
                  <div className="col-md-12 mb-4 text-center">

                    <h4 className="display-4 text-white mb-0 pt-md-4 pt-3">We Are <br/> HourNationArchive</h4>
                    <hr className="hr-white my-4 w-75"/>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-0 py-0 z-depth-1">
            <section className="px-md-5 mx-md-5 dark-grey-text">

              <div className="row justify-content-center">

                <div className="col-lg-12">

                  <h3 className="text-center mb-4">About Us</h3>

                  <p>
                      HourNationArchive (HNA) is the leading Big Data analytics database for academia, 
                      real estate, the economy, and media. We are devoted to empowering consumers with 
                      industry insight and analytical prowess through renderings of uniquely tailored 
                      visualization information. Our articulately engineered software platforms - ArcAcademia, 
                      ArcEconomy, ArcDeed, and HourNationArc - coupled with our vast supply of experts occupying 
                      every industry allows us to serve our clientele base across all fifty states.
                  </p>

                  <p>
                      HourNationArchive serves the full lifecycle of owning and operating a company through 
                      ArcEconomy: product and/or service development, marketing strategy, growth strategy, 
                      and customer relationship management. In addition to ArcEconomy, HNA aids students 
                      and teachers alike in the transition from a face-to-face classroom structure to an online 
                      presence through ArcAcademia’s graphic visualizations and point template elaboration aids 
                      for scholarly studies or classes.
                  </p>

                  <p>
                      Furthermore, HNA serves as an online matchmaker for pairing homebuyers with local professionals 
                      who can help with the househunting process or relaying every property parcel across the 
                      nation to allow the homebuyers to seek out their dream home themselves through ArcDeed. 
                      Lastly, HNA’s platform, HourNationArc, is the transcendence of social media into the news 
                      industry for those seeking to appease their desire for social interaction and current event 
                      absorption simultaneously.
                  </p>

                  <p>
                      HourNationArchive was founded in 2020 and is headquartered in Delaware. To explore HNA’s team and 
                      community involvement then select the designated tabs below.    
                  </p>

                </div>
              </div>
            </section>
          </div>

          <div>
              <Gallery/>
          </div>

          <Offices/>
          
          <footer style={bluecolor} className="view page-footer font-small pt-4">

            <div className="container text-white">
            
              <ul className="list-unstyled list-inline text-center py-2">
                <li className="list-inline-item">
                  <h5 className="mb-1">Register for our Waitlist:</h5>
                </li>
                <li className="list-inline-item">
                  <GetStarted/>
                </li>
              </ul>

            </div>

            <div className="footer-copyright text-center text-white py-3">© 2021 Copyright:
              <a className="text-white" href="/"> hna.live</a>
            </div>


          </footer>
        
      </React.Fragment>
    );
  }
}
export default Company;