import React, { useRef, useEffect, useState } from 'react';
import { CProgress, CProgressBar, CButton } from '@coreui/react';
import '../css/Competences.css';
import Comp_pic from '../assets/images/competence.png';

// Déplacer la fonction simulerClicAutomatique à l'extérieur du composant
const simulerClicAutomatique = (buttonRef, simulationEnCours, setValues, setComptenceNames, setBoutonSuivant, conceptionButtonRef, methodologieButtonRef, frontendButtonRef, backendButtonRef) => {
  if (buttonRef && buttonRef.current && simulationEnCours) {
    buttonRef.current.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    buttonRef.current.classList.add('button-clicked');
    setTimeout(() => {
      buttonRef.current.classList.remove('button-clicked');
    }, 4000);
    switch (buttonRef) {
      case conceptionButtonRef:
        setValues([97, 50, 70, 95]);
        setComptenceNames(['UML', 'Draw.io', 'Trello', 'Adobe XD']);
        setBoutonSuivant(methodologieButtonRef);
        break;
      case methodologieButtonRef:
        setValues([98, 70, 100, 100]);
        setComptenceNames(['Gantt', 'Kanban', 'GitHub', 'Slack - Discord']);
        setBoutonSuivant(frontendButtonRef);
        break;
      case frontendButtonRef:
        setValues([99, 75, 60, 90]);
        setComptenceNames(['React JS', 'Vue JS', 'Angular', 'Javascript']);
        setBoutonSuivant(backendButtonRef);
        break;
      case backendButtonRef:
        setValues([99.9, 95, 90, 75]);
        setComptenceNames(['Node JS', 'PHP', 'Java', 'Python']);
        setBoutonSuivant(conceptionButtonRef);
        break;
      default:
        setBoutonSuivant(null);
        break;
    }
  }
};

const Competences = ({ modeNuit }) => {
  const conceptionButtonRef = useRef(null);
  const methodologieButtonRef = useRef(null);
  const frontendButtonRef = useRef(null);
  const backendButtonRef = useRef(null);
  const [boutonSuivant, setBoutonSuivant] = useState(null);
  const [simulationEnCours, setSimulationEnCours] = useState(true);
  const [values, setValues] = useState([0, 0, 0, 0]);
  const [competenceNames, setComptenceNames] = useState(['', '', '', '']);

  useEffect(() => {
    simulerClicAutomatique(conceptionButtonRef, simulationEnCours, setValues, setComptenceNames, setBoutonSuivant, conceptionButtonRef, methodologieButtonRef, frontendButtonRef, backendButtonRef);
  }, [simulationEnCours, setValues, setComptenceNames, setBoutonSuivant]);

  useEffect(() => {
    if (boutonSuivant && simulationEnCours) {
      const timeoutId = setTimeout(() => {
        simulerClicAutomatique(boutonSuivant, simulationEnCours, setValues, setComptenceNames, setBoutonSuivant, conceptionButtonRef, methodologieButtonRef, frontendButtonRef, backendButtonRef);
      }, 4000);
      return () => clearTimeout(timeoutId);
    }
  }, [boutonSuivant, simulationEnCours, setValues, setComptenceNames, setBoutonSuivant]);

  const handleManualClick = () => {
    setSimulationEnCours(true);
  };

  return (
    <div className="comp_container">
      <h2 className="comp_h2">Compétences</h2>
      <div className='comp_comp'>
        <CButton
          className={`btnn ${modeNuit ? 'mode-nuit' : ''}`}
          ref={conceptionButtonRef}
          onClick={handleManualClick}
          color=''
          variant="outline"
          shape="rounded-pill">
          Conception
        </CButton>
        <CButton
          className={`btnn ${modeNuit ? 'mode-nuit' : ''}`}
          ref={methodologieButtonRef}
          onClick={handleManualClick}
          color=''
          variant="outline"
          shape="rounded-pill">
          Méthodologie
        </CButton>
        <CButton
          className={`btnn ${modeNuit ? 'mode-nuit' : ''}`}
          ref={frontendButtonRef}
          onClick={handleManualClick}
          color=''
          variant="outline"
          shape="rounded-pill">
          Front-End
        </CButton>
        <CButton
          className={`btnn ${modeNuit ? 'mode-nuit' : ''}`}
          ref={backendButtonRef}
          onClick={handleManualClick}
          color=''
          variant="outline"
          shape="rounded-pill">
          Back-End
        </CButton>
      </div>
      <div className='comp_item'>
        {values.map((value, index) => (
          <CProgress key={index} className={`comp_progress ${modeNuit ? 'mode-nuit' : ''}`} color={getColor(index)} value={value}>
            <CProgressBar className="text-dark">{competenceNames[index]}</CProgressBar>
          </CProgress>
        ))}
      </div>
      <img
        src={Comp_pic}
        alt="pic_comp !"
        style={{
          position: 'absolute',
          top: '60%',
          right: '28%',
          transform: 'translateY(-60%)',
          width: '25%',
          height: 'auto',
        }}
      />
    </div>
  );
};

const getColor = (index) => {
  switch (index) {
    case 0:
      return 'success';
    case 1:
      return 'info';
    case 2:
      return 'warning';
    case 3:
      return 'danger';
    default:
      return 'primary';
  }
}

export default Competences;
