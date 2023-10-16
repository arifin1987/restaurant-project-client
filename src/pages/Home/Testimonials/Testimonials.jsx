import SectionTitle from "../../../components/sectionTitle";

import  { useEffect,  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';


const Testimonials = () => {
    const[reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data=> setReviews(data));
    },[])
    return (
        <div className="my-4">
            <SectionTitle
            subHeading={'What our client say'}
            heading={'Testimonials'}
            ></SectionTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {
            reviews.map(review=>  <SwiperSlide
            key={review._id}
            >
                <div className="m-20"> 
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-300">{review.name}</h3>
                </div>

            </SwiperSlide>)
        }
      </Swiper>
            
        </div>
    );
};

export default Testimonials;