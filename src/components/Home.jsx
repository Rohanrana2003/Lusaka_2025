import { useNavigate } from "react-router-dom";
import { cardsData } from "../utils/constantData";
import About from "./About";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="font-mono bg-[#C4DFE6]">
      {/* 4 tabs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-sm:p-0 p-10 ">
        {
          cardsData.map((item) => (
            <div className={`relative group max-w-[650px] h-[500px] max-md:h-[350px] mx-6 my-2 bg-cover cursor-pointer 
              flex justify-center items-center transition-all duration-700 bg-center bg-[url('images/main-${item.id}.jpg')] 
              before:absolute before:w-full before:h-full before:inset-0 before:bg-black/45 hover:before:bg-black/65 before:transition-all before:duration-700 before:z-10`} key={item.id}>

              <div className="absolute z-20 flex flex-col gap-32 items-center  text-white transition-all duration-300 group-hover:-translate-y-4">
                <p className="font-bold text-5xl">{item.name}</p>
                <button className="transition-all duration-300 text-xl font-semibold bg-transparent hover:bg-[#66A5AD] hover:border-transparent py-4 px-8 border border-white">Click</button>
              </div>
            </div>
          ))
        }
      </section>

      {/* Short About */}
      <section className="mt-10 md:mx relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black/55 before:z-10">
        <img src="images/about-car.jpg" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

        <div className="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white sm:text-4xl text-2xl font-bold mb-6">About Lusaka Motors</h2>
          <p className="text-base text-center text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices, non consequat mauris tincidunt.</p>
          <button type="button" onClick={() => navigate('/about')}
            className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold outline-none  bg-[#66A5AD] hover:bg-[#4a7d84] border-2 border-[#4a7d84] transition-all duration-300">Know More About us...</button>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="bg-gray-50 px-4 py-10 font-[sans-serif]">
          <h2 className="text-gray-800 text-3xl font-bold mb-14 text-center">Application Metrics</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">

            <div className="bg-[#C4DFE6] flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
              <h3 className="text-gray-800 text-5xl font-extrabold">20<span className="text-[#46878f]">+</span></h3>
              <div>
                <p className="text-gray-800 text-base font-bold">Events scheduled</p>
                <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <div className="bg-[#C4DFE6] flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
              <h3 className="text-gray-800 text-5xl font-extrabold">$80<span className="text-[#46878f]">K</span></h3>
              <div>
                <p className="text-gray-800 text-base font-bold">Revenue</p>
                <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <div className="bg-[#C4DFE6] flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
              <h3 className="text-gray-800 text-5xl font-extrabold">100<span className="text-[#46878f]">K</span></h3>
              <div>
                <p className="text-gray-800 text-base font-bold">Engagement</p>
                <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <div className="bg-[#C4DFE6] flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
              <h3 className="text-gray-800 text-5xl font-extrabold">10<span className="text-[#46878f]">+</span></h3>
              <div>
                <p className="text-gray-800 text-base font-bold">Years of Experience</p>
                <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {About}
    </div>
  );
};

export default Home;
