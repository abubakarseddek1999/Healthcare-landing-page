import img1 from '../../../assets/Images/01.png'
import img2 from '../../../assets/Images/02.png'
import img3 from '../../../assets/Images/03.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style.css';

// import required modules
// import { Pagination } from 'swiper/modules';
import { Autoplay, Pagination, } from 'swiper/modules';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            id: 1,
            name: "Customer 1",
            star:5,
            Profession:"IT PRofessional",
            title: " Expertise and Compassion Combined",
            feedback: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
            image: img1// Replace with actual image paths if necessary
        },
        {
            id: 2,
            name: "Customer 2",
            star:4,
            Profession:"Business PRofessional",
            title: " Life-Saving Care, Life-Changing Experience",
            feedback: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
            image: img2
        },
        {
            id: 3,
            name: "Customer 3",
            star:4,
            Profession:" Lawyer",
            title: "A Partner in Health and Wellness",
            feedback: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
            image:img3
        },
        {
            id: 1,
            name: "Customer 1",
            star:5,
            Profession:"IT PRofessional",
            title: " Expertise and Compassion Combined",
            feedback: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
            image: img1// Replace with actual image paths if necessary
        }
        // Add more testimonial objects as needed
    ];
    

    return (
        <div id="testimonials" className="my-16 p-5 max-w-[1400px] mx-auto">

            <div className="p-1 text-center border w-24 rounded-xl border-indigo-400">Testimonial</div>
            <p className='text-xl md:text-4xl font-bold mb-10'>What they say about us</p>

            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    // // when window width is >= 1024px (typical for PC screens)
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },


                }}

                // slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
            // className="mySwiper"
            >
                {testimonialData?.map(item => <SwiperSlide className='rounded-2xl' key={item.id}><Testimonial item={item}></Testimonial> </SwiperSlide>)}


            </Swiper>
        </div>
    );
};

export default Testimonials;