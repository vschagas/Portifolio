import React from 'react'
import { aboutData } from '../data/About'

const About = () => {
  const { name, description1 } = aboutData;
  return (
    <div className='about-container'>
      <div className='image-about'>image</div>
      <div className='article-about'>
        <article>
          <h3>{name}</h3>
          <br />
          <p>{description1}</p>
        </article>
        
      </div>
    </div>
  )
}

export default About