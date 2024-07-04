import Footer from "../../../Share/Footer/Footer";
import Navbar from "../../../Share/Navbar/Navbar";
import Banner from "../Banner/Banner";
import DiscountBanner from "../Discount-Banner/DiscountBanner";
import Faq from "../Faqsection/Faq";
import Services from "../Services/Services";
import Testimonials from "../Testimonial/Testimonials";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Testimonials></Testimonials>
            <Faq></Faq>
            <DiscountBanner></DiscountBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;