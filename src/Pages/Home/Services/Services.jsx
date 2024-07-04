import React from 'react';
// import ServiceCard from './components/ServiceCard';
import advancedTechImage from '../../../assets/Images/Rectangle 27-1.png';
import onlineDoctorImage from '../../../assets/Images/Rectangle 27-2.png';
import consultancyHealthImage from '../../../assets/Images/Rectangle 27.png';
import ServiceCard from './ServicesCard';

const info = [
    {
        image: advancedTechImage,
        title: 'Empowering Health, Enriching Lives',
        description:'We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness',
        subDescription: 'We are committed to providing high-quality, compassionate care to every patient we serve'
    },
    {
        image: onlineDoctorImage,
        title: 'Empowering Health, Enriching Lives',
        description:
            'We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness',
        subDescription: "We are committed to providing high-quality, compassionate care to every patient we serve"
    },
    {
        image: consultancyHealthImage,
        title: 'Empowering Health, Enriching Lives',
        description:
            'We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness',
        subDescription: "We are committed to providing high-quality, compassionate care to every patient we serve"
    },
    {
        image: advancedTechImage,
        title: 'Empowering Health, Enriching Lives',
        description:
            'We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness',
        subDescription: "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
    },
];

const Services = () => {
    return (
        <div className="max-w-[1400px] mx-auto p-4 my-24 bg-[#FFFFF5] ">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {info.map((service, index) => (

                    <ServiceCard
                        key={index}
                        image={service.image}
                        title={service.title}
                        description={service.description}
                        subDescription={service.subDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;