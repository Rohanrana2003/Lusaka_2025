import { cardsData } from "../utils/constantData";

const Home = () => {
  return (
    <div className="font-mono">
      {/* 4 tabs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-sm:p-0 p-10 bg-[#efefef]">
        {
          cardsData.map((item, i) => (
            <div className={`relative group max-w-[650px] h-[500px] max-md:h-[350px] mx-6 my-2 bg-cover cursor-pointer 
              flex justify-center items-center transition-all duration-700 bg-center bg-[url('${item.url}')] 
              before:absolute before:w-full before:h-full before:inset-0 before:bg-black/45 hover:before:bg-black/65 before:transition-all before:duration-700 before:z-10`} key={i}>

              <div className="absolute z-20 flex flex-col gap-32 items-center  text-white transition-all duration-300 group-hover:-translate-y-4">
                <p className="font-bold text-5xl">{item.name}</p>
                <button className="transition-all duration-300 text-xl font-semibold bg-transparent hover:bg-orange-500 hover:border-transparent py-4 px-8 border border-white">Click</button>
              </div>
            </div>
          ))
        }
      </section>

      {/* Short About */}
      <section className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black/65 before:z-10">
        <img src="images/about-car.jpg" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

        <div className="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white sm:text-4xl text-2xl font-bold mb-6">Showcase Your Product or Service in Style</h2>
          <p className="text-base text-center text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices, non consequat mauris tincidunt.</p>
          <button type="button"
            className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold outline-none  bg-orange-600 hover:bg-orange-700 border-2 border-orange-600 transition-all duration-300">Know More About us...</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
