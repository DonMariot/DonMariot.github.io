import React, { useState } from 'react';
import '../css/Apropos.css';
import CV from '../assets/images/cv.png'
import { CButton } from '@coreui/react'
import Modal from 'react-bootstrap/Modal';

const Apropos = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="aprop_container">
            <h2 className="aprop_h2">A propos</h2>
            <div className="aprop_item">
                <h2 className="aprop_nom">RAKOTOZANDRY Don Mariot</h2>
                <p className="aprop_text">
                En tant que développeur fullstack, je suis passionné par 
                la création d'applications web et mobiles innovantes. Avec 
                une solide expertise à la fois côté front-end et back-end, 
                je suis capable de concevoir et de développer des solutions 
                complètes et robustes. Mon expérience dans le développement 
                de logiciels me permet de comprendre les besoins des utilisateurs 
                et de transformer leurs idées en produits fonctionnels et conviviaux. 
                Que ce soit en utilisant les dernières technologies front-end comme React.js 
                ou en construisant des API robustes avec Node.js et Express, 
                je suis prêt à relever tous les défis. Je suis toujours à l'affût des 
                dernières tendances et des meilleures pratiques en matière de développement,
                 afin de fournir des solutions de qualité qui répondent aux besoins de mes clients et utilisateurs.
                </p>
                <h4 className="aprop_conct">Tèl : [+261 34 97 068 43 | +261 32 80 988 11] Email : razandri17@gmail.com </h4>
                <br/>
                <CButton 
                  className='btn_prop'
                  color="info" 
                  variant="outline" 
                  onClick={handleShow}
                  shape="rounded-pill">
                    Cliquer ici pour voir le CV
                </CButton>
                <Modal 
                  show={show} 
                  onHide={handleClose}
                  size='30px'>
                  <Modal.Header closeButton>
                    <Modal.Title>Curriculum Vitae</Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <img src={CV} alt="CV" 
                      style={{ 
                        maxWidth: '100%', height: 'auto' }} />
                    </Modal.Body>
                  <Modal.Footer>
                    <CButton color='secondary' variant="outline" onClick={handleClose}>
                      Fermer
                    </CButton>
                  </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Apropos;
