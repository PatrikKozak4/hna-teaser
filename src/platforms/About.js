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

const modalWidth = {
  maxWidth: '1350px!important'
}

const array = [
    { id: 1, component: <HNALogo/>, isVisible: true, 
      info: { id: 5, component: <HNAInfo/>, header: <> HourNationArchive </> , isVisibleInfo: false } },

    { id: 2, component: <AcademiaLogo/>, isVisible: true, 
      info: { id: 6, component: <AcademiaInfo/>, header: <> ArcAcademia </> , isVisibleInfo: false } },

    { id: 3, component: <EconLogo/>, isVisible: true, 
      info: { id: 7, component: <EconInfo/>, header: <> ArcEconomy </> , isVisibleInfo: false } },

    { id: 4, component: <DeedLogo/>, isVisible: true, 
      info: { id: 8, component: <DeedInfo/>, header: <> ArcDeed </> , isVisibleInfo: false } }
  ];

const About = () => {

    const [items, setItems] = useState(array);
  
    const handleClick = (number) => {
      const triggeredItems = items.map((item) => {
        if (item.id !== number) {
          item.isVisible = !item.isVisible;
        }
        item.info.isVisibleInfo =! item.info.isVisibleInfo
  
        return item;
      });
  
      setItems(triggeredItems);
    };
  
    return (
      <div>
        <div className="container mt-1 pt-1 pb-3 px-5">
          <MDBCol lg="12">
            <div className="input-group md-form form-sm form-2 pl-0">
              <input className="form-control my-0 py-1 blue-border" type="text" placeholder="Search Big Data" aria-label="Search" />
              <div className="input-group-append">
                <span className="input-group-text blue lighten-2" id="basic-text1">
                  <MDBIcon icon="search" className="text-white" />
                </span>
              </div>
            </div>
          </MDBCol>
        </div>
        <div>
          <div className=" my-1 py-1 text-center">
              <MDBAnimation reveal type="slideInRight" duration="8s" delay="3s" >
                <h3 className="mb-5 mt-2">Our Nation - Our Vision - Our Mission - HourNationArchive Big Data</h3>
              </MDBAnimation>
            </div>
        </div>
        <div className="mt-1 pt-1 pb-3 px-3">
          <div className="row d-flex my-1">
          {items.map(({ id, component, isVisible, info }) => (
            isVisible ? 
              <div
                key={id}
                className="col-lg-3 col-md-6 mb-4 border-right justify-content-center"
                onClick={() => handleClick(id)}
                hidden={!isVisible}
              >
              { component }
            {info.isVisibleInfo ? 
              <div
                key={info.id} 
              >

                <MDBModal isOpen={info.isVisibleInfo} backdrop={false} className="custom-modal-size">
                  <MDBModalHeader className="justify-content-center" tag="h3" closeAriaLabel="Close">
                    { info.header }
                  </MDBModalHeader>
                  <MDBModalBody>
                    {info.component}
                  </MDBModalBody>
                  <MDBModalFooter className="justify-content-center">
                    <MDBBtn color="primary" onClick={!info.isVisibleInfo}>Close</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
                
              </div>
              : null}
            </div>
            : null))}
          </div>
        </div>

      </div>
    );
  };
  
  export default About;