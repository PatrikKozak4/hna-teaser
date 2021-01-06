import React, {useState, useEffect} from 'react'
import { Button, Tabs, Tab, InputGroup, FormControl } from 'react-bootstrap';
import HNALogo from './LogoTeasers/HNAlogo'
import AcademiaLogo from './LogoTeasers/Academialogo'
import EconLogo from './LogoTeasers/Econlogo'
import DeedLogo from './LogoTeasers/Deedlogo'
import HNAInfo from './LogoTeasers/HNAInfo'
import AcademiaInfo from './LogoTeasers/AcademiaInfo'
import EconInfo from './LogoTeasers/EconInfo'
import DeedInfo from './LogoTeasers/DeedInfo'
import '../focus-visible'
import 'react-responsive-modal/styles.css';
import './LogoTeasers/modal-animations.css'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCol, MDBIcon, MDBCloseIcon, MDBAnimation } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import './LogoTeasers/modal-animations.css'
import ReactPlayer from 'react-player';
import axios from 'axios';

const backg = {
  backgroundColor: '#181818'
};

const bluecolor = {
  backgroundColor: '#00BFFF'
}

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', phone: '', company: '', message: ''})
  }

  render() { 
    return (
      <div className="">
      <div className="container z-depth-1">

        <section className="text-center px-md-5 mx-md-5 dark-grey-text">


          <h3 className="font-weight-bold mb-4">Contact Us</h3>

          <p className="text-center w-responsive mx-auto mb-1">Any questions? Please fill out the form below and we’ll get back to you directly.</p>

          <div className="row">

            <div className="col-md-9 mb-md-0 mb-5">

              <form onSubmit={this.handleSubmit.bind(this)} method="POST">

                <div className="row">

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input 
                        type="text" 
                        id="contact-name" 
                        className="form-control"
                        required
                        value={this.state.name} onChange={this.onNameChange.bind(this)}
                        />
                      <label for="contact-name" className="">Full Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input 
                        type="text" 
                        id="contact-email" 
                        className="form-control"
                        required
                        value={this.state.email} onChange={this.onEmailChange.bind(this)}  
                        />
                      <label for="contact-email" className="">Email</label>
                    </div>
                  </div>


                </div>

                <div className="row">

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input 
                        type="text" 
                        id="contact-Phone" 
                        className="form-control"
                        required
                        value={this.state.phone} onChange={this.onPhoneChange.bind(this)}
                        />
                      <label for="contact-Phone" className="">Phone Number</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input 
                        type="text" 
                        id="contact-Company" 
                        className="form-control"
                        required
                        value={this.state.company} onChange={this.onCompanyChange.bind(this)}  
                        />
                      <label for="contact-Company" className="">Company Name</label>
                    </div>
                  </div>


                </div>

                <div className="row">

                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea 
                        id="contact-message" 
                        className="form-control md-textarea" 
                        rows="3"
                        value={this.state.message} onChange={this.onMessageChange.bind(this)}
                        >
                      </textarea>
                      <label for="contact-message">Your message</label>
                    </div>
                  </div>
                </div>

              </form>

              <div className="text-center text-md-left">
                <a style={bluecolor} className="btn btn-md btn-rounded">Send</a>
              </div>

            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fa fa-map-marker fa-2x blue-text"></i>
                  <p>Grand Rapids, MI 49544, USA</p>
                </li>
                <li>
                  <i className="fa fa-phone fa-2x mt-4 blue-text"></i>
                  <p>+ 01 234 567 89</p>
                </li>
                <li>
                  <i className="fa fa-envelope fa-2x mt-4 blue-text"></i>
                  <p className="mb-0">contact@gmail.com</p>
                </li>
              </ul>
            </div>

          </div>

        </section>


        </div>


      <footer style={bluecolor} className="view page-footer font-small pt-4">


      <div className="container text-white">

      
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for our Waitlist:</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-outline-white">Sign up!</a>
          </li>
        </ul>


      </div>



      <div className="footer-copyright text-center text-white py-3">© 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/education/bootstrap/"> HourNationArchive.com</a>
      </div>


      </footer>

    </div>
    );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
      this.setState({email: event.target.value})
  }

  onPhoneChange(event) {
      this.setState({phone: event.target.value})
  }

  onCompanyChange(event) {
      this.setState({company: event.target.value})
  }

  onMessageChange(event) {
      this.setState({message: event.target.value})
  }
}

export default Test;