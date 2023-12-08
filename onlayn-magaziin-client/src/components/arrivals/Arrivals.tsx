//@ts-nocheck
import { arrivals } from "../../constants";
import ArrivalsCard from "./ArrivalsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TitleText, TypingText } from "../CustomTitle";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

interface IArrivalItem {
  id: number;
  image: any;
  title: string;
  price: string;
}

const Arrivals = () => {
  return (
    <div className="container">
      <motion.div 
       variants={staggerContainer}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.25 }}
      className="w-full flex items-center justify-center flex-col text-center"
      >
        <TypingText
          title="New arrivals "
          textStyles="text-[2rem] font-[500] mb-4"
        />
        <TitleText
          title="Check out our latest arrivals for the upcoming season See the collection here"
          textStyles="text-[0.9rem]"
        />
      </motion.div>

      <Swiper
        className="mt-10 flex items-center"
        loop={true}
        slidesPerView={5}
        speed={2000}
        pagination={true}
        // onSwiper={(swiper:any) => setSwiperRef(swiper)}
        modules={[Autoplay, Pagination]}
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
    </div>
  );
};

export default Arrivals;
