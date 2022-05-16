import React from 'react';
import './_products.scss';
import products_clothes from "../data/DataProducts";


function Products() {
    const listItems = products_clothes.map((item) =>
        <div className="hoodie" key={item.id}>
            <div className="hoodie__img">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="hoodie__name">
                <h2>{item.name}</h2>
            </div>
            <div className="hoodie__price">
                <p>{item.price}</p>
            </div>
            <button className='hoodie__btn' >Add to cart</button>
        </div>
    );
    return (
        <div className="products">
            {listItems}
        </div>
    )
}

export default Products;