import React from 'react';
import { aboutData } from '../data/About';


const About = () => {
  const { name, description1, description2, description3, image } = aboutData;
  return (
    <div className='about-container'>
      <div className='image-about'>
        <img src={image} alt='valmir' />
      </div>
      <div className='article-about'>
        <article>
          <h3>{name}</h3>
          <br />
          <p>{description1}</p>
          <br />
          <p>{description2}</p>
          <br />
          <p>{description3}</p>
        </article>
        
      </div>
    </div>
  )
}

export default About