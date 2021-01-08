import React, {useState} from 'react'
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
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBAnimation } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import './LogoTeasers/modal-animations.css'


const bluecolor = {
  backgroundColor: '#00BFFF'
}

const array = [
    { id: 1, component: <HNALogo/>, isVisible: true, 
      info: { id: 5, component: <HNAInfo/>, header: <> HourNationArc </> , isVisibleInfo: false } },

    { id: 2, component: <AcademiaLogo/>, isVisible: true, 
      info: { id: 6, component: <AcademiaInfo/>, header: <> ArcAcademia </> , isVisibleInfo: false } },

    { id: 3, component: <EconLogo/>, isVisible: true, 
      info: { id: 7, component: <EconInfo/>, header: <> ArcEconomy </> , isVisibleInfo: false } },

    { id: 4, component: <DeedLogo/>, isVisible: true, 
      info: { id: 8, component: <DeedInfo/>, header: <> ArcDeed </> , isVisibleInfo: false } }
  ];

const Home = () => {

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
      <div className="main-container">
        <div className="">
          <div className="mt-1 my-3 py-1 text-center z-depth-1 mb-1">
              <MDBAnimation reveal type="slideInRight" duration="8s" delay="3s" >
                <h2 className="mb-5 mt-2 font-weight-bold header-font text-blue">Our Vision - Our Mission - Our Nation</h2>
              </MDBAnimation>
            </div>
        </div>
        <div className="mt-1 pt-3 pb-1 px-1">
          <div className="row my-1 d-flex z-depth-1">
          {items.map(({ id, component, isVisible, info }) => (
            isVisible ? 
              <div
                key={id}
                className="col-lg-3 col-md-6 border-right d-flex justify-content-center "
                onClick={() => handleClick(id)}
                hidden={!isVisible}
              >
              <div className="row mb-3 d-flex align-items-center">
                
                  <div className="col-12">
                    { component }
                  </div>
                
              </div>
            {info.isVisibleInfo ? 
              <div
                key={info.id} 
              >

                <MDBModal isOpen={info.isVisibleInfo} backdrop={false} centered position="right" className="custom-modal-size overflow-hidden" overflowScroll={false}>
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

      <div className="footer-home">
      <footer style={bluecolor} className="view page-footer font-small pt-2 pb-2">

        <div className="footer-copyright text-center text-white my-2 py-4">© 2021 Copyright:
          <a className="text-white" href="/"> hna.live</a>
        </div>

      </footer>
      </div>
      
      </div>
      
    );
  };
  
  export default Home;