import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [goods, setGoods] = useState([]);
    useEffect(()=>{
        fetch('data.JSON')
        .then(res => res.json())
        .then(data => setGoods(data))
    }, [])
    return (
        <div className="container">
        <div className="row mb-5">
            <h1 className='p-2'>All Products</h1>
            {
               goods.map(good =><Explore
                good={good}
               ></Explore>) 
            }
        </div>
        </div>
    );
};

export default Explores;