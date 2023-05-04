import * as React from 'react';
import dslogo from '../images/ds-logo.png'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ProductList from './ProductList';

const Navbar = () => {

    return(
      <nav class="navbar navbar-expand-lg bg-light" style={{top:'-10px'}}>
        <div class="container-fluid" style={{backgroundColor:'#3080AC',  padding:'15px', marginBottom:'-17px', marginTop:'-5px'}}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <img src={dslogo} width='60px' style={{position:'absolute', float:'left', top:'25px', paddingLeft:'10px'}}/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span class="navbar-toggler-icon"></span> */}
            <span><HighlightOffIcon sx={{fontSize:'50px'}}/></span>
            
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{display:'grid', justifyContent:'right', fontSize:'28px' }}>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/products" style={{color:'white', paddingRight:'80px'}} >COMPANION AI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{color:'white', paddingRight:'80px'}} href="#">TEXT AI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{color:'white', paddingRight:'80px'}} href="#">IMAGE AI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{color:'white', paddingRight:'80px'}} href="#">VIDEOS AI</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" style={{color:'white', paddingRight:'80px'}} href="#">ACCOUNT</a>
              </li>
              <li class="nav-item">
                <button className='btn btn-secondary btn-lg'>LOGIN</button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    )

}
export default Navbar;