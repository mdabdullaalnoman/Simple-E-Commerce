import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Shop from './Shop';
import './Main.css';
import { addToDb, getStoredCart } from '../utilities/fakedb';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [filterProducts , setFilterProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setFilterProducts(data)
            })

            .catch(err => console.log(err))
    }, []);

    // get products from local storage
    useEffect(() => {
        if (product.length) {
            const savedCart = getStoredCart();
            //make new array
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = product.find(product => product.key === key);
                if (addedProduct) {
                    // set object property name of quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    //push product in new array
                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart);
        }
    }, [product]);

    // create a new product array and set , 
    const handleProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        //add to local storage
        addToDb(product.key);
    };

    // search product text
    const handleSearch = (e) => {
        const searchText = e.target.value;
        const matchedProducts = product.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterProducts(matchedProducts);
    }

    return (
        <>
            <div style={ { textAlign: 'center' }}>
                <input
                    style={{ width: '90%', padding: '1rem', borderRadius: '10px' }}
                    type="text"
                    onChange={handleSearch}
                    placeholder="search products .."
                />
            </div>
            <div className="main">
                <Shop product={product} searchProduct={filterProducts} handleProduct={handleProduct}></Shop>
                <Cart cart={cart}></Cart>
            </div>
        </>
    );
};

export default Main;