import React from "react";
import video from '../../../assets/Images/video.png'
import pie from '../../../assets/Images/pie.png'
import coin from '../../../assets/Images/coin.png'
import certificate from '../../../assets/Images/cirtificate.png'
const Statistics = () => {
    return (
        < div className="max-w-[1400px] mx-auto p-4" >
            <div>
                <p className="block md:hidden text-3xl font-bold mb-10">Comprehensive Care  for Every Patient</p>
            </div>

            <div className="">

                <div className="flex flex-col md:flex-row justify-between gap-4">

                    <div className="md:w-20% flex flex-col gap-5 bg-white p-6 rounded-lg shadow-md ">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-4xl font-bold text-blue-500">90%</div>
                            <div className="mt-2 text-gray-600">Patient satisfaction rate, reflecting our commitment.</div>
                        </div>

                        <div className="flex justify-center items-center">
                            <img className="size-20" src={pie} alt="" />
                        </div>
                    </div>

                    <div className=" w-60% ">
                        <div>
                            <p className="md:block hidden text-5xl font-bold mb-10">Comprehensive Care <br /> for Every Patient</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="bg-white p-6 rounded-lg shadow-md ">
                                <div className="text-4xl font-bold text-yellow-500">500+</div>
                                <div className="mt-2 text-gray-600">Board-certified doctors</div>

                                <div className="flex justify-center items-center">
                                    <img className="size-20" src={certificate} alt="" />
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md  ">
                                <div className="text-4xl font-bold text-yellow-500">4.8</div>
                                <div className="mt-2 text-gray-600">Over 20,000 Patient</div>

                                {/* avatar */}
                                <div>
                                    <div class="avatar-group -space-x-6 rtl:space-x-reverse">
                                        <div class="avatar">
                                            <div class="w-12">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div class="avatar">
                                            <div class="w-12">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div class="avatar">
                                            <div class="w-12">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div class="avatar">
                                            <div class="w-12">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">

                                <div className="text-4xl font-bold text-yellow-500">$5000</div>

                                <p className="mt-2 text-gray-600">Money spent for poor patient</p>

                                <div className="flex justify-center items-center">
                                    <img className="size-20" src={coin} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-20% flex flex-col gap-5 bg-white p-6 rounded-lg shadow-md  ">

                        <div className="flex flex-col justify-center items-center mb-2">
                            <div className="text-4xl font-bold text-blue-500">50+</div>
                            <div className="mt-2 text-gray-600 ">Free lesson video for patient</div>
                        </div>

                        <div className="flex justify-center items-center">
                            <img className="size-20" src={video} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Statistics;
