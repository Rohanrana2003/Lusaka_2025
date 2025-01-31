import { useContext, useEffect } from "react"
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import { magData } from "../utils/constantData";


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
          The Garage Library
        </h1>
      </section>

      <section className="flex max-md:flex-col">
        <div className="flex flex-col items-start gap-10 max-lg:gap-5 p-4 m-10 max-lg:m-5 sm:px-10 md:px-0" >

          <h1 className="font-serif text-4xl max-lg:text-3xl  xl:w-[450px]">A PRINT AND DIGITAL POWERHOUSE</h1>
          <p className="max-lg:text-sm font-sans text-gray-700">
            Rev up your curiosity with LUSAKA MAGAZINES where horsepower meets innovation. Dive into expert reviews, electrifying drives, and the stories behind the world’s most iconic machines. For enthusiasts who live and breathe automotive excellence
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


      {/* Latest Magazines */}
      <section className="flex  items-center justify-center h-full max-md:text-center">
        <div className="flex max-md:flex-col max-md:items-center justify-center gap-10 bg-white border-2 my-10 md:w-[90vw] 
          lg:w-[900px] max-md:p-5 p-10 max-sm:mx-5">

          <div className="max-w-[450px]">
            <h1 className="font-serif text-5xl max-lg:text-4xl my-5 md:mt-8 lg:mt-12">Latest Edition</h1>
            <p className="max-md:text-sm max-md:text-justify text-gray-600">
              The future hits the road in our latest edition. Discover hands-on reviews of electric beasts, retro-modern redesigns, and the science of aerodynamics. Your ticket to tomorrow’s automotive world? Right here. Rev your curiosity grab your copy now.
            </p>
          </div>

          <div className="border overflow-hidden min-w-[50%]  max-h-[300px] max-sm:max-h-[230px] ">
            <img className=" w-[400px] h-[300px] object-cover " src="/images/mag-latest.jpg" />
          </div>
        </div>
      </section>


      {/* All Magazines */}
      <section className=" w-full py-10 ">

        <h1 className="text-center text-5xl max-md:text-4xl font-serif text-gray-800 mb-5 max-md:mb-2">
          The Complete Library
        </h1>
        <hr className="w-[25vw] max-md:w-[30vw] bg-gray-500 h-[3px] mx-auto" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
                       gap-16 justify-center items-center max-sm:px-10 px-20 my-10 ">
          {
            magData.map((mag) => (
              <div key={mag.id}
                className=" group p-2 w-full h-full bg-white hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden">
                <div className=" w-full h-[85%]">
                  <img className="w-full h-full object-cover object-center" src={mag.imgSrc} />
                </div>

                <p className="text-sm text-gray-800 p-3 group-hover:text-black">{mag.title}
                  <br /> <span className="text-[14px] text-gray-600">~20/02/2020</span> </p>
              </div>
            ))
          }

        </div>

      </section>
    </div>
  )
}

export default Magazine

