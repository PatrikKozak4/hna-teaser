import React from 'react'
import { Button, Tabs, Tab } from 'react-bootstrap';
import { HNASecOne } from './HourNationComps/HourSecOne'
import { HNASecTwo } from './HourNationComps/HourSecTwo'
import { HNASecThree } from './HourNationComps/HourSecThree'
import { HNASecFour } from './HourNationComps/HourSecFour'
import { HourSecFive } from './HourNationComps/HourSecFive'
import { HNASecSix } from './HourNationComps/HourSecSix'
import { HNASecSeven } from './HourNationComps/HourSecSeven'


const widthStyle = {
  width: '100%'
};

const backg = {
  backgroundColor: '#181818'
};

export const HourNationArc = () => (
  <React.Fragment>
  <section id="hero" className="d-flex align-items-center" style={backg}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg12">
          <h1 className="display-4 text-white mt-5 mb-2">What is HourNationArc?</h1>
          <p className="lead mb-5 text-white-50">Real-Time Unbiased Media Source</p>
          <Button variant="primary">Subscribe</Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="success">More Info</Button>{' '}
        </div>
        <hr/>
      </div>
    </div>
    </section>
    
    <HNASecOne/>

    <div >
    <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
      <Tab eventKey="overview" title="Overview" className="tab-content mb-5">
        <h2 className="text-center mt-4 mb-3">How HourNationArc Works</h2>
          <p className="text-center lead grey-text mx-auto mt-3 mb-5">State-of-the-art data sanitization 
          software is integrated within the platform to provide users with unbiased and 
          honest current event news while promoting social interaction that mirrors 
          social media.</p>

          <div className="container">
            <div className="row">
              
              <div className="col-md-5 mb-5 mb-md-0">
                <div className="about-text">
                  <h4 className="font-weight-bold">Factually-Based Media Platform </h4>
                  <p className="tgrey-text">HourNationArc tells the story as it is and 
                  lets you form your own perspective.</p>

                  <a className="font-weight-bold" href="google.com" >Learn more<i className="fa fa-angle-right ml-2"></i></a>
                </div>
              </div>

              <div className="col-md-2 mb-5 mb-md-0"></div>

              <div className="col-md-5 mb-5 mb-md-0"> 
                <div className="view overlay z-depth-1-half">
                  <img style={widthStyle} src={require('../img/Academia1.png')} className="img-responsive" alt=""/> 
                </div>
              </div>
            </div>
          </div>
      
      </Tab>
      <Tab eventKey="features" title="Features">
        <h2 className="text-center mt-4 mb-3">Features</h2>
          <p className="text-center mt-4">HNA separates from all media competition by 
          revolutionizing the way our <br/> nation views and interprets the most 
          current/live news.
          </p>
          <HNASecTwo/>
      </Tab>
      <Tab eventKey="editions" title="Editions">
        <h2 className="text-center mt-4 mb-3">Editions</h2>
          <p className="text-center mt-4">Which HourNationArc edition is right for you?</p>
          <div className="container py-5 my-5">
            <section className="p-md-3 mx-md-5 text-center text-lg-left">
              
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="card text-center">
                    <div className="card-header text-white bg-dark">
                      <h4>Producer-Based Platform</h4>
                      <div className="d-flex justify-content-center align-items-end">
                        <h3 className="mb-0 h3">$15</h3>
                        <p className="mb-0 ml-2">/ month</p>
                      </div>
                    </div>
                    <i className="fa fa-book fa-2x pt-5 text-primary"></i>
                    <div className="card-body">
                      <p className="lead font-weight-bold">Pricing plan</p>
                      <p className="card-text">Request a quote underneath and it will direct 
                      the user to the subscription packages.
                      </p>
                      <a className="btn btn-primary btn-md" href="google.com" role="button">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card text-center">
                    <div className="card-header text-white bg-dark">
                      <h4>Consumer-Based platform</h4>
                      <div className="d-flex justify-content-center align-items-end">
                        <h3 className="mb-0 h3">$69</h3>
                        <p className="mb-0 ml-2">/ month</p>
                      </div>
                    </div>
                    <i className="fa fa-laptop fa-2x pt-5 text-success"></i>
                    <div className="card-body">
                      <p className="lead font-weight-bold">Pricing plan</p>
                      <p className="card-text">Request a quote underneath and it will direct 
                      the user to the subscription packages.
                      </p>
                      <a className="btn btn-primary btn-md" href="google.com" role="button">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card text-center">
                    <div className="card-header text-white bg-dark">
                      <h4>Enterprise-Based Platform</h4>
                      <div className="d-flex justify-content-center align-items-end">
                        <h3 className="mb-0 h3">$209</h3>
                        <p className="mb-0 ml-2">/ month</p>
                      </div>
                    </div>
                    <i className="fa fa-book fa-2x pt-5 text-warning"></i>
                    <div className="card-body">
                      <p className="lead font-weight-bold">Pricing plan</p>
                      <p className="card-text">Request a quote underneath and it will direct 
                      the user to the subscription packages.
                      </p>
                      <a className="btn btn-primary btn-md" href="google.com" role="button">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </Tab>
      <Tab eventKey="testimonials" title="Testimonials">
        <h2 className="text-center mt-4 mb-3">Customer Testimonials</h2>
          <p className="text-center mt-4">
          </p>
          <div className="container mt-1">
            <section className="team-section text-center dark-grey-text">

              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <div className="testimonial">
                    
                    <div className="avatar mx-auto">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-circle z-depth-1 img-fluid"/>
                    </div>
                    
                    <h4 className="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
                    <h6 className="font-weight-bold blue-text my-3"></h6>
                    <p className="font-weight-normal dark-grey-text">
                      <i className="fa fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                      eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                    
                    <div className="text-warning">
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star-half-alt"> </i>
                    </div>
                  </div>

                </div>
                
                <div className="col-md-4 mb-4">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle z-depth-1 img-fluid"/>
                    </div>
                    
                    <h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                    <h6 className="font-weight-bold blue-text my-3"></h6>
                    <p className="font-weight-normal dark-grey-text">
                      <i className="fa fa-quote-left pr-2"></i>Ut enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                    
                    <div className="text-warning">
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                    </div>
                  </div>

                </div>
                
                <div className="col-md-4 mb-4">
                  <div className="testimonial">
                    <div className="avatar mx-auto">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle z-depth-1 img-fluid"/>
                    </div>
                    
                    <h4 className="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                    <h6 className="font-weight-bold blue-text my-3"></h6>
                    <p className="font-weight-normal dark-grey-text">
                      <i className="fa fa-quote-left pr-2"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                    
                    <div className="text-warning">
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
      </Tab>
    </Tabs>
    </div>

    <HNASecThree/>
    <HNASecFour/>
    <HourSecFive/>
    <HNASecSix/>
    <HNASecSeven/>

    </React.Fragment>

)