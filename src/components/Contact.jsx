import { useEffect } from "react"

const Contact = () => {

  useEffect(() => {
    // scrollTo(0, 0)
  }, [])

  return (
    <div className="font-[sans-serif] bg-[#fde4c6]">
      <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
        <img src="images/contact-bg.jpg" alt="Banner Image" className="w-full h-full object-cover" />
      </div>

      <div className="-mt-20 pb-16 px-4 ">
        <div className="max-md:m-5 mx-auto max-w-6xl shadow-lg p-5 relative bg-[#fff] rounded ">
          <h2 className="text-xl text-gray-800 font-bold text-center">Contact Lusaka Motors Team </h2>

          <form className="mt-8 grid sm:grid-cols-2 gap-6  md:p-10">
            <div>
              <label className="text-gray-800 text-sm block mb-2">Your Name</label>
              <input type='text' placeholder='Enter Name'
                className="w-full rounded py-2.5 px-4 bg-white focus:bg-[#dcf4f7] border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Your Email</label>
              <input type='email' placeholder='Email'
                className="w-full rounded py-2.5 px-4 bg-white focus:bg-[#dcf4f7] border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Your Number</label>
              <input type='email' placeholder='Phone No.'
                className="w-full rounded py-2.5 px-4 bg-white focus:bg-[#dcf4f7] border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Subject</label>
              <input type='text' placeholder='Subject'
                className="w-full rounded py-2.5 px-4 bg-white focus:bg-[#dcf4f7] border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div className="col-span-full">
              <label className="text-gray-800 text-sm block mb-2">Message</label>
              <textarea placeholder='Message' rows="6"
                className="w-full rounded px-4 border bg-white border-gray-300 text-sm pt-3 focus:border-blue-600 outline-none"></textarea>
            </div>

            <button type='button'
              className="col-span-full text-white w-max bg-[#007bff] hover:bg-blue-600 tracking-wide rounded text-sm px-4 py-2.5 flex mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
              </svg>
              Send Message
            </button>
          </form>

          <section >
            <div className="container px-6 pb-12 mx-auto">

              <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="lg:border-r border-blue-400 ">
                  <span className="inline-block p-3 text-blue-500 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                      stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
                  <p className="mt-2 text-gray-500 ">Our friendly team is here to help.</p>
                  <p className="mt-2 text-blue-500 ">hello@merakiui.com</p>
                </div>

                <div>
                  <span className="inline-block p-3 text-blue-500 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                      stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-gray-800">Office</h2>
                  <p className="mt-2 text-gray-500">Come say hello at our office HQ.</p>
                  <p className="mt-2 text-blue-500">100 Smith Street Collingwood VIC 3066 AU</p>
                </div>

                <div  className="lg:border-l border-blue-400 lg:pl-10">
                  <span className="inline-block p-3 text-blue-500 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                      stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-gray-800 ">Phone</h2>
                  <p className="mt-2 text-gray-500">Mon-Fri from 8am to 5pm.</p>
                  <p className="mt-2 text-blue-500">+1 (555) 000-0000</p>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact