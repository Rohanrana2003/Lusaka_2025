import { useContext, useRef, useState } from "react"
import { barIcon, crossIcon, downArrow, facebookIcon, linkedinIcon, xIcon } from "../utils/constants"
import { useNavigate } from "react-router-dom";
import { headerButtons } from "../utils/constantData";
import MyContext from "../context/MyContext";

const Header = () => {

  const [selectedButton, setSelectedButton] = useContext(MyContext); //Selected Header Buttons
  const [showEvents, setShowEvents] = useState(false) //Dropdown of events
  const collapseMenu = useRef(); // Mobile Side Menu
  const navigate = useNavigate();


  const handleToggleHeader = () => {
    if (collapseMenu.current.style.display === 'block') {
      collapseMenu.current.style.display = 'none';
    } else {
      collapseMenu.current.style.display = 'block';
    }
  }

  const handlePageRedirect = (item) => {
    if (item.pathName === 'events') return;
    setSelectedButton(item.id);
    navigate(item.pathName);
    collapseMenu.current.style.display = 'none'; //Hide side bar after clicking
  }

  const showEventsButton = (item) => {
    if (item.pathName === 'events') {
      setShowEvents(true);
    }
  }

  return (
    <header className='font-serif shadow-md bg-[#f9a334]  tracking-wide relative z-50 '>

      <div className='flex flex-wrap pt-8 max-md:pt-5 lg:pb-6 px-10 overflow-x-auto '>

        <div id="collapseMenu" ref={collapseMenu}
          className='w-full max-md:hidden md:!block max-md:before:fixed max-md:before:bg-black max-md:before:opacity-50 max-md:before:inset-0 max-md:before:z-50'>

          <button id="toggleClose" onClick={handleToggleHeader} className='md:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            {crossIcon}
          </button>

          <ul
            className='md:flex md:justify-center md:gap-x-6 lg:gap-x-10 max-md:space-y-3 max-md:fixed max-md:bg-[#f9a334] 
              max-md:w-1/2 max-md:min-w-[300px] max-md:top-0 max-md:left-0 max-md:p-6 max-md:h-full max-md:shadow-md max-md:overflow-auto z-50 '>

            <li className='mb-6 hidden max-md:block'>
              <a href="javascript:void(0)"><img src="images/logo_black.png" alt="logo" className='w-36' />
              </a>
            </li>


            {
              headerButtons.map((item, i) => (
                <li key={i} className='max-md:border-b max-md:py-3 '>

                  <a href='javascript:void(0)'
                    onMouseOver={() => showEventsButton(item)}
                    onMouseLeave={() => setShowEvents(false)}
                    onClick={() => { handlePageRedirect(item); showEventsButton(item) }}
                    className={`flex items-center gap-[2px] font-[600] text-[16px] max-md:text-[15px] 
                   ${selectedButton === item.id ? 'text-white' : 'text-black'}`} >
                    {item.name} {item.pathName === 'events' ? downArrow : ''}

                    {/* dropdown events list */}
                    {item.subComponents &&
                      showEvents &&
                      <ul className="absolute bg-white w-fit py-2 max-md:mt-[150px] md:top-14 max-md:w-[80%]    max-md:px-1 max-md:pb-1 max-md:rounded h-fit z-20 rounded-lg">
                        {
                          item.subComponents.map((subItem) => (
                            <li key={subItem.name}
                              onClick={() => handlePageRedirect(subItem)}
                              className="text-black px-5 transition-all duration-100 max-md:mb-1 max-md:bg-green-900 max-md:text-white py-1 text-sm hover:bg-green-900 rounded hover:text-white" >
                              {subItem.name}
                            </li>
                          ))
                        }
                      </ul>
                    }
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div className='flex ml-auto md:hidden'>
          <button id="toggleOpen" onClick={handleToggleHeader}>{barIcon}</button>
        </div>

      </div>

      <section
        className='flex items-center lg:justify-center flex-wrap gap-5 relative pb-3 sm:px-10 px-4 border-gray-500 border-b lg:min-h-[80px] max-lg:min-h-[60px]'>
        <a className="cursor-pointer max-sm:-mt-4" onClick={() => { navigate('/'); setSelectedButton(1) }} ><img src='images/logo_black.png' alt="logo"
          className=' w-24' />
        </a>

        <div className="space-x-4 md:absolute md:right-10 flex items-center max-md:ml-auto">
          <div className="w-7 h-7 max-md:mt-4 flex items-center justify-center rounded-md text-gray-800 hover:bg-blue-600 hover:text-white transition-all">
            {facebookIcon}
          </div>
          <div className="w-7 h-7 max-md:mt-4 flex items-center justify-center rounded-md text-gray-800 hover:bg-blue-600 hover:text-white transition-all">
            {linkedinIcon}
          </div>
          <div className="w-7 h-7 max-md:mt-4 flex items-center justify-center rounded-md text-gray-800 hover:bg-black hover:text-white transition-all">
            {xIcon}
          </div>
        </div>
      </section>


    </header>
  )
}


export default Header

