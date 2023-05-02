import * as React from 'react';
import dslogo from '../images/ds-logo.png';
import styles from './Landing.module.css';

const ResponsiveNavbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarCustom}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className={styles.image13Icon} src={dslogo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${styles.navCollapseRight}`}
          id="navbarSupportedContent"
        >
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navList}`} >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{color:'#ffffff'}}>
                COMPANION AI
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{color:'#ffffff'}}>
                TEXT AI
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{color:'#ffffff'}}>
                IMAGE AI
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{color:'#ffffff'}}>
                VIDEO AI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
