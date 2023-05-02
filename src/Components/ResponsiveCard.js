import React from 'react';
import img from '../images/image-ai-image.png'

const ResponsiveCard = ({ src, alt, author, url }) => {
  const cardStyles = {
    borderRadius: '25px',
    backgroundColor: 'white',
    height: '556.99px',
  };

  const headerStyles = {
    borderRadius: '25px 25px 0 0',
    backgroundColor: 'steelblue',
    height: '99.35px',
  };

  const imageStyles = {
   
    height: '335px',
    objectFit: 'cover',
    position: 'absolute',
  top: '113px',
  left: '10px',
  width: '285px',
  height: '285px',
  };

  const titleStyles = {
    fontWeight: 'bold',
    width: '260.9940490722656px',
    position: 'absolute',
    top: '28.73px',
    left: '53.78px',
    display: 'inline-block',
    height: '41.79px',
    color: '#FFFFFF'
  };

  const creditStyles = {
    fontWeight: '500',
    top: '489.38px',
    left: '87.57px',
    fontWeight: 500,
    width: '201px'
  };
  
  
  const footerStyles = {
    borderRadius: '0 0 25px 25px',
    backgroundColor: 'white',
    height: '99px',
  };

  return (
    <div className="col-lg-3 col-md-6 card-container">
      <div className="card" style={cardStyles}>
        <div className="card-header" style={headerStyles}></div>
        <img className="card-img-top" style={imageStyles} alt="" src={img} />
        <div className="card-body">
          <h5 className="card-title" style={titleStyles}>COMPANION AI</h5>
          <p className="card-text" style={creditStyles}>1 CREDIT</p>
        </div>
        <div className="card-footer" style={footerStyles}></div>
      </div>
    </div>
  );
};

export default ResponsiveCard;
