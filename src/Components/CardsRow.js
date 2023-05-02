import React from 'react';
import ResponsiveCard from './ResponsiveCard';

const CardsRow = () => {
  return (
    <div className="container">
      <div className="row">
        <ResponsiveCard
          src="https://via.placeholder.com/150"
          alt="Image 1"
          author="Author 1"
          url="https://example.com"
          parent = {{
            position:'absolute',
            top: '50px',
            left: '484px',
            width: '370px',
            height: '560px',
            fontWeight: '34.16px',
          }}
          child1
          child2
          child3
          text
          credit
          photo
        />
        <ResponsiveCard
          src="https://via.placeholder.com/150"
          alt="Image 2"
          author="Author 2"
          url="https://example.com"
          parent = {{
            position:'absolute',
            top: '60px',
            left: '5004px',
            width: '370px',
            height: '560px',
            fontWeight: '34.16px',
          }}
          child1
          child2
          child3
          text
          credit
          photo
        />
        <ResponsiveCard
          src="https://via.placeholder.com/150"
          alt="Image 3"
          author="Author 3"
          url="https://example.com"
        />
        <ResponsiveCard
          src="https://via.placeholder.com/150"
          alt="Image 4"
          author="Author 4"
          url="https://example.com"
        />
      </div>
    </div>
  );
};

export default CardsRow;
