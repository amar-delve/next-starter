import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from '../extra/TestimonialCard';

const TestimonialSlider = ({ testimonials }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
