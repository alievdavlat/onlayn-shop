// @ts-nocheck

import { advantagesItems } from '../../constants'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion';


type Props = {}

interface IAdvantagesItem {
  id:number;
  title:string;
  subtitle:string;
  icon:any;
}

const Advantages = () => {
  return (
    <div className="container">
      <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className='flex items-center justify-center gap-10 mt-[7rem]'
    >
      
      {
      advantagesItems.map((item:IAdvantagesItem, index:number) => (
        <motion.div
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          key={item.id} 
          className='text-center w-[12rem]  p-2'
         >
          <div className='flex items-center justify-center w-full'>
            <img src={item.icon} alt="icon" />
          </div>

            <div>
                <h4 className='text-[0.8rem] mt-4 mb-3'>
                  {item.title}
                </h4>
                <p className='text-[0.6rem]'>
                  {item.subtitle}
                </p>
            </div>
        </motion.div>
      ))
      }

    </motion.div>
    </div>
  )
}

export default Advantages