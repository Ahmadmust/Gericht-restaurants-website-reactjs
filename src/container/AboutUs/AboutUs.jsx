import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='aboutus app-bg flex-center section-padding' id='about'>
    <div className='aboutus-overlay flex-center'>
      <img src={images.G} alt='g letter' />
    </div>
    <div className='aboutus-content flex-center'>

      <div className='aboutus-content-about'>
        <h1 className='headtext-cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon' className='spoon-img' />
        <p className='p-opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom-button'>Know More</button>
      </div>

      <div className='aboutus-content-knife flex-center'>
        <img src={images.knife} alt='knife' />
      </div>

      <div className='aboutus-content-history'>
        <h1 className='headtext-cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon' className='spoon-img' />
        <p className='p-opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom-button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
