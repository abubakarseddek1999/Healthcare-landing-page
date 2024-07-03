import Footer from "../../../Share/Footer/Footer";
import Navbar from "../../../Share/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Faq from "../Faqsection/Faq";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;