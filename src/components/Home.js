import React, { useRef } from 'react';
import { CButton } from '@coreui/react'
import FancyText from '@carefully-coded/react-text-gradient';
import '../css/Home.css';
import Home_pic from '../assets/images/hello.png';

const Home = ({ handleMenuItemClick }) => {
  const contactsRef = useRef(null);

  return (
    <div className="home_container">
      <div className="home_item">
        <h1 className="home_h1">
        <FancyText
          gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
          animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
          animateDuration={2000}
        >
          Hello !
        </FancyText>
        </h1>
        <p className="home_name">C'est Don Mariot</p>
        <p className="home_text" style={{textAlign: 'justify'}}>
          Développeur fullstack passionné par l'innovation, 
          je mets mon expertise technique au service de la création
          d'applications performantes et intuitives. 
        </p>
        <CButton  
          className='btn_home'
          color="info" 
          variant="outline" 
          shape='rounded-pill'
          onClick={() => handleMenuItemClick("Contacts")} 
          ref={contactsRef}> 
          Me contacter
        </CButton>
      </div>
      <img
        src={Home_pic}
        alt="hello !"
        style={{
          position: 'absolute', 
          top: '42%',           
          right: '30%',         
          transform: 'translateY(-60%)', 
          width: '22%',      
          height: 'auto',       
        }}
      />
    </div>
  );
};

export default Home;
