import * as React from 'react';
import dslogo from '../images/ds-logo.png'
import styles from "./Landing.module.css";

const Navbar = () => {

    return(
        

    
    <nav className="navbar navbar-expand-lg" style={{height:120, backgroundColor: '#3080AC'}}>
        <div className="container">
            <a className="navbar-brand" href="#">
            <img className={styles.image13Icon} src={dslogo} alt=""  />
            </a>
        </div>
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{fontSize: '20px', color: '#FFFFFF'}}>COMPANION AI</a>
        </li>
        <li className="nav-item" style={{paddingLeft:'80px'}}>
          <a className="nav-link active" aria-current="page" href="#" style={{fontSize: '20px', color: '#FFFFFF'}}>TEXT AI</a>
        </li>
        <li className="nav-item" style={{paddingLeft:'80px'}}>
          <a className="nav-link active" aria-current="page" href="#" style={{fontSize: '20px', color: '#FFFFFF'}}>IMAGE AI</a>
        </li>
        <li className="nav-item" style={{paddingLeft:'80px'}}>
          <a className="nav-link active" aria-current="page" href="#" style={{fontSize: '20px', color: '#FFFFFF'}}>VIDEO AI</a>
        </li>
        
        
        
      </ul>
      
    </div>
  </div>
</nav>

    )

}
export default Navbar;