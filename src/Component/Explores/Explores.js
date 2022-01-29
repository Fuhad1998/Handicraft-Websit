import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [goods, setGoods] = useState([]);
    useEffect(()=>{
        fetch('data.JSON')
        .then(res => res.json())
        .then(data => setGoods(data.slice(9, 30)))
    }, [])
    return (
        <div className="container">
        <div className="row">
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