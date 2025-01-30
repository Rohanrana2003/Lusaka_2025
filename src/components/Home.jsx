import { useNavigate } from "react-router-dom";
import { cardsData } from "../utils/constantData";
import Stats from "../components/subComponents/Stats";
import MiniGallery from "./subComponents/MiniGallery";
import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import Faq from "./subComponents/Faq";
import Partners from "./subComponents/Partners";
import Venues from "./subComponents/Venues";

const Home = () => {

  const [, setSelectedButton] = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    scrollTo(0, 0);
  }, [])


  const navigatePath = (item) => {
    navigate(item.path)
    setSelectedButton(item.headerNumber)
  }

  const navigateToAbout = () => {
    navigate('/about');
    setSelectedButton(6)
  }

  const navigateToContact = () => {
    navigate('/contact');
    setSelectedButton(7)
  }

  return (
    <div className="font-mono bg-[#fff2e0]">
      {/* 4 tabs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-sm:p-0 p-10 ">
        {
          cardsData.map((item) => (
            <div className={`relative group max-w-[650px] h-[500px] max-md:h-[350px] mx-6 my-2 bg-cover cursor-pointer 
              flex justify-center items-center transition-all duration-700 bg-center 
              before:absolute before:w-full before:h-full before:inset-0 before:bg-black/60 hover:before:bg-black/75 before:transition-all before:duration-700 before:z-20`} key={item.id}>

              <img className="absolute w-full h-full inset-0 object-cover object-center transition-all duration-700 z-10" src={`images/main-${item.id}.jpg`} />

              <div className="absolute z-20 flex flex-col max-md:gap-16 gap-32 items-center  text-white transition-all duration-300 group-hover:-translate-y-4">
                <p className="font-bold text-[34px] max-md:text-[36px] px-5 leading-none text-center ">{item.name}</p>
                {/* <p className="text-lg px-5 leading-none text-center text-lime-400">{item.date}</p> */}
                <button className="transition-all duration-300 text-xl font-semibold bg-transparent hover:bg-[#f9a334] hover:border-transparent py-4 px-8 border border-white" onClick={() => navigatePath(item)}>Click</button>
              </div>
            </div>
          ))
        }
      </section>

      {/* Advert */}
      <section className="bg-[#fff2e0] w-full flex items-center justify-center">
      <div className="max-sm:mt-6 max-md:w-[80vw] w-[80vw] h-60 bg-[#f9a334] text-4xl flex justify-center items-center text-black">
        ADVERT
      </div>

      </section>

      {/* Short About */}
      {/* <section className="mt-10 relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black/65 max-sm:before:bg-black/55 before:z-10 bg-[url('images/about-mini-image.jpg')] bg-center bg-cover">

        <div className="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white sm:text-4xl text-2xl font-bold mb-6">About Lusaka Motors</h2>
          <p className="text-base text-center text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices, non consequat mauris tincidunt.</p>
          <button type="button" onClick={navigateToAbout}
            className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold outline-none  bg-[#f9a334] hover:scale-105 transition-all duration-300">Know More About us...</button>
        </div>
      </section> */}
      <div className="mt-8 flex items-center relative justify-center w-[100%] min-h-[100vh] max-md:mt-16 bg-transparent bg-[url('../images/mini-about.jpg')] bg-cover bg-center before:absolute before:w-full before:h-full before:inset-0 before:bg-black/55 rounded font-[sans-serif] ">
        <div className="absolute max-w-2xl text-center mx-6">
          <h1 className="text-white sm:text-5xl text-3xl font-extrabold">About Lusaka Happening</h1>
          <div className="my-10">
            <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et
              tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
              ultrices, non consequat mauris tincidunt.</p>
          </div>

          <hr className="border-gray-500" />

          <div className="mt-10 flex max-sm:flex-col justify-center sm:gap-6 gap-4">
            <button type="button" onClick={navigateToContact}
              className="px-6 py-3 rounded text-black text-sm tracking-wider font-semibold duration-300 hover:border-gray-500 hover:border border border-transparent outline-none bg-[#F9A334] hover:bg-transparent hover:text-[#F9A334]  transition-all ">
              Contact us
            </button>
            <button type="button" onClick={navigateToAbout}
              className="px-6 py-3 rounded text-[#F9A334]  text-sm tracking-wider font-semibold border border-gray-500  outline-none bg-transparent hover:border-transparent hover:bg-[#F9A334]  hover:text-black transition-all duration-300">
              Know more
            </button>
          </div>
        </div>
      </div>

      
      {/* Our Partners */}
      <section>
        <Partners />
      </section>

      {/* Mini-Gallery */}
      <section>
        <MiniGallery />
      </section>

      {/* Stats */}
      <section>
        <Stats />
      </section>
      {/* Venues */}
      <section>
        <Venues />
      </section>

      {/* Faq */}
      <section>
        <Faq />
      </section>

     

    </div>
  );
};

export default Home;
