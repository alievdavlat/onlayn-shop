//@ts-nocheck
import { TitleText, TypingText } from "../CustomTitle";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import { Link } from "react-router-dom";
import { blogItems } from "../../constants";
import BlogCard from "./BlogCard";

interface IBlogItem {
  id:number;
  title:string;
  tag:string;
  date:string;
  comments:Array<string | number>;
  image:any;
  description:string;
}


const Blog = () => {
  return (

    <div className="container">
      <motion.div 
       variants={staggerContainer}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.25 }}
      className="w-full flex items-center justify-between px-8  mt-20 mb-10 text-center"
      >
        <TypingText
          title="Fashion blog"
          textStyles="text-[2rem] font-[500] mb-4"
        />

        <Link to={'/'} className="text-[#17696A]  customBtn p-1 text-[0.8rem] hover:bg-[#17696A] hover:text-white">
          Show More          
        </Link>
      </motion.div>


      <motion.div 
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}
       className="flex gap-10 items-center container "
      >
      
      {
      blogItems.map((item:IBlogItem , index:number) => (
        <BlogCard  {...item} index={index} key={item.id}/>
      ))
      }

      </motion.div>
    

    </div>
  )
}

export default Blog