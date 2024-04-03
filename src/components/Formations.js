import React from 'react';
import { CButton } from '@coreui/react'
import '../css/Formations.css';

const Formations = () => {
  
  return (
    <div className="form_container">
      <h2 className="form_h2">Formations</h2>
      <p className="form_title">Master II en Informatique à l'ENI Fianarantsoa</p>
      <p className="form_text" style={{textAlign: 'justify'}}>
        Ayant étudié à l'École Nationale d'Informatique (ENI) 
        dès ma première année jusqu'au Master 2, j'ai bénéficié 
        d'une formation complète en informatique. Située à Tanambao-
        Antaninarenina à Fianarantsoa et rattachée à l'Université 
        de Fianarantsoa, l'ENI offre un cursus diversifié couvrant 
        l'administration réseau, le développement d'applications, 
        la sécurité informatique et les TIC. De la gestion d'entreprise 
        aux télécommunications, en passant par les Big Data et le marketing, 
        l'école met l'accent sur l'ingénierie informatique appliquée, avec une 
        attention particulière portée à l'écologie et au développement durable.
      </p>
      <CButton 
        className='btn_form'
        color="info" 
        variant="outline" 
        style={{ width: '10rem' }}
        shape="rounded-pill">
          En Savoir plus ... 
      </CButton>
    </div>
  );
};

export default Formations;