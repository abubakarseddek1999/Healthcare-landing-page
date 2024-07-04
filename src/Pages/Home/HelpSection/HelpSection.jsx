import React from 'react';
import image from '../../../assets/Images/Rectangle 24.png'
import { FiArrowUpRight } from "react-icons/fi";

const HelpSection = () => {
    return (
        <div className='grid grid-cols-2  gap-10 max-w-[1400px] mx-auto p-4 my-24'>
            <div className='w-4/5'>
                <div className="p-2 text-center border w-24 rounded-xl border-indigo-400 mb-5">Who we are</div>

                <p className='text-2xl md:text-4xl font-bold mb-5'>Empowering Health, <br /> Enriching Lives</p>
                <p className='mb-8 lg:text-xl'>We are committed to providing high-quality,  compassionate care to every patient we serve. <br /> Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>

                <div className="bg-[#FFC637]  text-xl border-4 border-black-600 w-[200px] font-bold rounded-xl flex justify-center items-center p-2">
                    Appointment
                    <FiArrowUpRight />
                </div>

            </div>

            <div>
                <div className='relative'>

                    <img className='w-full ' src={image} alt="" />

                    <div className='absolute bg-[#343268] text-white p-5 lg:p-10   rounded-xl -bottom-8 -left-20 right-56'>

                        <p className='font-bold mb-2 text-xl lg:text-2xl'>Our mission is simple</p>

                        <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HelpSection;