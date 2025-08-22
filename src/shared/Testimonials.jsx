  import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";
import { useEffect } from "react";

import { Rating } from '@smastrom/react-rating'
import rating from '../assets/rating.png'
import '@smastrom/react-rating/style.css'
//
/*






  
      
*/
const Testimonials = () => {
    const[reviews,setReview]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div className="my-12">
    
        <SectionTitle heading={'TESTIMONIALS'} subHeading={'What Our Clients Say'}></SectionTitle> 
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
      {
reviews.map(review=><SwiperSlide>
   <div className="text-center w-3/4 mx-auto flex flex-col gap-2 my-4">
        <div className="flex justify-center"><Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /></div>
        <div className="flex justify-center"><img className="w-20" src={rating} alt="" /></div>
        <div className="text-4xl">{review.name}</div>
        <div className="text-xl">{review.details}</div>
    </div>
</SwiperSlide>)
      }
      </Swiper> 
        </div>
    );
};

export default Testimonials;