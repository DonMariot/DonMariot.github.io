import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faCode } from '@fortawesome/free-solid-svg-icons';
import '../css/TaskBar.css';

const Taskbar = ({ toggleMode, modeNuit, handleMenuItemClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="taskbar">
      <div className='menu_code'>
        <FontAwesomeIcon icon={faCode} size="1x" />
      </div>
      <div className="mode_icon" onClick={toggleMode}>
        <FontAwesomeIcon icon={modeNuit ? faSun : faMoon} size="1x" />
      </div>
      <div className='menu_bars' onMouseEnter={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="1x" />
      </div>
      {menuVisible && (
        <div className={`menu-dropdown-float ${modeNuit ? 'mode-nuit' : ''}`}  onMouseLeave={closeMenu}>
        <div className={`menu-item ${modeNuit ? 'mode-nuit' : ''}`} onClick={() => { handleMenuItemClick("Accueil"); closeMenu(); }}>Accueil</div>
        <div className={`menu-item ${modeNuit ? 'mode-nuit' : ''}`} onClick={() => { handleMenuItemClick("Formations"); closeMenu(); }}>Formations</div>
        <div className={`menu-item ${modeNuit ? 'mode-nuit' : ''}`} onClick={() => { handleMenuItemClick("Compétences"); closeMenu(); }}>Compétences</div>
        <div className={`menu-item ${modeNuit ? 'mode-nuit' : ''}`} onClick={() => { handleMenuItemClick("Réalisations"); closeMenu(); }}>Réalisations</div>
        <div className={`menu-item ${modeNuit ? 'mode-nuit' : ''}`} onClick={() => { handleMenuItemClick("A propos"); closeMenu(); }}>A propos</div>
        <div className={`menu-item ${modeNuit ? 'mode-nuit' : ''}`} onClick={() => { handleMenuItemClick("Contacts"); closeMenu(); }}>Contacts</div>
      </div>
      )}
    </div>
  );
};

export default Taskbar;
