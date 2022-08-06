import React from "react";
import "./testimonials.css";
import AVT1 from '../../asset/anh1.jpg'
import AVT2 from '../../asset/anh1.jpg'
import AVT3 from '../../asset/anh1.jpg'
import AVT4 from '../../asset/anh1.jpg'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avata: AVT1,
    name: 'cc',
    review: 'Chào bạn, mình là minh. Mình đến từ thành phố chicago của thủ đô nước nào đó. Rất vui khi được làm quen và gặp gỡ bạn. Chúng ta từng quen nhau chăng. Đây la một vài thông tin của tôi và từ tôi.'
  },
  {
    avata: AVT2,
    name: 'cc',
    review: 'Chào bạn, mình là minh. Mình đến từ thành phố chicago của thủ đô nước nào đó. Rất vui khi được làm quen và gặp gỡ bạn. Chúng ta từng quen nhau chăng. Đây la một vài thông tin của tôi và từ tôi.'
  },
  {
    avata: AVT3,
    name: 'cc',
    review: 'Chào bạn, mình là minh. Mình đến từ thành phố chicago của thủ đô nước nào đó. Rất vui khi được làm quen và gặp gỡ bạn. Chúng ta từng quen nhau chăng. Đây la một vài thông tin của tôi và từ tôi.'
  },
  {
    avata: AVT4,
    name: 'cc',
    review: 'Chào bạn, mình là minh. Mình đến từ thành phố chicago của thủ đô nước nào đó. Rất vui khi được làm quen và gặp gỡ bạn. Chúng ta từng quen nhau chăng. Đây la một vài thông tin của tôi và từ tôi.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avata, name, review},index) =>{
            return(
              <SwiperSlide  key={index} className="testimonial">
                <div className="client_avata">
                  <img src={avata} alt="avatar" />
                </div>
                <h5>{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
