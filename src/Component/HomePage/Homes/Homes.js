import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Home from '../Home/Home';

const Homes = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.JSON')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0, 9)))
    }, [])
    return (
        <div >
            <div>
            
            <Banner></Banner>
            
            </div>
            <div className="container">
            <div className="row">
                {
                   products.map(product =><Home
                    product={product}
                   ></Home>) 
                }
            </div>
            </div>
           
        </div>
    );
};

export default Homes;