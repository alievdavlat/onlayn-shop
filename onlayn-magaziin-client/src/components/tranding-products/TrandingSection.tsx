//@ts-nocheck
import React from "react";
import { arrivals } from "../../constants";
import ArrivalsCard from "../../components/arrivals/ArrivalsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TitleText, TypingText } from "../CustomTitle";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

interface IArrivalItem {
  id: number;
  image: any;
  title: string;
  price: string;
}
const TrandingSection = (props: Props) => {
  const [swiperRef, setSwiperRef] = React.useState<any>(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div className="container ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="w-full mt-20 flex items-center justify-between p-2 text-center">
        <TypingText
          title="Tranding Now"
          textStyles="text-[2rem] font-[500] mb-4"
        />

        <div className="flex gap-5">
          <span
            className="w-[2rem] h-[2rem] cursor-pointer hover:bg-[#17696A] border-1 border-solid border-white flex items-center justify-center rounded-full"
            onClick={prevHandler}>
            <IoIosArrowBack />
          </span>
          <span
            className="w-[2rem] h-[2rem] cursor-pointer hover:bg-[#17696A] border-1 border-solid border-white flex items-center justify-center rounded-full"
            onClick={nextHandler}>
            <IoIosArrowForward />
          </span>
        </div>
      </motion.div>

      <Swiper
        className="mt-10 flex items-center"
        loop={true}
        slidesPerView={5}
        speed={2000}
        onSwiper={(swiper: any) => setSwiperRef(swiper)}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          380: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}>
        {arrivals.map((item: IArrivalItem) => (
          <SwiperSlide key={item.id} className=" mb-[100px] rounded-[30px]">
            <ArrivalsCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex  items-start">

        <Link to={'/'} className="text-[#17696A]  customBtn p-1 text-[0.8rem] hover:bg-[#17696A] hover:text-white">
          Show More          
        </Link>

      </div>
    </div>
  );
};

export default TrandingSection;
