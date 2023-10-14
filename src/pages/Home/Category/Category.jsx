import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/sectionTitle';


const Category = () => {
    return (
      
        <div>
          <SectionTitle
      
      subHeading={'From 10 am to 10 pm'}
      heading={'Order Online'}
      ></SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-center -mt-10 text-white uppercase'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='text-center -mt-10 text-white uppercase'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h1 className='text-center -mt-10 text-white'>SOUP</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Category;