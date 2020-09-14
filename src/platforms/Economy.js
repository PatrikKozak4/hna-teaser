import React from 'react'
import { Button } from 'react-bootstrap';
import { EconSecOne } from './EconComps/EconSecOne'
import { EconSecTwo } from './EconComps/EconSecTwo'
import { EconSecThree } from './EconComps/EconSecThree'
import { EconSecFour } from './EconComps/EconSecFour'
import { EconSecFive } from './EconComps/EconSecFive'
import { EconSecSix } from './EconComps/EconSecSix'
import { EconSecSeven } from './EconComps/EconSecSeven'

import { Tabs, Tab } from 'react-bootstrap';
import '../styles.css'

const widthStyle = {
  width: '100%'
};

const backg = {
  backgroundColor: '#181818'
};

export const Economy = () => (
  <React.Fragment>
  <section id="hero" className="d-flex align-items-center" style={backg}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg12">
          <h1 className="display-4 text-white mt-5 mb-2">What is ArcEconomy?</h1>
          <p className="lead mb-5 text-white-50">Instantaneous Business Insight</p>
          <Button variant="primary">Subscribe</Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="success">More Info</Button>{' '}
        </div>
        <hr/>
      </div>
    </div>
    </section>
    
    <EconSecOne/>

    <div >
    <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
      <Tab eventKey="overview" title="Overview" className="tab-content mb-5">
        <h2 className="text-center mt-4 mb-3">How ArcEconomy Works</h2>
          <p className="text-center lead grey-text mx-auto mt-3 mb-5">ArcEconomy allows users to 
          visually pinpoint where and why each sector within their <br/> respected industry 
          holds the most value, supply, and demand through economy driven indicators. 
          <br/> Furthermore, ArcEconomy diverges into two separate platforms: a consumer-based platform 
          and a producer-based platform.
          </p>

          <div className="container">
            <div className="row">
              
              <div className="col-md-5 mb-5 mb-md-0">
                <div className="about-text">
                  <h4 className="font-weight-bold">Real-Time Economy Driven <br/> Business Indicator</h4>
                  <p className="tgrey-text">Get an instantaneous glance at the ins-and-outs of the American 
                  economy through ArcEconomy. Gain an understanding of the current financial 
                  climate, see how your company ranks against competitors, and gain a 
                  competitive advantage in your market.</p>

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
          <p className="text-center mt-4">Our difference lies in our devotion to 
          relinquishing the oppression of businesses <br/> through big-name consulting 
          firms and revoking their foothold in the decision-making process. 
          </p>
          <EconSecTwo/>
      </Tab>
      <Tab eventKey="editions" title="Editions">
        <h2 className="text-center mt-4 mb-3">Editions</h2>
          <p className="text-center mt-4">Which ArcEconomy edition is right for you?</p>
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

    <EconSecThree/>
    <EconSecFour/>
    <EconSecFive/>
    <EconSecSix/>
    <EconSecSeven/>

    </React.Fragment>

)