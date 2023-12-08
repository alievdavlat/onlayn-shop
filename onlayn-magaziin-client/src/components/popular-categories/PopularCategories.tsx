// @ts-nocheck
import { popularCategories } from '../../constants'
import { staggerContainer } from '../../utils/motion';
import { TypingText } from '../CustomTitle';
import BallCanvas from './Ball';
import { motion } from 'framer-motion';


interface IPopularCategoryItem {
  id:number;
  title:string;
  image:any;
}

const PopularCategories = () => {
  return (
    <div className='container'>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className='w-full mt-20 mb-10 flex items-center  justify-center'
      >
        <TypingText title=' Popular categories' textStyles='text-[2rem]'/>
      </motion.div>

     <div className='flex items-center  justify-center gap-10'>
     {
        popularCategories.map((item:IPopularCategoryItem) => (
          <div key={item.id} className='w-[6rem] h-[6rem] flex items-center justify-center flex-col'>
            <BallCanvas icon={item.image} />
            <h4 className='text-[0.7rem] '>{item.title}</h4>
          </div>
        ))
      }
     </div>

    </div>
  )
}

export default PopularCategories