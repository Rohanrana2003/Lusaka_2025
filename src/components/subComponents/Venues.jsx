import { venueData } from "../../utils/constantData"


const Venues = () => {
    return (
        <div className='px-10 py-20 bg-[#fff2e0] font-sans flex flex-col items-center'>
            <h1 className="lg:text-3xl mb-3 text-gray-800 font-[sans-serif] text-3xl font-bold text-center">
                Venue for the Lusaka Happening Events 2025</h1>

            <p className="text-slate-600 text-xl text-center max-w-[450px] pb-10">Lusaka Happening Events of 2025 will be hosted across
                three prime locations</p>

            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10 max-md:gap-6 ">
                {
                    venueData.map((venue) => (
                        <a href={venue.link} target="_blank" referrerPolicy="no-referrer" key={venue.id}>
                            <div  className="group bg-gray-700 cursor-pointer flex flex-col  max-sm:min-w-[80vw] max-lg:w-[60vw] 
                            lg:w-[320px] pb-10 min-h-[200px] rounded-3xl p-2 hover:scale-[1.05] transition-all duration-500
                            hover:shadow-lg hover:shadow-black ">

                                <div className=" w-full rounded-2xl overflow-hidden mb-5 aspect-video">
                                    <img className=" object-cover" src={venue.imgSrc} />
                                </div>

                                <p className="text-white font-semibold text-xl px-1 text-center group-hover:text-[#f9a334] transition-all duration-300">{venue.name}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Venues