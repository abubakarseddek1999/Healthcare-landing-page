// import moment from "moment";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import logo from "../../assets/Images/logo light.png"

const Footer = () => {
    return (
        <div className="bg-[#020043] ">
            <div className=" flex flex-col md:flex-row justify-between max-w-[1400px] mx-auto p-5 text-base-content ">
                <div className="text-white flex flex-col">
                    {/* logo */}
                    <img className=" w-[124px] h-[30px] mb-6" src={logo} alt="" />

                    <div className="flex flex-col gap-5">
                        <div>
                            <p>123 Main Street Anytown, USA</p>
                            <p>Postal Code: 12345</p>
                        </div>
                        <div>
                            <p>Support: support@oyolloo.com</p>
                            <p>(Available : 10:00am to 07:00pm)</p>
                        </div>
                    </div>
                </div>
                <div className="text-white flex gap-3  flex-col">

                    <a> Home</a>
                    <a>About Us</a>
                    <a>Success Page</a>
                    <a>Terms And Condition </a>
                </div>
                <div className="text-white flex gap-3 flex-col">

                    <a>Service</a>
                    <a>Scheduling </a>
                    <a>Contact Us </a>
                    <a>Patient Portal  </a>
                </div>

                <nav className="text-white ">
                    <header className="font-bold mb-3">Follow Us</header>
                    <div className="flex gap-4">

                        <FaInstagramSquare className="text-2xl" />

                        <IoLogoLinkedin className="text-2xl" />


                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>


                    </div>

                    <p className="mt-10">@Docplus 2024</p>
                </nav>
            </div>




        </div>
    );
};

export default Footer;