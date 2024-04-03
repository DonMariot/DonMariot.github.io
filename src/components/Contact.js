import React from 'react';
import '../css/Contact.css';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/linkedin'
import 'react-social-icons/email'
import 'react-social-icons/whatsapp'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'

const Contact = () => {
    return (
        <div className="cont_container">
            <div className="div_text">
                <h2 className="cont_h2">Contact</h2>
                <p className="cont_text">
                N'hésitez pas à me contacter pour discuter de vos projets, que ce soit 
                pour une collaboration créative, des conseils d'expertise ou simplement dire bonjour
                ou échanger des idées.
                <br/>
                Explorez les différentes options disponibles parmi ces icônes pour me contacter.
                </p>
                <p className="cont_copie">
                    Handcrafted by Don Mariot R. © 2024
                </p>
            </div>
            <div className="cont_item">
                <SocialIcon 
                    href='https://www.linkedin.com/in/don-mariot-rakotozandry-198474210' 
                    url="www.linkedin.com" />
                <SocialIcon style={{ marginLeft:'3%' }}
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=razandri17@gmail.com' 
                    url="www.email.com" />
                <SocialIcon style={{ marginLeft:'3%' }}
                    href='https://wa.me/261349706843' 
                    url="www.whatsapp.com" />
                <SocialIcon style={{ marginLeft:'3%' }}
                    href='https://web.facebook.com/domariot/' 
                    url="www.facebook.com" /> 
                <SocialIcon style={{ marginLeft:'3%' }}
                    href='https://www.instagram.com/' 
                    url="www.instagram.com"/> 
            </div>
        </div>
    );
};
export default Contact;
