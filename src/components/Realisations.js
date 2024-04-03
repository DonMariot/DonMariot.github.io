import React from 'react';
import '../css/Realisations.css';
import { 
  CRow, 
  CCol, 
  CCard, 
  CCardImage, 
  CCardBody, 
  CCardTitle, 
  CCardText, 
} from '@coreui/react';
import EcoleAdmin from '../assets/images/ecole.png';
import Defis from '../assets/images/defis.png';
import Mid from '../assets/images/mid.png';
import Php from '../assets/images/php.svg';
import Laravel from '../assets/images/laravel.svg';
import Reactic from '../assets/images/react.svg';
import Node from '../assets/images/node.svg';
import Java from '../assets/images/java.svg';

const Realisations = () => {

  return (
    <div className="real_container">
      <h2 className="real_h2">Réalisations</h2>
      <p className="real_p">Les projets récents</p>
      <CRow xs={{ cols: 3, gutter: 3 }} md={{ cols: 3 }} className='real_item'>
        <CCol xs className='real_col'>
          <CCard>
            <CCardImage orientation="top" src={EcoleAdmin} style={{ height:'20vh' }}/>
            <CCardBody>
              <CCardTitle className='real_title'>Ecole Admin</CCardTitle>
              <CCardText>
                <div className='real_icon'>
                  <img src={Php} alt="php" style={{ width:'4vw' }}/>
                  <img src={Laravel} alt="laravel" style={{ width:'4vw', marginLeft:'10%' }}/>
                </div>
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs className='real_col'>
          <CCard style={{ marginLeft:'1px' }}>
            <CCardImage orientation="top" src={Mid} style={{ height:'20vh' }}/>
            <CCardBody>
              <CCardTitle className='real_title'>MID Application</CCardTitle>
              <CCardText>
                <div className='real_icon'>
                  <img src={Reactic} alt="react" style={{ width:'4vw' }}/>
                  <img src={Node} alt="node" style={{ width:'4vw', marginLeft:'10%' }}/>
                </div>
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs className='real_col'>
          <CCard style={{ marginLeft:'1px' }}>
            <CCardImage orientation="top" src={Defis} style={{ height:'20vh' }}/>
            <CCardBody>
              <CCardTitle className='real_title'>Banque d'image</CCardTitle>
              <CCardText>
                <div className='real_icon'>
                  <img src={Java} alt="java" style={{ width:'3vw' }}/>
                </div>
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> 
    </div>
  );
};

export default Realisations;
