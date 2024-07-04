import Footer from "../../../Share/Footer/Footer";
import Navbar from "../../../Share/Navbar/Navbar";
import Banner from "../Banner/Banner";
import DiscountBanner from "../Discount-Banner/DiscountBanner";
import Faq from "../Faqsection/Faq";
import HelpSection from "../HelpSection/HelpSection";
import Services from "../Services/Services";
import Statistics from "../Stataics/Statics";
import Testimonials from "../Testimonial/Testimonials";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Statistics></Statistics>
            <HelpSection></HelpSection>
            <Services></Services>
            <Testimonials></Testimonials>
            <Faq></Faq>
            <DiscountBanner></DiscountBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;