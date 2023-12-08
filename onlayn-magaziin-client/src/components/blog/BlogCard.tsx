import React from 'react'
import { FaComments } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';


type Props = {
  id:number;
  title:string;
  tag:string;
  date:string;
  comments:Array<string | number>;
  image:any;
  description:string;
  index:number;
}

const BlogCard:React.FC<Props> = ({comments, date, description, image, title, tag, index}) => {
  return (
    <motion.div           
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className='w-[20rem] h-[18rem] bg-slate-700'
    >
      <div className='w-full mb-5'>
        <img src={image} alt="image-blog" className='w-full h-full object-cover' />
      </div>

      <div className='px-2 pb-2'>
          <h3 className='text-[0.8rem]'>
            {title}
          </h3>

        <div className='flex mb-5 text-[0.5rem] gap-2 mt-2 text-slate-300'>
          <span>{tag}</span>
          <span>{date}</span>
          <span className='flex gap-1 items-center'>
          <FaComments />
          <>{comments.length > 0 ? `${comments.length} Comments` : "No Comments"}</>
          </span>
        </div>
        <div className='text-slate-300'>
          <p className='text-[0.6rem]'>{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogCard