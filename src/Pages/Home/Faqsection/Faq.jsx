import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {
    // Static data for FAQ
    const faqData = [
        {
            question: "What are your office hours?",
            answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
        },
        {
            question: "How can I schedule an appointment?",
            answer: "You can schedule an appointment by calling our office directly or by using our online booking system available on our website. Please provide your contact information and preferred appointment time."
        },
        {
            question: "Do you accept insurance?",
            answer: "Yes, we accept most major insurance plans. Please contact our office to verify if your insurance is accepted and to get more details about the coverage."
        },
        {
            question: "What should I bring to my appointment?",
            answer: "Please bring a valid ID, your insurance card, any relevant medical records, and a list of current medications. If you have any specific forms that need to be filled out, please bring those as well."
        },
        {
            question: "Do you offer telemedicine appointments?",
            answer: "Yes, we offer telemedicine appointments for certain types of consultations. Please contact our office to find out if your appointment can be conducted via telemedicine and to schedule a time."
        }
    ];
    
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div id="timeline" className="my-16 p-5 max-w-[1400px] mx-auto">
            <div className="p-1 text-center border w-24 rounded-xl border-indigo-400">FAQ</div>
            <p className='text-xl md:text-4xl font-bold mb-10'>Frequently Asked Questions</p>

            <div>
                <div className="grid gap-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-white rounded-md overflow-hidden shadow-md">
                            <div
                                className={`p-6 cursor-pointer flex justify-between items-center bg-[#FFFFF5] ${activeIndex === index ? 'bg-clip-border p-8 shadow-md' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg font-semibold ">{item.question}</span>
                                <span className="text-xl">{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                            </div>
                            {activeIndex === index && (
                                <div className="p-6 bg-fifthColor border-b-2">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
