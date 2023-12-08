// @ts-nocheck
import { Gallery as GallerGrid } from "react-grid-gallery";
import { motion } from "framer-motion";
import { Image } from "react-grid-gallery";
import { TypingText } from "../CustomTitle";
import { staggerContainer } from "../../utils/motion";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    original: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    width: 320,
    height: 213,
    caption: "201H (gratisography.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    original: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    alt: "Big Ben - London",
    width: 248,
    height: 320,
    caption: "Big Ben (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    original: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    alt: "Red Zone - Paris",
    width: 320,
    height: 113,
    tags: [{ value: "People", title: "People" }],
    caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    original: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    alt: "Wood Glass",
    width: 313,
    height: 320,
    caption: "Wood Glass (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    original: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    width: 320,
    height: 213,
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    original: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    width: 320,
    height: 194,
    caption: "Old Barn (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    original: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    alt: "Cosmos Flower",
    width: 320,
    height: 213,
    caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    original: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    width: 271,
    height: 320,
    caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    original: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    width: 320,
    height: 213,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "People", title: "People" },
    ],
    caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    original: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    width: 320,
    height: 213,
    tags: [
      { value: "People", title: "People" },
      { value: "Sport", title: "Sport" },
    ],
    caption: "Man on BMX (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    original: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    width: 320,
    height: 213,
    caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    original: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    width: 320,
    height: 213,
    caption: "Time to Think (Tom Eversley - isorepublic.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    original: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    width: 320,
    height: 179,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Fauna", title: "Fauna" },
    ],
    caption: "Untitled (Jan Vasek - jeshoots.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
  {
    src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    original: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    width: 320,
    height: 215,
    tags: [{ value: "People", title: "People" }],
    caption: "Untitled (moveast.me)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  }
  
];

const Gallery = () => {

  return (
    <div className='mt-10'>
      <motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.25 }}
       className="flex items-center justify-center mb-5"
       >
        <TypingText title="  Our Popular Products " textStyles="text-[2rem]"/>
      </motion.div>
    <GallerGrid
      images={images}
      enableImageSelection={false}
    />
  </div>
);
  
}

export default Gallery