import React from 'react';
import './_cartEmpty.scss';
import { useNavigate } from 'react-router-dom';

function CartEmpty() {
    let navigate = useNavigate();
    return (
        <div className='basket'>
            <h2 className='basket__header'>CART</h2>
            <div className="basket__text">
                <p>Your shopping cart is empty.</p>
                <p>Add goods to it to start placing your order.</p>
            </div>
            <button
                className="basket__button"
                onClick={() => navigate('/products')}
            >START SHOPPING</button>
        </div>
    );
}

export default CartEmpty;