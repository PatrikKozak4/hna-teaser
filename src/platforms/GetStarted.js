import React from 'react'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCol, MDBIcon, MDBCloseIcon, MDBAnimation } from 'mdbreact';


const btncolor = {
    backgroundColor: '#00BFFF'
}

const closeButton = {
  marginTop: '20px'
}

class GetStarted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          firstNameLaunch: '',
          lastNameLaunch: '',
          emailLaunch: ''
        }
      }

      handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:3002/sendLaunch", 
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
        this.setState({firstNameLaunch: '', lastNameLaunch: '', emailLaunch: ''})
      }

    render() { 
    return (
        <>
          <Modal 
            show={this.props.startedModalIsOpen} 
            onHide={this.props.closeStartedModal}
            size="md"
            centered
          >
              <div >

                <div className="mt-1 text-center text-lg-left dark-grey-text">

                <button type="button" className="close closeButton" aria-label="Close" style={{marginRight: 10}} onClick={this.props.closeStartedModal}>
                    <span aria-hidden="true">&times;</span>
                </button>

                    <div className="row justify-content-center">
                    
                        <div className="col-md-10">
                        
                            <form className="text-center" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <p className="h4 my-2">Coming Soon!</p>
                            
                            <p style={{fontSize: '14px'}} className=""> Sign up to get notified when we launch. </p>
                            
                                <div className="form-row mb-1">
                                    <div className="col">
                        
                                        <input 
                                            type="text" 
                                            id="firstNameLaunch" 
                                            className="form-control" 
                                            placeholder="First Name"
                                            required
                                            value={this.state.firstNameLaunch} onChange={this.onFirstNameChange.bind(this)}
                                        />
                                        <label htmlFor="firstNameLaunch" className=""></label>
                                    </div>

                                    <div className="col">
                
                                        <input 
                                            type="text" 
                                            id="lastNameLaunch" 
                                            className="form-control" 
                                            placeholder="Last Name"
                                            required
                                            value={this.state.lastNameLaunch} onChange={this.onlastNameChange.bind(this)}
                                        />
                                        <label htmlFor="lastNameLaunch" className=""></label>
                                    </div>
                                </div>

                        
                                <input 
                                    type="email" 
                                    id="emailLaunch" 
                                    className="form-control" 
                                    placeholder="Email"
                                    required
                                    value={this.state.emailLaunch} onChange={this.onEmailChange.bind(this)}
                                />
                                <label htmlFor="emailLaunch" className=""></label>
            
                                <button onClick={this.props.closeStartedModal} style={btncolor} className="btn my-2 mb-4 btn-block text-white" type="submit">
                                Sign Up
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
              </div>  
          </Modal>
       
        </>
     );
    }

    onFirstNameChange(event) {
        this.setState({firstNameLaunch: event.target.value})
    }

    onlastNameChange(event) {
        this.setState({lastNameLaunch: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({emailLaunch: event.target.value})
    }

}
export default GetStarted;