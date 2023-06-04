import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"


const Navbar = () => {

    const[nav,setNav]= useState(false)

    const handleNav =()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Hector.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4' >Home</li>
            <li className='p-4' >Company</li>
            <li className='p-4' >Resources</li>
            <li className='p-4' >About</li>
            <li className='p-4' >Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
        {
           nav?<FaTimes size={25}/>:<FaBars size={25} color='white'/>
        }
        </div>
        <div className={nav?'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-800 bg-[#000] ease-in-out duration-500':"fixed top-0 left-[-100%] ease-in-out duration-500 "} >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] mt-6 ml-5'>Hector.</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600' onClick={()=>setNav(false)}>Home</li>
            <li className='p-4 border-b border-gray-600' onClick={()=>setNav(false)}>Company</li>
            <li className='p-4 border-b border-gray-600' onClick={()=>setNav(false)}>Resources</li>
            <li className='p-4 border-b border-gray-600' onClick={()=>setNav(false)} >About</li>
            <li className='p-4' onClick={()=>setNav(false)}>Contact</li>
        </ul>
            
        </div>
    </div>
  )
}
//{}[]
export default Navbar


