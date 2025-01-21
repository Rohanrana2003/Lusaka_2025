

const Footer = () => {

  return (
    <footer className="bg-[#f9a334] py-12 px-16 font-sans tracking-wide">
      <div className="max-w-screen-xl mx-auto">

        {/* <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8">
          <h4 className="lg:col-span-2 text-lg font-semibold text-white leading-relaxed">Join our newsletter to keep up to date with us!<br /> Enter your email Subscribe</h4>
          <div className="bg-transparent border border-gray-600 flex px-1 py-1 rounded-full max-lg:max-w-md">
            <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent pl-4 text-sm text-gray-400" />
            <button type='button'
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2">Subscribe</button>
          </div>
        </div> */}

        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8">
          <div className="lg:col-span-3 max-lg:col-span-full">
            <a href='javascript:void(0)'><img src="images/logo_black.png" alt="logo" className='w-36' /></a>
            <p className="text-white leading-relaxed text-sm lg:max-w-sm mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
              mi eu pulvinar cursus, sem elit interdum mauris.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Services</h4>
            <ul className="space-y-4">
              <li><a href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm">Web
                Development</a></li>
              <li><a href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm">Mobile App
                Development</a></li>
              <li><a href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm">UI/UX
                Design</a></li>
              <li><a href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">About Us</h4>
            <ul className="space-y-4">
              <li><a href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm">Our Story</a>
              </li>
              <li><a href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm">Mission and
                Values</a></li>
              <li><a href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm">Team</a></li>
              <li><a href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm">Testimonials</a></li>
            </ul>
          </div>
        </div>

        <p className='text-sm text-white mt-8'>© LusakaMotors. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
