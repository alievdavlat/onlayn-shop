import React from "react";
import { IoEyeSharp } from "react-icons/io5";


type Props = {
  index?:number;
  id?:number;
  title:string;
  image?:any
}

const MainCategoriesCard:React.FC<Props> = ({ title, image}) => {
  return (
    <div className="w-[10rem] main_category relative  cursor-pointer ">
        <div className="main_category--overlay flex items-center justify-center">
        <IoEyeSharp size={25} fill={'white'} />
        </div>
      <div className="w-full h-[8rem]">
        <img src={image} alt="category" className="w-full h-full" />
      </div>

      <div className="flex items-center justify-center p-1">
        <h4>
        {title}
        </h4>
      </div>
    </div>
  )
}

export default MainCategoriesCard