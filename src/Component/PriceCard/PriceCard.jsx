/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-200 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
               <span className='text-5xl font-extrabold text-purple-700'> {price.price}</span>
                <span className='text-3xl font-bold'>/month</span>
                </h2>
            <h5 className='text-3xl my-4 font-bold text-center'>{price.name}</h5>
         <p className='text-2xl font-bold text-purple-800 underline'>Features</p>
         {
            price.features.map((feature, idx) => <Feature
             key = {idx}
            feature={feature}
            ></Feature>
            )
         }
          <button className='w-full mt-auto hover:bg-green-700 bg-green-500 rounded-md py-2 text-white font-bold'>Buy now</button>
        </div>
    );
};

export default PriceCard;