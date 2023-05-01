import * as React from 'react';
import banner1 from '../images/banner-1.png'
import banner2 from '../images/banner-2.png'
import styles from "./Landing.module.css";

const DisplayImages = () =>{
    return (
        <div className="container" style={{backgroundColor: '#174665', height: 850, maxWidth: 'none',}}>
          <div className="row">
            <div className='col'>

              <div className="col-sm-6" alt="First image" >
              <img src={banner1} alt="banner1" style={{position: 'absolute', left: 93, top: 164, width: 750}} />
              <button className="btn btn-primary btn-lg" style={{position: 'absolute', bottom: 0, right: 0, height:'50px', width: '225px', backgroundColor:'#3080AC', color:'#FFFFFF', top: '855px', left: '614px'}}>Start Free Trial</button>
              {/* <div className="col-md-6 d-flex align-items-end justify-content-end">
                  <button className="btn btn-primary btn-lg mb-3" style={{position: 'absolute', right: 93, bottom: 164}}>Start Free Trial</button>
                </div> */}
              </div>
            </div>

              <div className='col'>

                <div className="col-sm-6">
                <img src={banner2} alt="banner2" style={{position: 'absolute', width: 750, top: 164}} />
                </div>
              </div>
          </div>
        </div>
      );

}
export default DisplayImages;