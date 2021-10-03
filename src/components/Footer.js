import React from 'react';
import { FaGithub } from 'react-icons/fa';
import "./styles/Footer.css"

export default function Footer() {
    return (
        <div>
            <footer className="footer is-primary">
        <div className="column has-text-right">
         
            <a className="icon" href="#Github"><i className="fa fa-github fa-lg"></i><FaGithub/></a>
        </div>
      </footer>
        </div>
    
    )
}