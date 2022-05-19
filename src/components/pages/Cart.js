import React from "react";
import './_cart.scss';
import CartEmpty from "./CartEmpty";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, handleRemoveSingleProduct}) =>{

    const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0);
    let navigate = useNavigate();

    return (
        <div>
            <div>
            {cartItems.length === 0 && (
                <CartEmpty />
            )}
            </div>
            <div className='cart-items'>
                <div className="clear-cart">
                    {cartItems.length >=1 &&(
                        <button
                            className="cart-items-btn"
                            onClick={handleCartClearance}
                        >
                            Delete all
                        </button>
                    )}
                    {cartItems.length >=1 &&(
                    <FontAwesomeIcon
                        className='cart-items-arrow-left'
                        onClick={() => navigate('/products')}
                        icon={faArrowLeft}
                        />
                    )}
                </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-items-list">

                        <img
                            className='cart-items-image'
                            src={item.img}
                            alt={item.name}
                        />
                        <div className="cart-items-name">{item.name}</div>
                        <div className="cart-items-price">
                            {item.qty} x ${item.price}
                        </div>

                        <div className="cart-items-function">
                            <button
                                className="cart-items-add"
                                onClick={() => handleAddProduct(item)}

                            >
                                +
                            </button>
                            <button
                                className="cart-items-remove"
                                onClick={() => handleRemoveProduct(item)}
                            >
                                -
                            </button>

                        </div>
                        <div>
                            <FontAwesomeIcon
                                className='cart-items-trash-can'
                                onClick={() => handleRemoveSingleProduct(item)}
                                icon={faTrashCan} />
                        </div>

                    </div>
                ))}
            </div>
            <div className="cart-items-total">
                {cartItems.length >=1 &&(
                <div className="cart-items-total-text">
                Total price:
                <div className="cart-items-total-price">
                    ${totalPrice}
                </div>
                </div>
                    )}

            </div>
            <div className="cart-address">
                {cartItems.length >=1 &&(
                    <Link to='./address' className="cart-pay">
                        <button className='cart-address-btn'>NEXT</button>
                    </Link>
                )}
            </div>
        </div>


    );
}

export default Cart;