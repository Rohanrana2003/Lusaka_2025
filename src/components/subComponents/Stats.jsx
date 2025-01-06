

const Stats = () => {
  return (
    <div className="bg-gray-50 px-4 py-14 font-[sans-serif]">
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
  )
}

export default Stats