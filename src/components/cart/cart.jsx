import Account from "../Account/account";
import cart from "../../2-components/clothing.jsx"
const Cart=(props)=>{  
     return (
        <>
        <h1><center>this is cart</center></h1>
        {/* <div>
      <h2>Shopping Cart</h2>
      {props.data.map((item, index) => (
        <div key={index} className="cart-item">
          <img src="itme.image"></img>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
        <Account></Account> */}
        </>
    )
}
export default Cart;