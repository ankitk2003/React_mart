import React from 'react';
import style from './card.module.css';
import electronics from './card-images/card-electronic.jpg';
import clothing from './card-images/card-clothing.jpg';
import grocery from './card-images/card-grocery.jpg';
import shoes from './card-images/card-shoes.jpg';
import decor from './card-images/card-homeDecor.jpg';
import { Route, Link, Routes } from 'react-router-dom';
import Electronics from '../../../2-components/electronics';

const Cards = () => {
  const cardData = [
    {
      "category": "Electronics",
      "img-url": electronics
    },
    {
      "category": "Clothing",
      "img-url": clothing
    },
    {
      "category": "Grocery",
      "img-url": grocery
    },
    {
      "category": "Shoes",
      "img-url": shoes
    },
    {
      "category": "Home-Decor",
      "img-url": decor
    }
  ];

  return (
    <>
      <div className={style.para}><p style={{ textAlign: 'center' }}>Explore endless options</p></div>
      <div className={style.mainDiv}>
        {cardData.map((data, index) => (
          <div key={index} className={style.card}>
            <center>
              <img src={data['img-url']} alt={data.category} className={style.cardImage}/>
              <p><Link to={`/${data.category.toLowerCase()}`} style={{ textDecoration: 'none' }}>{data.category}</Link></p>
            </center>
          </div>
        ))}
      </div>
    
      <Routes>
        {/* <Route path='/electronics' element={<Electronics/>}/> */}
        {/* Add more routes for other categories if needed */}
      </Routes>
      
    </>
  );
}

export default Cards;