import React from 'react';
import './_products.scss';
import image1 from '../image/image1.jpg';
import image2 from '../image/image2.jpg';
import image3 from '../image/image3.JPG';
import image4 from '../image/image4.jpg';
import image5 from '../image/image5.jpg';
import image6 from '../image/image6.jpg';

function Products(props) {
    return (
        <div className="all-products">
            <div className='container'>
                <div className="container__product">
                    <img src={image1} alt="hoodie" className="container__product--img"/>
                    <p className="container__product--text">Hoodie blue</p>
                    <p className="container__product--price">239.00</p>
                    <button className="container__product--btn">Add to Cart</button>
                </div>
                <div className="container__product">
                    <img src={image2} alt="hoodie" className="container__product--img"/>
                    <p className="container__product--text">Hoodie blue</p>
                    <p className="container__product--price">239.00</p>
                    <button className="container__product--btn">Add to Cart</button>
                </div>
                <div className="container__product">
                    <img src={image3} alt="hoodie" className="container__product--img"/>
                    <p className="container__product--text">Hoodie blue</p>
                    <p className="container__product--price">239.00</p>
                    <button className="container__product--btn">Add to Cart</button>
                </div>
            </div>

            <div className='container'>
                <div className="container__product">
                    <img src={image4} alt="hoodie" className="container__product--img"/>
                    <p className="container__product--text">Hoodie blue</p>
                    <p className="container__product--price">239.00</p>
                    <button className="container__product--btn">Add to Cart</button>
                </div>
                <div className="container__product">
                    <img src={image5} alt="hoodie" className="container__product--img"/>
                    <p className="container__product--text">Hoodie blue</p>
                    <p className="container__product--price">239.00</p>
                    <button className="container__product--btn">Add to Cart</button>
                </div>
                <div className="container__product">
                    <img src={image6} alt="hoodie" className="container__product--img"/>
                    <p className="container__product--text">Hoodie blue</p>
                    <p className="container__product--price">239.00</p>
                    <button className="container__product--btn">Add to Cart</button>
                </div>
            </div>
            <div className='container'>
                <div className="container__product">
                    <img src={image1} alt="hoodie" className="container__product--img"/>
                    <p className="container__product--text">Hoodie blue</p>
                    <p className="container__product--price">239.00</p>
                    <button className="container__product--btn">Add to Cart</button>
                </div>
                <div className="container__product">
                    <img src={image3} alt="hoodie" className="container__product--img"/>
                    <p className="container__product--text">Hoodie blue</p>
                    <p className="container__product--price">239.00</p>
                    <button className="container__product--btn">Add to Cart</button>
                </div>
                <div className="container__product">
                    <img src={image2} alt="hoodie" className="container__product--img"/>
                    <p className="container__product--text">Hoodie blue</p>
                    <p className="container__product--price">239.00</p>
                    <button className="container__product--btn">Add to Cart</button>
                </div>
            </div>

        </div>


    );
}

export default Products;