import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Shop from './Shop';
import './Main.css';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))

            .catch(err => setProduct(err))
    }, []);

    // create a new product array and set , 
    const handleProduct = (product) => {
        const newCart = [...cart , product];
        setCart(newCart)
    };
    return (
        <div className="main">
            <Shop product= {product} handleProduct={handleProduct}></Shop>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Main;