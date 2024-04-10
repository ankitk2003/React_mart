import google from './phone-images/google-pixel.jpg'
import iphone from './phone-images/iphone-14.jpg'
import mi from './phone-images/mi-12.jpg'
import oneplus from './phone-images/oneplus.jpg'
import samsung from './phone-images/samsung-s22.jpg'
import style from './electronics.module.css'

import acer from './laptop-images/acer.jpg'
import dell from './laptop-images/dell.jpg'
import macbook from './laptop-images/macbook.jpg'
import realme from './laptop-images/realme.jpg'
import victus from './laptop-images/victus.jpg'

import canon from './camera-images/canon.jpg'
import fujifilm from'./camera-images/fujifilm.jpeg'
import nikon850 from './camera-images/nikon850.jpg'
import nikon750 from './camera-images/nikon7500.jpg'
import sony from'./camera-images/sony.jpg'


import { Routes } from 'react-router-dom'
import Clothing from './clothing'
export const phoneData=
[
    {
      "name": "Samsung Galaxy S22 Ultra",
      "price": 1299.99,
      "free_delivery": "Free delivery",
      "image-url":samsung
    },
    {
      "name": "iPhone 14 Pro Max",
      "price": 1399.00,
      "free_delivery": "Free delivery",
      "image-url":iphone
    },
    {
      "name": "Google Pixel 7 Pro",
      "price": 899.99,
      "free_delivery": "Free delivery",
      "image-url":google

    },
    {
      "name": "OnePlus 10 Pro",
      "price": 999.00,
      "free_delivery": "Free delivery",
      "image-url":oneplus

    },
    {
      "name": "Xiaomi Mi 12",
      "price": 799.99,
      "free_delivery": "Free delivery",
      "image-url":mi

    }
]
// laptop data
export const laptopData = [
  {
      "name": "Dell XPS 15",
      "price": 1599.99,
      "free_delivery": "Free delivery",
      "image-url": dell
  },
  {
      "name": "MacBook Pro 16-inch",
      "price": 2399.00,
      "free_delivery": "Free delivery",
      "image-url": macbook
  },
  {
      "name": "HP Victus x360",
      "price": 1299.99,
      "free_delivery": "Free delivery",
      "image-url": victus
  },
  {
      "name": "Realme book ",
      "price": 1499.00,
      "free_delivery": "Free delivery",
      "image-url": realme
  },
  {
      "name": "Acer aspire 7",
      "price": 1299.99,
      "free_delivery": "Free delivery",
      "image-url": acer
  }
];

// camera data
export const cameraData = [
{
    "name": "Canon EOS 5D Mark IV",
    "price": 2499.99,
    "free_delivery": "Free delivery",
    "image-url": canon
},
{
    "name": "Nikon D850",
    "price": 2799.00,
    "free_delivery": "Free delivery",
    "image-url": nikon850
},
{
    "name": "Sony Alpha A7 III",
    "price": 1999.99,
    "free_delivery": "Free delivery",
    "image-url": sony
},
{
    "name": "Fujifilm X-T4",
    "price": 1799.00,
    "free_delivery": "Free delivery",
    "image-url": fujifilm
},
{
    "name": "Nikon D7500",
    "price": 1299.99,
    "free_delivery": "Free delivery",
    "image-url": nikon750
}
];
const Electronics=()=>{
  //phone data
   


    return(
        <>
        <div className={style.parentDiv}>
        {/* for smartphones */}
        <p><h1><center>Our top selling Smart phones:</center></h1></p>
    <div className={style.phoneMainDiv}>
    {phoneData.map((data, index) => (
                 <div className={style.phoneMainDiv}>
                  <div className={style.phoneCard}>
                    <img src={data['image-url']} className={style.phoneImage}></img>
                    <p>{data.name}</p>
                    <p>{data.price}</p>
                    <p>{data.free_delivery}</p>
                    <button type='submit'>Add to cart</button>

                    </div>
              </div>
            ))}      
    </div>

{/* for laptops */}
    <p><center><h1>high-End Laptops:</h1></center></p>
    <div className={style.laptopMainDiv}>
    {laptopData.map((data, index) => (
                 <div className={style.phoneMainDiv}>
                  <div className={style.laptopCard}>
                    <img src={data['image-url']} className={style.laptopImage}></img>
                    <p>{data.name}</p>
                    <p>{data.price}</p>
                    <p>{data.free_delivery}</p>
                    <button type='submit'>Add to cart</button> 
                    </div>
              </div>
            ))}
          
    </div>

{/* for cameras */}
<p><center><h1>Digital cameras</h1></center></p>
    <div className={style.laptopMainDiv}>
    {cameraData.map((data, index) => (
                 <div className={style.phoneMainDiv}>
                  <div className={style.laptopCard}>
                    <img src={data['image-url']} className={style.laptopImage}></img>
                    <p>{data.name}</p>
                    <p>{data.price}</p>
                    <p>{data.free_delivery}</p>
                    <button type='submit'>Add to cart</button> 
                    </div>
              </div>
            ))}
          
    </div>
{/* <Clothing/> */}

    </div>
        </>
    )
}
export default Electronics;