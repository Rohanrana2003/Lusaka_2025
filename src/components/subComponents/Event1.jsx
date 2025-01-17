import { venue1ImgData } from "../../utils/constantData"
import Partners from "./Partners"


const Event1 = () => {
    return (
        <div className="bg-white">
            <div className="relative flex justify-center text-center items-center w-full h-[300px] bg-center bg-cover bg-[url('images/galllery-image2.jpg')] before:absolute before:z-10 before:w-full before:h-[300px] before:inset-0 before:bg-black/35">
                <h1 className="bg-white absolute text-red-800 bg-opacity-60 z-20 text-4xl max-md:text-3xl  font-bold w-fit  py-2 px-4 mx-auto "><i>MUKSHI AGRI EXPO EVENT</i> </h1>
            </div>


            <section className="grid grid-cols-2 gap-5 max-lg:grid-cols-1 px-5 py-20 sm:px-20 items-center">
                <div>
                    <video controls className="w-[500px] max-lg:mx-auto" autoPlay>
                        <source src="/images/event-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div>
                    <h1 className="text-red-800 text-xl font-semibold">This April in ZAMBIA</h1>
                    <p className="text-gray-600 max-lg:text-justify max-sm:text-[15px]">
                        Lorem ipsum dolor sit amFet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices, non consequat mauris tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultri
                        Lorem ipsum dolor sit amFet, consectetur adipiscing elit. Duis ac
                    </p>
                </div>
            </section>

            <section className="px-5 pb-20 sm:px-20 ">
                <h1 className=" text-4xl max-md:text-3xl font-bold text-black  text-center">
                    Where the <span className="text-red-800 '">MUKSHI AGRI EXPO EVENT</span> will Take Place</h1>
                <div className="carousel rounded-box p-10 flex lg:justify-center">
                    {
                        venue1ImgData.map((img, i) => (
                            <div className="relative carousel-item mx-3 group" key={i} >
                                <img src={img.imageLink} className=" w-80 aspect-[4/3] " />

                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold opacity-80 md:opacity-0  group-hover:opacity-100 transition-opacity duration-300">
                                    FIKA LODGE
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex max-md:flex-col justify-center items-center gap-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.169465913492!2d29.154204173433236!3d-13.721249575331374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1914e5553c0f6139%3A0xc7516e91ea86bdec!2sFika%20Lodge!5e1!3m2!1sen!2sin!4v1736843819747!5m2!1sen!2sin" 
                    className="w-[70%] max-md:w-[100%] h-[350px] " allowfullscreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="flex justify-center items-center text-black text-2xl  bg-[#66A5AD]  w-[20%]  max-md:w-[60%] max-md:h-[300px] h-[350px] ">
                        ADVERT
                    </div>
                </div>

            </section>

            <section>
                <Partners/>
            </section>
        </div>
    )
}

export default Event1