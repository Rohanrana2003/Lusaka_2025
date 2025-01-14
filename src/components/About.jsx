import { useEffect } from "react"
import Partners from "./subComponents/Partners"
import Stats from "./subComponents/Stats"


const About = () => {


  useEffect(() => {
    // scrollTo(0, 0)
  }, [])

  return (
    <div className="font-serif">

      <section className="flex items-center relative justify-center w-[100%] h-80  before:absolute before:w-full before:h-full 
          before:inset-0 before:bg-black/55 bg-[url('images/about-image1.jpg')] bg-cover bg-center">
        <h1 className="absolute max-md:text-5xl max-md:text-center text-6xl text-white font-semibold">About Lusaka Happening</h1>
      </section>


      <section className="bg-white p-10 max-md:px-5 px-16 text-justify grid max-md:grid-cols-1 grid-cols-2 items-center">
        <img className="ma-md:hidden" src="images/about-image2.jpg" />
        <div className="flex flex-col items-center text-[#000] bg-[#66A5AD] max-md:p-5 p-10 shadow md:shadow-black">
          <i className="max-md:text-2xl text-3xl mb-2 text-white">Know About Us...</i>
          <p className="h-[1px] max-md:w-24 rounded-full w-32 bg-[#C4EFD6] mb-3"></p>
          <i>&quot;Lorem ipsum dolor sit amFet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices, non consequat mauris tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultri&quot;</i>
        </div>
      </section>

      <section>
        <Partners />
      </section>


      <section>
        <Stats />
      </section>

    </div>
  )
}

export default About