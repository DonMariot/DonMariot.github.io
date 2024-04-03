import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Taskbar from './components/TaskBar';
import Home from './components/Home';
import Formations from './components/Formations';
import Competences from './components/Competences';
import Realisations from './components/Realisations';
import Apropos from './components/Apropos';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  const [modeNuit, setModeNuit] = useState(true);
  const toggleMode = () => {
    setModeNuit(!modeNuit);
  }

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const accueilRef = useRef(null);
  const formationsRef = useRef(null);
  const competencesRef = useRef(null);
  const realisationsRef = useRef(null);
  const aproposRef = useRef(null);
  const contactsRef = useRef(null);

   // Fonction pour gérer le clic sur un élément du menu
   const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // Faire défiler la page jusqu'à l'élément correspondant à menuItem
    switch (menuItem) {
      case "Accueil":
        accueilRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case "Formations":
        formationsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case "Compétences":
        competencesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case "Réalisations":
        realisationsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case "A propos":
        aproposRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case "Contacts":
        contactsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    
  };

  return (
    <div className={`container-1 scrollable-content`} ref={ref}>
      <Taskbar toggleMode={toggleMode} modeNuit={modeNuit} handleMenuItemClick={handleMenuItemClick}/>
      <motion.progressbar
        className={`progress_page ${modeNuit ? 'mode-nuit' : ''}`}
        style={{ scaleX }}
      />
      <div ref={accueilRef} className={`container-2 ${modeNuit ? 'mode-nuit' : ''}`}>
        <Home handleMenuItemClick={handleMenuItemClick}/>
      </div>
      <div ref={formationsRef} className={`container-2 ${modeNuit ? 'mode-nuit' : ''}`}>
        <Formations/>
      </div>
      <div ref={competencesRef} className={`container-2 ${modeNuit ? 'mode-nuit' : ''}`}>
        <Competences modeNuit={!modeNuit}/>
      </div>
      <div ref={realisationsRef} className={`container-2 ${modeNuit ? 'mode-nuit' : ''}`}>
        <Realisations/>
      </div>
      <div ref={aproposRef} className={`container-2 ${modeNuit ? 'mode-nuit' : ''}`}>
        <Apropos/>
      </div>
      <div ref={contactsRef} className={`container-2 ${modeNuit ? 'mode-nuit' : ''}`}>
        <Contact/>
      </div>
    </div>
)};

export default App;
