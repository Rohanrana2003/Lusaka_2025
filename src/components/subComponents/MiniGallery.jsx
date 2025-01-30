import { useNavigate } from "react-router-dom"
import { imgData } from "../../utils/constantData"
import { rightArrow } from "../../utils/constants";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import '../../app.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const MiniGallery = () => {

    const navigate = useNavigate();
    const [, setSelectedButton] = useContext(MyContext);

    const navigateToGallery = () => {
        navigate('/gallery');
        setSelectedButton(2);
    }

    return (
        <div className="text-center min-w-full font-[sans-serif] py-24 bg-slate-200 not-selectable">
            <h2 className="text-gray-800 text-3xl font-bold  text-center">Some Unforgettable Memories</h2>

            <Swiper 
                slidesPerView={1.2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    480: { slidesPerView: 2, spaceBetween: 20},
                    768: { slidesPerView: 3, spaceBetween: 30 },
                    1024: { slidesPerView: 4, spaceBetween: 30 },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mySwiper-gallery my-2"
            >

                {
                    imgData.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img src={img.imageLink}
                                className='transition-all rounded-md duration-500 cursor-pointer lg:filter lg: hover:scale-[1.05] lg:hover:grayscale-0 w-72 max-md:w-72 aspect-[4/3] rounde ml-5 object-cover' />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

            <button className="flex rounded items-center mx-auto max-sm:px-6 max-sm:py-3     max-sm:text-sm px-8 py-3 text-gray-950 bg-[#F9A334] text-base group"
                onClick={navigateToGallery}>
                View More
                <span className=" group-hover:translate-x-3 mt-[2px] transition-all duration-500">{rightArrow}</span>
            </button>
        </div>
    )
}

export default MiniGallery