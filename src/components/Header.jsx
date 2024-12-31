import { useRef } from "react"
import { barIcon, crossIcon, facebookIcon, linkedinIcon, xIcon } from "../utils/constants"

const Header = () =>{

  const collapseMenu = useRef();

  const handleToggleHeader = () =>{
    if (collapseMenu.current.style.display === 'block') {
      collapseMenu.current.style.display = 'none';
    } else {
      collapseMenu.current.style.display = 'block';
    } 
  }

  return(
      <header className='shadow-md bg-white font-sans tracking-wide relative z-50'>
      <section
        className='flex items-center lg:justify-center flex-wrap gap-5 relative py-3 sm:px-10 px-4 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]'>
        <a href="javascript:void(0)"><img src='images/logo_black.png' alt="logo"
          className=' w-24' />
        </a>

        <div className="space-x-4 md:absolute md:right-10 flex items-center max-md:ml-auto">
          <div className="w-7 h-7 flex items-center justify-center rounded-md text-gray-800 hover:bg-blue-600 hover:text-white transition-all">
            {facebookIcon}
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-md text-gray-800 hover:bg-blue-600 hover:text-white transition-all">
            {linkedinIcon}
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-md text-gray-800 hover:bg-black hover:text-white transition-all">
            {xIcon}
          </div>
        </div>
      </section>

      <div className='flex flex-wrap py-3.5 px-10 overflow-x-auto'>

        <div id="collapseMenu" ref={collapseMenu}
          className='w-full max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button id="toggleClose" onClick={handleToggleHeader} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            {crossIcon}
          </button>

          <ul
            className='lg:flex lg:justify-center lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src="images/logo_black.png" alt="logo" className='w-36' />
              </a>
            </li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-orange-500 font-bold text-[15px] block'>Home</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>Team</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>Feature</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>Blog</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>About</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>Contact</a></li>
            
          </ul>
        </div>

        <div className='flex ml-auto lg:hidden'>
          <button id="toggleOpen" onClick={handleToggleHeader}>
            {barIcon}
          </button>
        </div>
      </div>
    </header>
  )
}


export default Header

