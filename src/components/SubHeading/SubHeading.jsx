import React from 'react';
import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div className='sub-heading'>
    <p className='p-cormorant'>{title}</p>
    <img src={images.spoon} alt='spoon' />
  </div>
);

export default SubHeading;
