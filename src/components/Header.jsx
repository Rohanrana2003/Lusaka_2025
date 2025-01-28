import { useContext, useRef, useState } from "react"
import { barIcon, crossIcon, downArrow, facebookIcon, linkedinIcon, xIcon } from "../utils/constants"
import { useNavigate } from "react-router-dom";
import { headerButtons } from "../utils/constantData";
import MyContext from "../context/MyContext";

const Header = () => {

  const [selectedButton, setSelectedButton] = useContext(MyContext);
  const [showEvents, setShowEvents] = useState(false)
  const collapseMenu = useRef();
  const navigate = useNavigate();


  const handleToggleHeader = () => {
    if (collapseMenu.current.style.display === 'block') {
      collapseMenu.current.style.display = 'none';
    } else {
      collapseMenu.current.style.display = 'block';
    }
  }

  const handlePageRedirect = (item) => {
    if(item.pathName === 'events'){
      return;
    }
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

      <div className='flex flex-wrap pt-8 max-sm:pt-5 lg:pb-6 px-10 overflow-x-auto '>

        <div id="collapseMenu" ref={collapseMenu}
          className='w-full max-sm:hidden sm:!block max-sm:before:fixed max-sm:before:bg-black max-sm:before:opacity-50 max-sm:before:inset-0 max-sm:before:z-50'>

          <button id="toggleClose" onClick={handleToggleHeader} className='sm:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            {crossIcon}
          </button>

          <ul
            className='sm:flex sm:justify-center sm:gap-x-10 max-sm:space-y-3 max-sm:fixed max-sm:bg-[#f9a334] 
              max-sm:w-1/2 max-sm:min-w-[300px] max-sm:top-0 max-sm:left-0 max-sm:p-6 max-sm:h-full max-sm:shadow-md 
              max-sm:overflow-auto z-50 '>
            <li className='mb-6 hidden max-sm:block'>
              <a href="javascript:void(0)"><img src="images/logo_black.png" alt="logo" className='w-36' />
              </a>
            </li>


            {
              headerButtons.map((item, i) => (
                <li key={i} className='max-sm:border-b max-sm:py-3 '>

                  <a href='javascript:void(0)' onMouseOver={() => showEventsButton(item)}
                    onClick={() =>{handlePageRedirect(item); showEventsButton(item)}} onMouseLeave={() => setShowEvents(false)}
                    className={`flex items-center gap-[3px] font-[600] text-[16px] max-md:text-[15px] 
                   transition-all duration-300 ${selectedButton === item.id ? 'text-white' : 'text-black'}`} >
                    {item.name} {item.pathName ==='events'? downArrow:''}

                    {/* dropdown events list */}
                    {item.subComponents && showEvents &&
                      <ul className="absolute bg-white w-fit py-2 max-sm:mt-[150px] sm:top-14 max-sm:w-[80%] max-sm:px-1 max-sm:pb-1 max-sm:rounded h-fit z-20 rounded-lg">
                        {item.subComponents.map((subItem) => (
                          <li key={subItem.name} onClick={()=>handlePageRedirect(subItem)}
                            className="text-black px-5 transition-all duration-100 max-sm:mb-1 max-sm:bg-green-900 max-sm:text-white py-1 text-sm hover:bg-green-900 rounded hover:text-white" >
                            {subItem.name}
                          </li>
                        ))}
                      </ul>
                    }

                  </a>
                </li>

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
        className='flex items-center lg:justify-center flex-wrap gap-5 relative pb-3 sm:px-10 px-4 border-gray-500 border-b lg:min-h-[80px] max-lg:min-h-[60px]'>
        <a className="cursor-pointer max-sm:-mt-4" onClick={() => { navigate('/'); setSelectedButton(1) }} ><img src='images/logo_black.png' alt="logo"
          className=' w-24' />
        </a>

        <div className="space-x-4 md:absolute md:right-10 flex items-center max-md:ml-auto">
          <div className="w-7 h-7 max-sm:mt-4 flex items-center justify-center rounded-md text-gray-800 hover:bg-blue-600 hover:text-white transition-all">
            {facebookIcon}
          </div>
          <div className="w-7 h-7 max-sm:mt-4 flex items-center justify-center rounded-md text-gray-800 hover:bg-blue-600 hover:text-white transition-all">
            {linkedinIcon}
          </div>
          <div className="w-7 h-7 max-sm:mt-4 flex items-center justify-center rounded-md text-gray-800 hover:bg-black hover:text-white transition-all">
            {xIcon}
          </div>
        </div>
      </section>


    </header>
  )
}


export default Header

