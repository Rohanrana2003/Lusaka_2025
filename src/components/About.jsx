import { useEffect } from "react"
import Venues from "./subComponents/Venues"
import Stats from "./subComponents/Stats"
import { aboutData } from "../utils/constantData"


const About = () => {


  useEffect(() => {
    scrollTo(0, 0) 
  }, [])

  return (
    <div className="font-serif bg-[#fff2e0]">

      <section className="flex items-center relative justify-center w-[100%] h-80  before:absolute before:w-full before:h-full 
          before:inset-0 before:bg-black/55 bg-[url('../images/about-image1.jpg')] bg-cover bg-center">
        <h1 className="absolute max-md:text-[38px] max-md:text-center text-6xl text-white font-medium">About Lusaka Happening</h1>
      </section>


      <section className=" p-10 max-md:px-5 px-16 text-justify grid max-md:grid-cols-1 grid-cols-2 items-center">
        <img className="ma-md:hidden max-md:p-5 max-md:-mb-10 rounded-lg max-sm:rounded-[25px]" src="images/about-image2.jpg" />
        <div className="flex flex-col items-center rounded md:rounded-r-lg text-[#000] bg-[#f9a334] max-md:p-5 p-10 shadow md:shadow-black">
          <i className="max-md:text-2xl text-3xl mb-2 ">Know About Us...</i>
          <p className="h-[1px] max-md:w-24 rounded-full w-32 bg-[#C4EFD6] mb-3"></p>
          <i className="max-sm:text-[14px]">&quot;Lorem ipsum dolor sit amFet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices, non consequat mauris tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultri&quot;</i>
        </div>
      </section>

      <section className="w-full py-10 flex flex-col justify-center items-center gap-5 text-center text-black px-10 max-md:px-3">
        <h1 className="text-4xl max-sm:text-2xl font-bold  max-sm:w-[70%]">Lusaka Happening aims to...</h1>

        <ul className="text-left text-[22px] max-sm:pl-2 max-sm:text-[16px]">
          {
            aboutData.map(item => (
              <div key={item.id} className="flex items-start gap-2 mb-2">
                <img src="/images/accept.png" className="h-6 mt-1"/>
                <li className="">{item.content}</li>
              </div>
            ))


          }
        </ul>
      </section>

      {/* <section>
        <Partners />
      </section> */}


      <section>
        <Stats />
      </section>

      <section>
        <Venues />
      </section>

    </div>
  )
}

export default About