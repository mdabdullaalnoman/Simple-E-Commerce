import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';
import Rating from 'react-rating';

const Products = (props) => {
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, price, star, stock, img } = props.product;

    return (
        <div className="products">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-content">
                <h2>{name}</h2>
                <h3>{price}</h3>
                <h3>{stock}</h3>
                <h3>{star}</h3>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                /> <br />
                <button onClick={() => { props.handleProduct(props.product) }} className="btn-hover color-1">
                    {shoppingCart}
                    <span style={{ marginLeft: '10px' }}>Add To Card</span>
                </button>
            </div>
        </div>
    );
};

export default Products;