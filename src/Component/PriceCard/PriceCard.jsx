/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-200 mt-4 rounded-md p-4'>
            <h2 className='text-center'>
               <span className='text-5xl font-extrabold text-purple-700'> {price.price}</span>
                <span className='text-3xl font-bold'>/month</span>
                </h2>
            <h5 className='text-2xl my-4 font-bold text-center'>{price.name}</h5>
         <p className='font-bold'>Features</p>
         {
            price.features.map(feature => <Feature
            feature={feature}
            ></Feature>
            )
         }
        </div>
    );
};

export default PriceCard;