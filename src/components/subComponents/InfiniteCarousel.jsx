
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import '../../index.css'


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { imgData } from '../../utils/constantData';

const InfiniteCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation = {true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          imgData.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img.imageLink} 
              className='transition-all rounded-md duration-500 cursor-pointer lg:filter lg:grayscale hover:scale-[1.05] lg:hover:grayscale-0 w-72 max-md:w-72 aspect-[4/3] rounde ml-5 object-cover'/>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </>
  )
}

export default InfiniteCarousel