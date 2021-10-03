import React, { useState } from 'react';
// import Header from './Header'
import Footer from './Footer';
import Navbar from './Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles/Portfolio.css'
import "./styles/Footer.css";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="page-container">
      <header>
  
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
     
      {renderPage()}
      
      <Footer/>
    </div>
  );
}