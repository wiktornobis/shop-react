import React from "react";
import './_cart.scss';
import CartEmpty from "./CartEmpty";

const Cart = ({cartItems}) =>{

    return (
        <div>
            <div>
            {cartItems.length === 0 && (
                <CartEmpty />
            )}
            </div>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-items-list">

                        <img
                            className='cart-items-image'
                            src={item.img}
                            alt={item.name}
                        />
                        <div className="cart-items-name">{item.name}</div>
                        <div className="cart-items-price">{item.price}</div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;