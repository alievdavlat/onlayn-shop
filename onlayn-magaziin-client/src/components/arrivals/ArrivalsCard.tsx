import React from "react"

type Props = {
  id:number,
  image:any,
  title:string,
  price:string,
}

const ArrivalsCard:React.FC<Props> = ({image, price, title}) => {
  return (
    <div className=" h-[17rem] bg-slate-700  rounded-[30px]">
      
    <div className="w-full h-[13rem]">
      <img src={image} alt="arrival"  className="w-full h-full object-cover rounded-t-[30px]"/>
    </div>

      <div className="p-3">
        <h5 className="text-white text-[0.7rem]">{title}</h5>
        <p  className="text-white text-[0.7rem]"> ${price}</p>
      </div>
    </div>
  )
}

export default ArrivalsCard