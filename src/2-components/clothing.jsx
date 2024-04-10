import style from './clothing.module.css'
import white from './shirts-images/ClassicWhite1.jpg'
import graphic from './shirts-images/GraphicShirt.jpg'
import polo from './shirts-images/polo.jpg'
import flannel from './shirts-images/PlaidFlannel.jpg'
import strip from './shirts-images/StripedShirt.jpg'
import React, { useState } from 'react'
import Cart from '../components/cart/cart'
import { useNavigate } from 'react-router-dom'
const Clothing=()=>{
    const [cart,setCart]=useState([]);
    const handleOnClick=(productData)=>{
        navigate('/cart');
        setCart([...cart,productData]);
    }
    const navigate=useNavigate();
    console.log(cart);
    const shirtData = [
        {
            "name": "Classic White Button-Up Shirt",
            "price": 49.99,
            "free_delivery":"Free delivery",
            "image_url": white
        },
        {
            "name": "Plaid Flannel Shirt",
            "price": 39.99,
            "free_delivery": "Free delivery",
            "image_url": flannel
        },
        {
            "name": "Stripped Shirt",
            "price": 59.99,
            "free_delivery": "Free delivery",
            "image_url": strip
        },
        {
            "name": "Graphic T-Shirt",
            "price": 29.99,
            "free_delivery": "Free delivery",
            "image_url": graphic
        },
        {
            "name": "Striped Polo Shirt",
            "price": 34.99,
            "free_delivery": "Free delivery",
            "image_url": polo
        }
    ];
    return(
        <>
        <div className={style.offerDiv}></div>
                <p><h3><center>Elevate Your Style, One Shirt at a Time</center></h3></p>
    <div className={style.shirtMainDiv}>
    {shirtData.map((data, index) => (
                 <div className={style.shirtMainDiv}>
                  <div className={style.shirtCard}>
                  <img src={data.image_url} className={style.shirtImage} alt={data.name} />
                    <p>{data.name}</p>
                    <p>{data.price}</p>
                    <p>{data.free_delivery}</p>
                    <button type='button' onClick={()=>handleOnClick(data)}>Add to cart</button>
                    </div>
              </div>
            ))}      
    </div>
    {/* <Cart data={cart}/> */}
        </>
    )
}
export default Clothing;
// export {cart}; // Exporting cart state variable
