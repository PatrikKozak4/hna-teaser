import React from 'react'
import Button from 'react-bootstrap/Button';
import GetStarted from '../platforms/GetStarted'
import '../focus-visible'
import 'react-responsive-modal/styles.css';
import './LogoTeasers/modal-animations.css'
import "mdbreact/dist/css/mdb.css";
import './LogoTeasers/modal-animations.css'
import axios from 'axios';


const bluecolor = {
  backgroundColor: '#00BFFF'
}

class ContactUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      startedModalIsOpen: false
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/sendUs", 
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

  openStartedModal = () => {
    this.setState({ startedModalIsOpen: true });
  };
  
  closeStartedModal = () => {
    this.setState({ startedModalIsOpen: false });
  };

  render() { 
    return (
      <div className="contact-body">
      <div className="main-container">
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
                        id="name" 
                        className="form-control"
                        placeholder="Full Name" 
                        required
                        value={this.state.name} onChange={this.onNameChange.bind(this)}
                        />
                      <label htmlFor="name" className=""></label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input 
                        type="text" 
                        id="email" 
                        className="form-control"
                        placeholder="Email"
                        required
                        value={this.state.email} onChange={this.onEmailChange.bind(this)}  
                        />
                      <label htmlFor="email" className=""></label>
                    </div>
                  </div>


                </div>

                <div className="row">

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input 
                        type="text" 
                        id="phone" 
                        className="form-control"
                        placeholder="Phone Number"
                        required
                        value={this.state.phone} onChange={this.onPhoneChange.bind(this)}
                        />
                      <label htmlFor="phone" className=""></label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input 
                        type="text" 
                        id="company" 
                        className="form-control"
                        placeholder="Company Name"
                        required
                        value={this.state.company} onChange={this.onCompanyChange.bind(this)}  
                        />
                      <label htmlFor="company" className=""></label>
                    </div>
                  </div>


                </div>

                <div className="row">

                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea 
                        id="message" 
                        className="form-control md-textarea" 
                        placeholder="Your message"
                        rows="3"
                        value={this.state.message} onChange={this.onMessageChange.bind(this)}
                        >
                      </textarea>
                      <label htmlFor="message"></label>
                    </div>
                  </div>
                </div>

              <Button type="submit" varient="primary" className="text-center text-md-left">
                Submit
              </Button>

              </form>

            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fa fa-map-marker fa-2x blue-text"></i>
                  <p>Grand Rapids, MI 49544, USA</p>
                </li>
                <li>
                  <i className="fa fa-phone fa-2x mt-4 blue-text"></i>
                  <p>+ 1 (616) 633-7470 </p>
                </li>
                <li>
                  <i className="fa fa-envelope fa-2x mt-4 blue-text"></i>
                  <p className="mb-0">menzeljared@hna.live</p>
                </li>
              </ul>
            </div>

          </div>

        </section>


        </div>

      <div className="footer-contact">
      <footer style={bluecolor} className="view page-footer font-small pt-4">
        <div className="container text-white">
      
          <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
              <h5 className="mb-1">Register for our Waitlist:</h5>
            </li>
            <li className="list-inline-item">
              <a onClick={this.openStartedModal} href="#!" className="btn btn-outline-white">Sign up!</a>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center text-white py-3">© 2021 Copyright:
          <a className="text-white" href="/"> hna.live</a>
        </div>
      </footer>
      </div>
      
      <GetStarted
           startedModalIsOpen={this.state.startedModalIsOpen}
           closeStartedModal={this.closeStartedModal}
        />

    </div>
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

export default ContactUs;