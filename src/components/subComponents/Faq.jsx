import { faqData } from "../../utils/constantData"
import { faqIcon } from "../../utils/constants"


const Faq = () => {
    return (
        <section className="font-sans bg-slate-200 ">
            <div className="container py-12 mx-auto">
                <h1 className="lg:text-3xl mb-10 text-gray-800 font-[sans-serif] text-3xl font-bold text-center">Frequently Asked Questions.</h1>

                <div className="flex flex-col md:flex-row md:gap-16 mt-16 lg:px-10 ">

                    <div className="min-w-[350px] lg:min-w-[450px] max-md:p-10 max-sm:-mt-10">
                        <img src="images/faq-image.jpg" />
                    </div>

                    <div className=" flex flex-col max-md:px-10 gap-8 md:max-h-[350px] lg:max-h-[430px] overflow-y-auto">

                        {
                            faqData.map((item) => (
                                <div key={item.id}>
                                    <div className="inline-block p-3 text-white bg-[#f9a334] rounded-lg">{faqIcon}</div>

                                    <div>
                                        <h1 className="text-xl font-semibold text-gray-700 ">{item.title}</h1>
                                        <p className="mt-2 text-sm text-gray-500 text-justify">{item.content} </p>
                                    </div>
                                </div>
                            ))

                        }

                    </div>

                </div>


            </div>
        </section>
    )
}

export default Faq