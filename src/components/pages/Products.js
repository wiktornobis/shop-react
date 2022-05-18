import React from 'react';
import './_products.scss'


const Products = ({ products, handleAddProduct}) => {
    return (
        <div className="products">
            {products.map((products) => (
                <div className='products__card'>
                    <img
                        className='products__img'
                        src={products.img}
                        alt={products.name}
                    />
                    <h3 className='products__card--text'>{products.name}</h3>
                    <p className='products__card--price'>{products.price}</p>
                    <button
                        className="products__btn"
                        onClick={() => handleAddProduct(products)}
                    >Add to cart</button>
                </div>
            ))}
        </div>
    )
}
export default Products;