import React from 'react'
import logopng  from '../assets/logo-png-white.png'
import { navarItems } from '../constants'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";


type Props = {}

interface INavbarItem {
  id:number,
  title_ru:string,
  title_uz:string,
  title_en:string,
  path:string
}

const Header = () => {

  const [activeNavitem , setActiveNavitem] = React.useState(0)

  return (
    <div className='flex items-center justify-between p-5 bg-slate-900  '>

      <Link to={'/'} className='w-[7rem]'>
        <img src={logopng} alt="logo-header"  className='w-full h-full object-cover'/>
      </Link>

      <ul className='flex items-center'>
        {
          navarItems?.map((item:INavbarItem, index:number) => (
            <Link to={item.path} key={item.id} onClick={() => setActiveNavitem(index)}>
                <li className={`${index === activeNavitem  ? 'text-[#b4b4b4]' : 'text-[#fff]'} px-5 text-[0.8rem] hover:underline underline-offset-5 transition-all duration-[0.2s] ease-in` }>
                  {item.title_en}
                </li>
            </Link>
          ))
        }

        <Link to={''}  className='text-white mr-4'>
        <FaShoppingBag size={22} />
        </Link>

        <Link to={''}  className='p-1 bg-white rounded-full flex items-center justify-center hover:bg-[#8b8a8a]'>
        <FiShoppingCart size={22} />
        </Link>
      </ul>

    </div>
  )
}

export default Header