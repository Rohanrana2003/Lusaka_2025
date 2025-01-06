import { useNavigate } from "react-router-dom"
import { imgData } from "../../utils/constantData"
import { rightArrow } from "../../utils/constants";


const MiniGallery = () => {

    const navigate = useNavigate();

    return (
        <div className="text-center min-w-full pb-16">
            <h2 className="text-gray-800 font-[sans-serif] text-3xl font-bold mt-16 text-center">Some Unforgettable Memories</h2>

            <div className="carousel rounded-box p-10">
                {
                    imgData.map((img, i) => (
                        <div className="carousel-item " key={i} >
                            <img src={img.imageLink} className="transition-all duration-500 cursor-pointer lg:filter lg:grayscale hover:scale-[1.05] lg:hover:grayscale-0 w-80 aspect-[4/3] rounded-xl ml-5" />
                        </div>
                    ))
                }
            </div>

            <button className="flex items-center mx-auto px-8 py-3 text-black text-lg border border-black group"
                onClick={() => navigate('/gallery')}>
                View More
                <span className=" group-hover:translate-x-3 mt-[2px] transition-all duration-500">{rightArrow}</span>
            </button>
        </div>
    )
}

export default MiniGallery