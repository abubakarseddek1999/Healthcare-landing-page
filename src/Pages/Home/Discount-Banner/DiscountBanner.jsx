import React from 'react';
import banner from "../../../assets/Images/Rectangle 32.png"
import logo from "../../../assets/Images//logo light.png"
const DiscountBanner = () => {
    return (
        <div className='p-2 max-w-[1400px] mx-auto my-24'>
            <div className=" max-w-[1400px] mx-auto relative bg-blue-900 text-white rounded-lg overflow-hidden shadow-lg p-10 flex items-center justify-between "
                style={{
                    height: '400px',
                    backgroundRepeat:"no-repeat",
                    backgroundImage: `linear-gradient(to right, rgba(2, 0, 67, 1) , rgba(2, 0, 67, 0.3) ), url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundSize: '100% 400px',
                }}
            >
                <div>
                    <h1 className="text-4xl font-bold ">Get Your <br /> First Appointment <br /> at 50% Off!</h1>
                    <div className="mt-5">
                        <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full mr-3 inline-flex items-center hover:bg-yellow-600">
                            Appointment <span className="ml-2">→</span>
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-full inline-flex items-center hover:bg-white hover:text-black">
                            Learn More <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
                <div className="absolute top-5 right-5">
                    <img className='w-[125px] h-[35px]' src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;