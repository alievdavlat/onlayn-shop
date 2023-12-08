import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../../utils/motion"
import { TitleText, TypingText } from "../CustomTitle"
import banner from '../../assets/banner-subscribe.png'


const SubscribeForm = () => {
  return (
    <section className="container">
      <motion.div 
       variants={staggerContainer}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.25 }}      
       className="mt-20 mb-10 flex items-center justify-center flex-col text-center"
      >
         <TypingText
          title="Subscirbe for updates"
          textStyles="text-[2rem] mb-2"
        />
        <TitleText
          title="Subscribe for exclusive early sale access and new arrivals."
          textStyles="text-[0.6rem]"
        />
      </motion.div>

        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex items-center justify-center"
        >

        <motion.form 
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex gap-10 flex-col items-center  container justify-center w-[50%]"
        >
    
          <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Your working email" className="bg-transparent text-[0.6rem] p-2 outline-none" style={{border:'1px solid #19595E'}}  />
          </div>

          
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Phone Number</label>
            <input type="text" placeholder="Your available number" className="bg-transparent text-[0.6rem] p-2 outline-none" style={{border:'1px solid #19595E'}} />
          </div>
          
         <div className="flex items-start w-full">
         <button  className=" customBtn p-1 text-[0.8rem] bg-[#17696A] outline-none text-white">
            Subscribe         
          </button>
         </div>

        </motion.form>

        <motion.div 
        variants={fadeIn('left', 'tween', 0.3, 1)}
        className="w-[40%]"
        >
          <img src={banner} alt="banner" />
        </motion.div>
        </motion.div>
    </section>
  )
}

export default SubscribeForm