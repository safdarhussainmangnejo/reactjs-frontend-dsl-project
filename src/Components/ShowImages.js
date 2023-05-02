import * as React from 'react';
import banner1 from '../images/banner-1.png';
import banner2 from '../images/banner-2.png';

const ShowImages = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#174665', paddingTop: '30px', paddingBottom: '30px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="position-relative">
              <img src={banner1} alt="banner1" className="img-fluid" />
              <button
                className="btn btn-primary btn-lg position-absolute"
                style={{
                  bottom: 0,
                  right: 0,
                  height: '50px',
                  width: '225px',
                  backgroundColor: '#3080AC',
                  color: '#FFFFFF',
                }}
              >
                Start Free Trial
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="position-relative">
              <img src={banner2} alt="banner2" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowImages;
