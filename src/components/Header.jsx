import { useRef, useState } from "react"
import { barIcon, crossIcon, facebookIcon, linkedinIcon, xIcon } from "../utils/constants"
import { useNavigate } from "react-router-dom";
import { headerButtons } from "../utils/constantData";

const Header = () => {

  const [selectedButton, setSelectedButton] = useState(1); 
  const collapseMenu = useRef();
  const navigate = useNavigate();


  const handleToggleHeader = () => {
    if (collapseMenu.current.style.display === 'block') {
      collapseMenu.current.style.display = 'none';
    } else {
      collapseMenu.current.style.display = 'block';
    }
  }


  const handlePageRedirect = (item) =>{
    setSelectedButton(item.id);
    navigate(item.pathName);
  }

  return (
    <header className='shadow-md bg-[#66A5AD] font-sans tracking-wide relative z-50 '>

      <div className='flex flex-wrap pt-8 lg:pb-6 px-10 overflow-x-auto '>

        <div id="collapseMenu" ref={collapseMenu}
          className='w-full max-sm:hidden sm:!block max-sm:before:fixed max-sm:before:bg-black max-sm:before:opacity-50 max-sm:before:inset-0 max-sm:before:z-50'>

          <button id="toggleClose" onClick={handleToggleHeader} className='sm:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            {crossIcon}
          </button>

          <ul
            className='sm:flex sm:justify-center sm:gap-x-10 max-sm:space-y-3 max-sm:fixed max-sm:bg-white 
    max-sm:w-1/2 max-sm:min-w-[300px] max-sm:top-0 max-sm:left-0 max-sm:p-6 max-sm:h-full max-sm:shadow-md 
    max-sm:overflow-auto z-50'>
            <li className='mb-6 hidden max-sm:block'>
              <a href="javascript:void(0)"><img src="images/logo_black.png" alt="logo" className='w-36' />
              </a>
            </li>

            {
              headerButtons.map((item, i) => (
                <li key={i} className='max-sm:border-b max-sm:py-3'><a href='javascript:void(0)' onClick={()=>handlePageRedirect(item)}
                  className={` font-bold text-[15px] block ${selectedButton === item.id ? 'text-orange-100':'text-black'}`} >{item.name}</a></li>
              ))
            }

          </ul>
        </div>

        <div className='flex ml-auto sm:hidden'>
          <button id="toggleOpen" onClick={handleToggleHeader}>
            {barIcon}
          </button>
        </div>
      </div>

      <section
        className='flex items-center lg:justify-center flex-wrap gap-5 relative pb-3 sm:px-10 px-4 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]'>
        <a className="cursor-pointer" onClick={() =>{navigate('/'); setSelectedButton(1)}} ><img src='images/logo_black.png' alt="logo"
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


    </header>
  )
}


export default Header

