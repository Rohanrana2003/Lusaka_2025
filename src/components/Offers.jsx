import { offersData } from "../utils/constantData"

const Offers = () => {
  return (
    <div className="bg-[#fff2e0] flex flex-col justify-center items-center">

      <section className=" flex items-center relative justify-center w-[100%] h-80  before:absolute before:w-full before:h-full 
          before:inset-0 before:bg-black/55 bg-[url('images/offer-bg.jpg')] bg-cover bg-center">
        <h1 className="absolute max-md:text-[38px] max-md:text-center font-serif text-6xl text-white font-semibold">Offers & Deals</h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 my-16 gap-10 items-center justify-center">
        {
          offersData.map((offer) => (
            <div key={offer.id}
              className=" rounded-lg max-md:w-[300px] bg-white hover:bg-transparent hover:scale-105 transition-all 
                          duration-300 overflow-hidden flex flex-col justify-center items-center">

              <div className="relative h-52 aspect-video overflow-hidden">
               <a href="/"> <img className="absolute w-full h-full inset-0 object-contain object-center" src={offer.src} /></a>
              </div>

              <a href="/"><h1 className="text-2xl p-4 text-center  text-black font-semibold">{offer.title}</h1></a>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Offers