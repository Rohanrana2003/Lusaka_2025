

const Home = () => {
  return (
    <div className="font-sans">
      {/* 4 tabs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-sm:p-0 p-10 bg-[#efefef]">

        <div className="relative group max-w-[650px] h-[500px] max-md:h-[350px] mx-6 my-2 bg-cover cursor-pointer bg-[url('https://good-guys.com/images/2019/07/28/home-events.jpg')] " >
          <div className="bg-black h-full w-full opacity-35 hover:opacity-65 transition-all duration-300"> </div>
          <div className="absolute top-1/2 font-bold text-3xl text-white transition-all duration-300 group-hover:scale-105">MAGAZINE</div>

        </div>

        <div className="relative max-w-[650px] h-[500px] max-md:h-[350px] mx-6 my-2 bg-cover cursor-pointer bg-[url('https://good-guys.com/images/2024/11/29/jan-gaz-25.jpg')] ">
          <div className="bg-black h-full w-full opacity-35 hover:opacity-65 transition-all duration-300"></div>

        </div>

        <div className="relative max-w-[650px] h-[500px] max-md:h-[350px] mx-6 my-2 bg-cover cursor-pointer bg-[url('https://good-guys.com/images/2019/07/28/home-join.jpg')] ">
          <div className="bg-black h-full w-full opacity-35 hover:opacity-65 transition-all duration-300">

          </div>

        </div>

        <div className="relative max-w-[650px] h-[500px] max-md:h-[350px] mx-6 my-2 bg-cover cursor-pointer bg-[url('https://good-guys.com/images/2021/12/07/watson_210816_0863_hr-copy-2.jpg')] ">
          <div className="bg-black h-full w-full opacity-35 hover:opacity-65 transition-all duration-300"></div>

        </div>

      </section>

    </div>
  )
}

export default Home
