import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const products = props.cart;

    // let price = 0;

    // sum of added product price
    const totalReducer = (pervious , present) => pervious + present.price;
    const total = products.reduce(totalReducer , 0);

    const shipping = 15;
    const tax = (total + shipping) * .3;
    const grandTotal = total + shipping + tax;

    // for(let i = 0 ; i < products.length; i++){
    //     const elements = products[i];
    //     price = price + elements.price;
    // }

    // for (const initialPrice of products) {
    //     price = Price + initialPrice.price
    // }

    return (
        <div className="cart-container">
            <h1>Total Cart: {products.length}</h1>
            <h2>total: {total.toFixed(2)} </h2>
            <h2>Shipping: {shipping.toFixed(2)} </h2>
            <h2>Tax: {tax.toFixed(2)} </h2>
            <h2>GrandTotal: {grandTotal.toFixed(2)} </h2>
        </div>
    );
};

export default Cart;