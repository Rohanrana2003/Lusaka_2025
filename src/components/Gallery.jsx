import { useEffect } from "react";
import { imgData } from "../utils/constantData";


const DefaultGallery = () => {

    useEffect(() => {
        // scrollTo(0, 0)
    }, [])

    return (
        <div className=" bg-[#C4DFE6]">

            <section className=" flex items-center relative justify-center w-[100%] h-80  before:absolute before:w-full before:h-full 
          before:inset-0 before:bg-black/55 bg-[url('images/about-image3.jpg')] bg-cover bg-bottom">
                <h1 className="absolute max-md:text-5xl max-md:text-center text-6xl text-white font-semibold">Our Memories</h1>
            </section>

            <section className="p-5 md:p-10">
                <div className=" flex w-full mb-10 flex-wrap ">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-gray-700 text-justify">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-3 md:px-8">

                    {imgData.map(({ imageLink }, index) => (
                        <div key={index}>
                            <img
                                className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                                src={imageLink}
                                alt="gallery-photo"
                            />
                        </div>
                    ))}
                </div>
            </section>


        </div>

    );
}
export default DefaultGallery