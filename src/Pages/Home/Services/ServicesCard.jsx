// src/components/ServiceCard.jsx
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const ServiceCard = ({ image, title, description, subDescription }) => {
    console.log(subDescription, title);
    return (
        <div className="relative group w-full  overflow-hidden rounded-lg shadow-lg">
            {/* <div className='h-full w-full'>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
            </div> */}

            <div className="relative  w-full  rounded-lg shadow-lg">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[350px] object-cover"
                />

                <div className="absolute inset-0 m-5  top-32 bottom-2 md:right-24 lg:right-36 bg-[#020043] opacity-75 text-white rounded-2xl ">
                    <div className='flex w-7/8 p-2 '>
                        <div>
                            <p className='text-md lg:text-xl font-bold mt-5 mb-5'>{title}</p>
                            <p>{subDescription}</p>
                        </div>
                        <div className='w-1/8 flex justify-end'>
                            <FiArrowUpRight className='text-3xl text-white font-bold bg-orange-500 rounded-full' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-[#FFFFF5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between text-black text-start p-4">
                <div>
                    <div className="p-1 mb-5 bg-[#FBFBFB] text-center border w-24 rounded-xl border-indigo-400">Service</div>
                </div>
                <div>
                    <h3 className="text-xl text-left font-bold mb-2">{title}</h3>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div className='rounded-full'>
                    <div className="text-black bg-[#FFC637] btn rounded-full text-xl font-medium border-black-600">Appointment<FiArrowUpRight /></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
