import React, { useEffect, useState } from 'react';
import Products from './Products';
import './Shop.css';

const Shop = (props) => {
   
    // const [product , setProduct] = useState([]);

    // useEffect( () => {
    //     fetch('./products.JSON')
    //     .then(res => res.json())
    //     .then(data => setProduct(data))
 
    //     .catch(err =>setProduct(err))
    // },[]);


    // const handleProduct = (product) =>{
    //     console.log(product);
    // }

    return (
        <div>
           {
               props.product.map(pd => <Products product={pd} key={pd.name} handleProduct= {props.handleProduct}></Products>)
           }
        </div>
    );
};

export default Shop;