import React from 'react'
import { Button } from 'react-bootstrap';
import { DeedSecOne } from './DeedComps/DeedSecOne'
import { DeedSecTwo } from './DeedComps/DeedSecTwo'
import { DeedSecThree } from './DeedComps/DeedSecThree'
import { DeedSecFour } from './DeedComps/DeedSecFour'
import { DeedSecFive } from './DeedComps/DeedSecFive'
import { DeedSecSix } from './DeedComps/DeedSecSix'

import { Tabs, Tab } from 'react-bootstrap';
import '../styles.css'

const widthStyle = {
  width: '100%'
};

const backg = {
  backgroundColor: '#181818'
};

export const Deed = () => (
  <React.Fragment>
  <section id="hero" className="d-flex align-items-center" style={backg}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg12">
          <h1 className="display-4 text-white mt-5 mb-2">What is ArcDeed?</h1>
          <p className="lead mb-5 text-white-50">The Real Estate agent of the future.</p>
          <Button variant="primary">Subscribe</Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="success">More Info</Button>{' '}
        </div>
        <hr/>
      </div>
    </div>
    </section>
    
    <DeedSecOne/>

    <div >
    <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
      <Tab eventKey="overview" title="Overview" className="tab-content mb-5">
        <h2 className="text-center mt-4 mb-3">How ArcDeed Works</h2>
          <p className="text-center lead grey-text mx-auto mt-3 mb-5">Intertwining big data, real-time and 3D graphical 
          representations for all <br/> looking to invest or buy within the Real Estate Market. Our Platform is a big 
          data property analysis tool <br/> and a virtual consultant which when you use it daily, it eliminates indecisive research.
          </p>

          <div className="container">
            <div className="row">
              
              <div className="col-md-5 mb-5 mb-md-0">
                <div className="about-text">
                  <h4 className="font-weight-bold">Real Estate Online</h4>
                  <p className="tgrey-text">Home buyers spend 124 hours, on average, to find a home; however, 
                  ArcDeed allows home buyers to discover their dream location within ¼ of that time.</p>

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
          <p className="text-center mt-4">ArcDeed provides value to its users through 
          it’s digital intelligence butler tools, constant tool upgrades, 
          and cutting edge visuals.
          </p>
          <DeedSecTwo/>
      </Tab>
      <Tab eventKey="editions" title="Editions">
        <h2 className="text-center mt-4 mb-3">Editions</h2>
          <p className="text-center mt-4">Which ArcDeed edition is right for you?</p>
          <div className="container py-5 my-5">
            <section className="p-md-3 mx-md-5 text-center text-lg-left">
              
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="card text-center">
                    <div className="card-header text-white bg-dark">
                      <h4>Personal</h4>
                      <div className="d-flex justify-content-center align-items-end">
                        <h3 className="mb-0 h3">$15</h3>
                        <p className="mb-0 ml-2">/ month</p>
                      </div>
                    </div>
                    <i className="fa fa-book fa-2x pt-5 text-primary"></i>
                    <div className="card-body">
                      <p className="lead font-weight-bold">Pricing plan</p>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
                      </p>
                      <a className="btn btn-primary btn-md" href="google.com" role="button">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card text-center">
                    <div className="card-header text-white bg-dark">
                      <h4>Real Estate Agent</h4>
                      <div className="d-flex justify-content-center align-items-end">
                        <h3 className="mb-0 h3">$69</h3>
                        <p className="mb-0 ml-2">/ month</p>
                      </div>
                    </div>
                    <i className="fa fa-laptop fa-2x pt-5 text-success"></i>
                    <div className="card-body">
                      <p className="lead font-weight-bold">Pricing plan</p>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
                      </p>
                      <a className="btn btn-primary btn-md" href="google.com" role="button">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card text-center">
                    <div className="card-header text-white bg-dark">
                      <h4>Enterprise</h4>
                      <div className="d-flex justify-content-center align-items-end">
                        <h3 className="mb-0 h3">$209</h3>
                        <p className="mb-0 ml-2">/ month</p>
                      </div>
                    </div>
                    <i className="fa fa-book fa-2x pt-5 text-warning"></i>
                    <div className="card-body">
                      <p className="lead font-weight-bold">Pricing plan</p>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
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
                    <h6 className="font-weight-bold blue-text my-3">Real Esate Agent</h6>
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
                    <h6 className="font-weight-bold blue-text my-3">New Home Owner</h6>
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
                    <h6 className="font-weight-bold blue-text my-3">new Home Owner</h6>
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

    <DeedSecThree/>
    <DeedSecFour/>
    <DeedSecFive/>
    <DeedSecSix/>

    </React.Fragment>

)