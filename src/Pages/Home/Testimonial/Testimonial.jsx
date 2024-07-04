/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Testimonial = ({ item }) => {


  
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

        return (
            <div className="star-rating flex justify-start items-center">
                {Array(fullStars).fill(<FaStar className="star" />)}
                {halfStars && <FaStarHalfAlt className="star" />}
                {Array(emptyStars).fill(<FaRegStar className="star" />)}
            </div>
        );
    };
    return (
        <div className="flex flex-col justify-between p-5 h-[400px] m-2 bg-[#FFFFF5] ">

            <div className="mb-2">
                <p className="text-2xl font-bold mb-2">{item?.title}</p>

            </div>

            <div>
                <p>{item?.feedback}</p>
            </div>

            <div className="flex justify-start gap-2">
                <div className="w-14 h-14">
                    <img className="w-14 h-8" src={item.image} alt="" />

                </div>
                <div>
                    <p className='text-left'>{item?.name} , {item?.Profession}</p>
                    {/* <p>sdffd</p> */}
                    <div className="star-rating  text-orange-400">
                        {renderStars(item?.star)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;