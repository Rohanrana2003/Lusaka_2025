import { useRef } from "react"
import { BarIcon } from "../utils/constants"

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
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-5 h-5 fill-current transition-all" viewBox="0 0 155.139 155.139">
              <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" data-original="#010002" />
            </svg>
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-md text-gray-800 hover:bg-blue-600 hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-5 h-5 fill-current transition-all" viewBox="0 0 24 24">
              <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" data-original="#000000" />
            </svg>
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-md text-gray-800 hover:bg-black hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-5 h-5 fill-current transition-all" viewBox="0 0 1226.37 1226.37">
              <path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" data-original="#000000" />
            </svg>
          </div>
        </div>
      </section>

      <div className='flex flex-wrap py-3.5 px-10 overflow-x-auto'>

        <div id="collapseMenu" ref={collapseMenu}
          className='w-full max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button id="toggleClose" onClick={handleToggleHeader} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
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
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>Source</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>Store</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>Fashion</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>Partner</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-orange-500 text-gray-500 font-bold text-[15px] block'>More</a></li>
          </ul>
        </div>

        <div className='flex ml-auto lg:hidden'>
          <button id="toggleOpen" onClick={handleToggleHeader}>
            {BarIcon}
          </button>
        </div>
      </div>
    </header>
  )
}


export default Header

