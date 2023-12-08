import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { heroSliderItem } from '../constants';


type Props = {}


interface HeroSlideItem {
  id:number,
  image:any
}

const Hero = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s:any,  time:any, progress:any) => {
    (progressCircle.current as any).style.setProperty('--progress', 1 - progress);
    (progressContent.current as any).textContent = `${Math.ceil(time / 1000)}s`;
  };


  return (
    <section className='h-[35rem] mt-1'>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={'fade'}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >

        {
          heroSliderItem.map((slide:HeroSlideItem) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt="slider" />
          </SwiperSlide>

          ))
        }      
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  </section>

  )
}

export default Hero