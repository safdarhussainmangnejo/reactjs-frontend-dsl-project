import * as React from 'react';
import banner1 from '../images/banner-1.png';
import banner2 from '../images/banner-2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Responsive.css';

const ResponsiveImages = () => {

  const isMobileScreen = window.innerWidth <= 768;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='row' style={{textAlign:'center', marginTop:'-1px', paddingTop: '40px', backgroundColor:'#174665'}}>
      {isMobileScreen ? (
        <div className='col-md-12'>
          <Slider {...settings}>
            <div>
              <img src={banner1} alt="banner1" className='image'/>
              <button className="btn btn-primary btn-lg" style={{position:'relative', bottom:'75px', left:'28%', backgroundColor: '#3080AC'}}>Start Free Trial</button>
            </div>
            <div style={{width:'80%'}}>
              <img src={banner2} alt="banner2" className='image'  width='80%' height= 'auto' />
            </div>
          </Slider>
        </div>
      ) : (
        <React.Fragment>
          <div className='col-md-6' style={{ padding:'40px',  backgroundColor:'#174665'}}>
            <img src={banner1} alt="banner1" className='image' width='70%' height= 'auto'/>
            <button className="btn btn-primary btn-lg" style={{position:'relative', bottom:'70px', left:'32%', backgroundColor: '#3080AC'}}>Start Free Trial</button>
          </div>
          <div className='col-md-6'>
            <img src={banner2} alt="banner2" className='image' width='70%' height= 'auto'/>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default ResponsiveImages;
