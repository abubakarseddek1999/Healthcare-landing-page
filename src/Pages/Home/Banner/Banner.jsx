import React from 'react';
import banner from "../../../assets/Images/Rectangle 5.png"
const Banner = () => {
    return (
        <div className='max-w-[1400px] mx-auto pt-20 p-2' >
            <img className='w-full object-cover' src={banner} alt="" />
            
        </div>
    );
};

export default Banner;