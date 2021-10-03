import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import "./styles/Footer.css"

export default function Footer() {
    return (
        <div>
            <footer className="footer is-primary">
        <div className="column has-text-right">
         
            <a className="icon" href="https://github.com/KaylaMorris11"><i className="fa fa-github fa-lg"></i><FaGithub/></a>
            <a className="icon" href="https://www.linkedin.com/in/kayla-morris-kite/"><i className="fa fa-github fa-lg"></i><FaLinkedin/></a>
        </div>
      </footer>
        </div>
    
    )
}