import { useNavigate } from "react-router-dom";
import { venue1ImgData } from "../../utils/constantData"
import Partners from "./Partners"
import { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";
import { rightArrow } from "../../utils/constants";


const Event3 = () => {
    const navigate = useNavigate();
    const [, setSelectedButton] = useContext(MyContext);

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    const navigateToGallery = () => {
        navigate('/gallery');
        setSelectedButton(2);
    }
    return (
        <div className="bg-white">
            <div className="relative flex justify-center text-center items-center w-full h-[300px] bg-center bg-cover bg-[url('../images/galllery-image2.jpg')] before:absolute before:z-10 before:w-full before:h-[300px] before:inset-0 max-md:before:bg-black/40 before:bg-black/55">
                <h1 className="bg-black absolute text-red-700  max-md:bg-opacity-50 bg-opacity-70 z-20 text-4xl max-md:text-3xl  font-bold w-fit  py-2 px-4 mx-auto "><i>THE LUSAKA MOTOR SHOW</i> </h1>
            </div>


            <section className="grid grid-cols-2 gap-5 max-lg:grid-cols-1 px-5 py-20 sm:px-20 items-center">
                <div>
                    <video controls className="w-[500px] max-lg:mx-auto" autoPlay>
                        <source src="/images/event-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div>
                    <h1 className="text-red-800 text-xl font-semibold">This September in LUSAKA</h1>
                    <p className="text-gray-600 max-lg:text-justify max-sm:text-[15px]">
                        Lorem ipsum dolor sit amFet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices, non consequat mauris tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultri
                        Lorem ipsum dolor sit amFet, consectetur adipiscing elit. Duis ac
                    </p>
                </div>
            </section>

            <section className="bg-red-800 w-[90vw] py-10 px-10 max-md:px-4 mx-auto text-white flex justify-center flex-col items-center gap-4 mb-16">
                <h1 className=" text-2xl max-md:text-xl font-medium text-center">5th, 6th, 7th of Sept 2025</h1>
                <p className=" text-[15px] max-sm:text-sm text-center"><i>Welcome to India Agri Expo, the only business to business event of its kind offering a single venue interface between Indian & global players in the agrimachinery sector. India Agri Expo envisages showcasing the best and latest in agrimachineries, besides providing an excellent opportunity to Indian and overseas players catering to the entire value chain through vertical based national and international pavilions.</i></p>

            </section>

            <section>
                <h1 className="text-4xl max-md:text-2xl font-bold text-black  text-center">Our Focus Areas</h1>

                <hr className="bg-red-800 h-[4px] w-[200px] max-md:w-[150px] mx-auto  rounded-full mt-2 " />

                <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 text-sm font-semibold text-black mb-20 mt-10 max-lg:gap-10">

                    <div className="flex flex-col justify-center items-center text-center gap-2">
                        <img className="h-32" src="images/agri-tractor.png" alt="" />
                        <p className="text-red-800 font-bold">Farm <br /> Machanization</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-2">
                        <img className="h-32" src="images/agri-farm.png" alt="" />
                        <p className="text-red-800 font-bold">Farm <br /> Diversification</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-2">
                        <img className="h-32" src="images/agri-earth.png" alt="" />
                        <p className="text-red-800 font-bold">Sustainability and <br /> Carbon</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-2">
                        <img className="h-32" src="images/agri-tech.png" alt="" />
                        <p className="text-red-800 font-bold">Smart Technology <br /> and AI</p>
                    </div>
                </div>
            </section>

            <section className="px-5 py-16 bg-slate-200 sm:px-20 ">
                <h1 className=" text-4xl max-md:text-2xl font-bold text-black  text-center">
                    Where the <span className="text-red-800 '">LUSAKA MOTOR SHOW</span> will Take Place</h1>
                <div className="carousel rounded-box p-10 py-5 flex lg:justify-center">
                    {
                        venue1ImgData.map((img, i) => (
                            <div className="relative carousel-item mx-3 group" key={i} >
                                <img src={img.imageLink} className=" w-80 aspect-[4/3] " />

                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold opacity-80 md:opacity-0  group-hover:opacity-100 transition-opacity duration-300">
                                    LUSAKA POLO CLUB
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="flex items-center mx-auto px-8 py-3 text-white bg-red-800 text-sm group"
                    onClick={navigateToGallery}>
                    View More
                    <span className=" group-hover:translate-x-3 mt-[2px] transition-all duration-500">{rightArrow}</span>
                </button>

            </section>

            {/* Tickets booking section */}
            <section className="flex items-center relative justify-center w-[100%] min-h-[80vh] max-md:mt-16 bg-transparent bg-[url('../images/galllery-image7.jpg')] bg-cover bg-center before:absolute before:w-full before:h-full before:inset-0 before:bg-black/55 rounded font-[sans-serif] ">
                <div className="absolute text-center mx-6">
                    <h1 className="text-white sm:text-5xl text-3xl font-extrabold mb-20">GRAB YOUR <span className="">TICKETS</span> NOW !</h1>
                    
                    <button type="button"
                        className="px-10 py-5 rounded text-sm tracking-wider font-semibold border border-gray-500  outline-none hover:border-transparent hover:bg-red-900 bg-red-700  text-white transition-all duration-300">
                       BOOK NOW
                    </button>
                </div>
            </section>

            <div className="flex max-md:flex-col justify-center py-16 items-center gap-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22397.964841544406!2d28.299848048232974!3d-15.402466000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b5b981ef0af%3A0x773ff9dc24deeea6!2sPolo%20Club!5e1!3m2!1sen!2sin!4v1736758641797!5m2!1sen!2sin"
                    className="w-[70%] max-md:w-[100%] h-[350px] " allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className="flex justify-center items-center text-white text-2xl  bg-red-800  w-[20%]  max-md:w-[60%] max-md:h-[300px] h-[350px] ">
                    ADVERT
                </div>
            </div>

            <section>
                <Partners />
            </section>
        </div>
    )
}

export default Event3