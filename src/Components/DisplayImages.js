import * as React from 'react';
import banner1 from '../images/banner-1.png'
import banner2 from '../images/banner-2.png'

const DisplayImages = () =>{
    return (
        <div className='row' style={{textAlign:'center', marginTop:'-1px', paddingTop: '40px',  backgroundColor:'#174665'}}>
            <div className='col-md-6'>
                <img src={banner1} alt="banner1" width='90%' height= 'auto'/>
                <button className="btn btn-primary btn-lg " style={{position:'relative', bottom:'60px', left:'32%', backgroundColor: '#3080AC', }}>Start Free Trial</button>
            </div>
            <div className='col-md-6'>
                <img src={banner2} alt="banner2"  width='90%'/>
            </div>
        </div>
      );

}
export default DisplayImages;