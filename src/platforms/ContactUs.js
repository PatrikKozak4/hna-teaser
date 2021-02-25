import React, {useState} from 'react'
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

const ContactUs = () => {
  const [state, setSate] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data);
        setSate({
          name: '', 
          email: '', 
          phone: '', 
          company: '', 
          message: ''
        });
      })
      .catch(() => {
        setResult({ 
          success: false, 
          message: 'Something went wrong. Try again later'
        });
      });
  };

  const onInputChange = event => {
    const {name, value} = event.target;

    setSate({
      ...state,
      [name]: value
    });
  };

  return (
    <div className="contact-body">
      <div className="main-container">
        <div className="container z-depth-1">

          <section className="text-center px-md-4 mx-md-4 dark-grey-text">

            <h3 className="font-weight-bold mb-4">Contact Us</h3>

            <p className="text-center w-responsive mx-auto mb-1">Any questions? Please fill out the form below and we’ll get back to you directly.</p>

            {result && (
              <p className={`${result.success ? 'success' : 'error'}`}>
                {result.message}
              </p>
            )}

            <div className="row">

              <div className="col-md-8 mb-md-0 mb-5">

                <form onSubmit={sendEmail}>

                  <div className="row">

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          className="form-control"
                          placeholder="Full Name" 
                          required
                          value={state.name} 
                          onChange={onInputChange}
                          />
                        <label htmlFor="name" className=""></label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input 
                          type="text" 
                          id="email"
                          name="email" 
                          className="form-control"
                          placeholder="Email"
                          required
                          value={state.email} 
                          onChange={onInputChange}  
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
                          name="phone" 
                          className="form-control"
                          placeholder="Phone Number"
                          required
                          value={state.phone} 
                          onChange={onInputChange}
                          />
                        <label htmlFor="phone" className=""></label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input 
                          type="text" 
                          id="company"
                          name="company" 
                          className="form-control"
                          placeholder="Company Name"
                          required
                          value={state.company} 
                          onChange={onInputChange} 
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
                          name="message" 
                          className="form-control md-textarea" 
                          placeholder="Your message"
                          rows="3"
                          value={state.message} 
                          onChange={onInputChange}
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

              <div className="col-md-4 text-center">
                <ul className="list-unstyled mb-1">
                  <li>
                    <i className="fa fa-map-marker fa-2x blue-text"></i>
                    <p>8 The Green, Ste A Dover, DE 19901</p>
                  </li>
                  <li>
                    <i className="fa fa-phone fa-2x mt-4 blue-text"></i>
                    <p>+ 1 (269) 519-9273 </p>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-2x mt-4 blue-text"></i>
                    <p className="mb-0">cmojsiejenko@hna.live</p>
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
                  <GetStarted/>
                </li>
              </ul>
            </div>

            <div className="footer-copyright text-center text-white py-3">© 2021 Copyright:
              <a className="text-white" href="/"> hna.live</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;