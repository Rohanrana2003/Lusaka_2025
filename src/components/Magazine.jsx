import { useContext, useEffect } from "react"
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";


const Magazine = () => {

  const [, setSelectedButton] = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    // scrollTo(0, 0);
  }, [])

  const navigateToContact = () => {
    navigate('/contact');
    setSelectedButton(7)
  }

  return (
    <div className=" bg-[#fff2e0] text-black transition-all duration-300">

      <section className="flex items-center relative justify-center w-[100%] h-80  before:absolute before:w-full before:h-full before:inset-0 before:bg-black/75 bg-[url('../images/mag-bg.jpg')] bg-cover bg-center">
        <h1 className=" font-serif absolute max-md:text-[38px] max-md:text-center text-6xl text-white font-medium">
          Unfold Stories
        </h1>
      </section>

      <section className="flex max-md:flex-col">
        <div className="flex flex-col items-start gap-10 max-lg:gap-5 p-4 m-10 max-lg:m-5" >
          <h1 className="font-serif text-4xl max-lg:text-3xl  xl:w-[450px]">A PRINT AND DIGITAL POWERHOUSE</h1>
          <p className="max-lg:text-sm font-sans text-gray-700">
            For 41 years now, the award-winning Goodguys Goodtimes Gazette Magazine has been entertaining hot rodders of all ages across the world! The full-color publication is a monthly, full-color, magazine delivered directly to passionate car enthusiasts and do-it-yourselfers who are active and influential in the hobby.
          </p>

          <button onClick={navigateToContact} 
            className="px-10 py-6 font-sans max-lg:py-4 max-lg:px-8 bg-[#F9A334] hover:bg-[#ed8e13] transition-all duration-300" >
            Contact Us
          </button>
        </div>

        <div className="xl:max-h-[400px] max-md:max-h-[300px] overflow-hidden">
          <img className="" src="/images/mag-main.jpg" />
        </div>
      </section>

    </div>
  )
}

export default Magazine

