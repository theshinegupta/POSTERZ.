import React from 'react'
import dummyCartImg from '../../assests/naruto.jpeg'
import { AiOutlineClose } from "react-icons/ai";
import './BucketItem.scss'
import { useDispatch } from 'react-redux';
import { addToCart, removefromCart } from '../../redux/cartSlice';

function BucketItem({cart}) {
  const dispatch=useDispatch();
  return (
    <div className='CartItem'>
       <div className="item-img">
        <img src={cart.image} alt="" />
       </div>
       <div className="item-info-wrapper">
       <div className="item-info">
        <h4 className="title">
            {cart.title}
        </h4>
        <p className="price">₹ {cart.price}</p>
        <div className="quantity-selector">
                  <span className="btn decrement" onClick={()=>dispatch(removefromCart(cart))}  >-</span>
                  <span className="quantity">{cart.quantity}</span>
                  <span className="btn increment"  onClick={()=>dispatch(addToCart(cart))} >+</span>
        </div>
        <p className="total-price">SubTotal: ₹ {cart.quantity * cart.price}</p>
        </div>
        <div className="item-remove">
            
            <AiOutlineClose/>
        </div>
       </div>
    </div>
  )
}

export default BucketItem
