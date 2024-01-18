/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices]= useState([]);

    useEffect(()=>{
        fetch('prices.json')
        .then(res=>res.json())
        .then(data =>setPrices(data))
    },[])
    return (
        <div className='mx-12'>
            <h2 className='text-6xl font-bold p-4 text-center bg-purple-200 text-purple-950'>Awesome Prices</h2>
       <div className='grid md:grid-cols-3 gap-4'>
        {
            prices.map(price => <PriceCard 
            key={price.id}
            price = {price}
            ></PriceCard>
                )
        }
       
       </div>
    </div>
    );
};

export default PriceList;