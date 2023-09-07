import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null)
  const scroll = (direction)=>{
    const {current} = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -=300
    }
    else{
      current.scrollLeft +=300
    }
  }
return(
  <div className='gallery flex-center'>
    <div className='gallery-content'>
      <SubHeading title="Instagram" />
      <h1 className='headtext-cormorant'>Photo Gallery</h1>
      <p className='p-opensans' style={{color:'#AAAAAA', marginTop: '2rem'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
      </p>
      <button className='custom-button'>View More</button>
    </div>
    <div className="gallery-images">
        <div className="gallery-images-container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="gallery-images-card flex-center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery-image" />
              <BsInstagram className="gallery-image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery-images-arrows">
          <BsArrowLeftShort className="gallery-arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery-arrow-icon" onClick={() => scroll('right')} />
        </div>
  </div>
  </div>
)
}


export default Gallery;
