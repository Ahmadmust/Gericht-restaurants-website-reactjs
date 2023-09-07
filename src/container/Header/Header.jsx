import React from 'react';
import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='header app-wrapper section-padding' id='home'>
    <div className='app-wrapper-info'>
      <SubHeading title="Chase the new Flavour" />
      <h1 className='header-h1'>The key to Fine Dining</h1>
      <p className='p-opensans' style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className='custom-button'>Explore Menu</button>
    </div>
      <div className='app-wrapper-img'>
        <img src={images.welcome} alt='headerImg'/>
      </div>
  </div>
);

export default Header;
