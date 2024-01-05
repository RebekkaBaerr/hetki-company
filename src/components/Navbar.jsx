import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Paricles from '../components/Paricles';



const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    };
    useEffect(() => {
      const body = document.body;
  
      if (!nav) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'visible';
      }
  
      return () => {
        // Clean up the effect by restoring the original overflow property when the component unmounts
        body.style.overflow = 'visible';
      };
    }, [nav]);
  

  return (
    <div className=' flex justify-center items-center max-w-4xl mx-auto px-12 text-white'>
      
       <ul className='hidden md:flex flex-grow justify-between font-extralight' >
        <li className='p-2 sm:p-4 hover:underline'>
        <Link to='/'>hetki</Link>
        </li>
        <li className='p-2 sm:p-4 hover:underline'>
          <Link to='/commercial'>creative company</Link>
        </li>
        <li className='p-2 sm:p-4 hover:underline'>
        <Link to='/film'>film company</Link>
        </li>
        <li className='p-2 sm:p-4 hover:underline'>
        <Link to='/creatives'>tekijät</Link>
        </li>
        <li className='p-2 sm:p-4 truncate hover:underline'>
        <Link to='/contact'>yhteystiedot</Link></li> 
        </ul> 
        <div onClick={handleNav} className='block md:hidden fixed right-4 top-10' >
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed object-cover justify-center items-center top-0 w-[100%] h-full bg-black ease-in-out duration-500 z-50': 'fixed left-[-100%]' } >
        <div onClick={handleNav} className='block md:hidden fixed right-4 top-10' >
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            <Paricles/>
        </div>
            <ul className='pt-24 flex flex-col items-center' >
            <li className='p-8 sm:p-8 font-semibold text-4xl italic'>hetki</li>  
            <li className='p-8 sm:p-8 hover:underline'><Link to='/'>home</Link></li>
            <li className='p-8 sm:p-8 hover:underline'><Link to='/commercial'>commercial</Link></li>
            <li className='p-8 sm:p-8 hover:underline'><Link to='/film'>film</Link> </li>
            <li className='p-8 sm:p-8 hover:underline'><Link to='/creatives'>creatives</Link></li>
            <li className='p-8 sm:p-8 hover:underline truncate'><Link to='/contact'>contact us</Link></li> 
            </ul>
        </div>
    </div> 
  )
}

export default Navbar