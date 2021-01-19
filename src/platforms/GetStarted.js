import React, {useState} from 'react'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const btncolor = {
    backgroundColor: '#00BFFF'
}

const GetStarted = () => {
  const [state, setSate] = useState({
    firstNameLaunch: '',
    lastNameLaunch: '',
    emailLaunch: ''
  });

  const [result, setResult] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendMail = event => {
    event.preventDefault();
    axios
      .post('/sendLaunch', { ...state })
      .then(response => {
        setResult(response.data);
        setSate({
          firstNameLaunch: '', 
          lastNameLaunch: '', 
          emailLaunch: ''
        });
      })
      .catch(() => {
        setResult({ success: false, message: 'Something went wrong. Try again later'});
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
    <div>

      <a onClick={handleShow} href="#!" className="btn btn-outline-white text-white" style={btncolor}>Sign Up!<i></i></a>

      <Modal 
        show={show} 
        onHide={handleClose}
        size="md"
        centered
      >
          <div >

            <div className="mt-1 text-center text-lg-left dark-grey-text">

            <button type="button" className="close closeButton" aria-label="Close" style={{marginRight: 10}} onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
            </button>

                <div className="row justify-content-center">
                
                    <div className="col-md-10">
                    
                        <form className="text-center" onSubmit={sendMail}>
                        <p className="h4 my-2">Coming Soon!</p>
                        
                        <p style={{fontSize: '14px'}} className=""> Sign up to get notified when we launch. </p>

                        {result && (
                          <p style={{fontSize: '14px'}} className={`${result.success ? 'success' : 'error'}`}>
                            {result.message}
                          </p>
                        )}
                        
                            <div className="form-row mb-1">
                                <div className="col">
                    
                                    <input 
                                        type="text" 
                                        id="firstNameLaunch"
                                        name="firstNameLaunch" 
                                        className="form-control" 
                                        placeholder="First Name"
                                        required
                                        value={state.firstNameLaunch} 
                                        onChange={onInputChange}
                                    />
                                    <label htmlFor="firstNameLaunch" className=""></label>
                                </div>

                                <div className="col">
            
                                    <input 
                                        type="text" 
                                        id="lastNameLaunch" 
                                        name="lastNameLaunch"
                                        className="form-control" 
                                        placeholder="Last Name"
                                        required
                                        value={state.lastNameLaunch} 
                                        onChange={onInputChange}
                                    />
                                    <label htmlFor="lastNameLaunch" className=""></label>
                                </div>
                            </div>

                    
                            <input 
                                type="email" 
                                id="emailLaunch" 
                                name="emailLaunch"
                                className="form-control" 
                                placeholder="Email"
                                required
                                value={state.emailLaunch} 
                                onChange={onInputChange}
                            />
                            <label htmlFor="emailLaunch" className=""></label>
        
                            <Button type="submit" style={btncolor} className="btn my-2 mb-4 btn-block text-white">
                              Sign Up
                            </Button>

                        </form>
                    </div>
                </div>
            </div>
          </div>  
      </Modal>
    
    </div>
  );
};

export default GetStarted;