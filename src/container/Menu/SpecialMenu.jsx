import React from 'react';
import {SubHeading, MenuItem} from '../../components'
import {images,data} from '../../constants'
import './SpecialMenu.css';


const SpecialMenu = () => (
  <div className='menu flex-center section-padding' id='menu'>
    <div className='menu-title'>
      <SubHeading title="Menu that fits you palatte"/>
      <h1 className='headtext-cormorant'>Today's Special</h1>
    </div>
    <div className='menu-menu'>

      <div className='menu-wine flex-center'>
        <p className='menu-heading'>Wine & Beer</p>
        <div className='menu-items'>
            {data.wines.map((wine,index)=>(
             <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
        </div>
      </div>

      <div className='menu-img'>
        <img src={images.menu} alt='menu-img'/>
      </div>

      <div className='menu-cocktails flex-center'>
        <p className='menu-heading'>Cocktails</p>
        <div className='menu-items'>
            {data.cocktails.map((cocktail,index)=>(
               <MenuItem key={cocktail.title+index} title={cocktail.title} price ={cocktail.price} tags={cocktail.tags} />
            ))}
        </div>
      </div>

    </div>
         <div style={{marginTop:'15px'}}>
            <button className='custom-button'>View Mores</button>
          </div>
  </div>
);

export default SpecialMenu;
