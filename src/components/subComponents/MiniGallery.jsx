import { useNavigate } from "react-router-dom"
import { imgData } from "../../utils/constantData"
import { rightArrow } from "../../utils/constants";
import { useContext } from "react";
import MyContext from "../../context/MyContext";


const MiniGallery = () => {

    const navigate = useNavigate();
    const [, setSelectedButton] = useContext(MyContext);

    const navigateToGallery = () =>{
        navigate('/gallery');
        setSelectedButton(2);
    }

    return (
        <div className="text-center min-w-full font-[sans-serif] py-24 bg-slate-200">
            <h2 className="text-gray-800 text-3xl font-bold  text-center">Some Unforgettable Memories</h2>

            <div className="carousel rounded-box p-10">
                {
                    imgData.map((img, i) => (
                        <div className="carousel-item " key={i} >
                            <img src={img.imageLink} className="transition-all duration-500 cursor-pointer lg:filter lg:grayscale hover:scale-[1.05] lg:hover:grayscale-0 w-80 aspect-[4/3] rounde ml-5 object-cover" />
                        </div>
                    ))
                }
            </div>

            <button className="flex items-center mx-auto px-8 py-3 text-black bg-[#F9A334] text-base group"
                onClick={navigateToGallery}>
                View More
                <span className=" group-hover:translate-x-3 mt-[2px] transition-all duration-500">{rightArrow}</span>
            </button>
        </div>
    )
}

export default MiniGallery