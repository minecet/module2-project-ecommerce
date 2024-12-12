import React from 'react';
import './Footer.css';
import githubIcon from '../images/github-mark.svg'
function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/minecet/module3-project-ecommerce"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"  
      >
        <div className="github-icon-container">
          <img src={githubIcon} alt="GitHub" className="github-icon" />
        </div>
        View on GitHub      </a>  
    </footer>
  );
};

export default Footer;