import { Link } from 'react-router-dom'
import logopng  from '../assets/logo-png-white.png'
import { Socials } from '.'

import { RiContactsFill } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-slate-900 h-[10rem] mt-10'>

      <div className="container">
        <div className="flex items-center justify-around">
       
        <div className='w-[7rem] flex items-center justify-center flex-col gap-5 mt-5'>
        <Link to={'/'} >
        <img src={logopng} alt="logo-header"  className='w-full h-full object-cover'/>
        </Link>
      
        <Socials/>
        </div>

        <ul className='mt-3'>
          <h4 className='mb-4'>
            Pages
          </h4>

          <li className='text-[0.7rem] mb-2'>
            Faq
          </li>
          <li className='text-[0.7rem] mb-2'>
            Contact us
          </li>

          <li className='text-[0.7rem] mb-2'>
            Blog
          </li>

        </ul>

        <ul className='mt-3'>

        <h4 className='mb-4'>
            Profile
        </h4>
          <li className='text-[0.7rem] mb-2 flex items-center gap-1'>
            <RiContactsFill size={24} fill={'white'} />  My Account
          </li>

          <li className='text-[0.7rem] mb-2 flex items-center gap-1'>
          <IoBagCheckOutline size={24} fill={'white'} />
           Checkout
          </li>

          <li className='text-[0.7rem] mb-2 flex items-center gap-1'>
          <FaHome size={24} fill={'white'} />
          Order Tracking
          </li>

          <li className='text-[0.7rem] mb-2 flex items-center gap-1'>
          <FaHandsHelping  size={24} fill={'white'}/>
            Help & Support
          </li>
        </ul>
      
        </div>
      </div>

    </div>
  )
}

export default Footer