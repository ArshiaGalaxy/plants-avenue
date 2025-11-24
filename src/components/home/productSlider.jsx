import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductSlider({
  children
}){
    return (
      <Swiper slidesPerView={2} breakpoints={{
        640:{
          slidesPerView: 3
        },
        768:{
          slidesPerView: 4
        },
        1024:{
          slidesPerView: 5
        }
      }
      } spaceBetween={'16px'} modules={[Pagination]} pagination={{ clickable: true }} className="[&>.swiper-wrapper]:mb-10 [&>.swiper-pagination>.swiper-pagination-bullet-active]:bg-green-300! pb-40">
        {children.map(child=>(
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    )
  }