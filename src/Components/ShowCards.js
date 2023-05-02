import React from 'react';
import ResponsiveCard from './ResponsiveCard';
import image1 from '../images/image-ai-image.png'

const ShowCards = () => {
  const cardsData = [
    {
      src: '/companionaiimage1@2x.png',
      alt: 'Companion AI Image 1',
      author: 'Author 1',
      url: image1,
    },
    {
      src: '/companionaiimage2@2x.png',
      alt: 'Companion AI Image 2',
      author: 'Author 2',
      url: image1,
    },
    {
      src: '/companionaiimage3@2x.png',
      alt: 'Companion AI Image 3',
      author: 'Author 3',
      url: image1,
    },
    {
      src: '/companionaiimage4@2x.png',
      alt: 'Companion AI Image 4',
      author: 'Author 4',
      url: image1,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => (
          <ResponsiveCard
            key={index}
            src={card.src}
            alt={card.alt}
            author={card.author}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowCards;
