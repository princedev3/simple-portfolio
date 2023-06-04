import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold md:py-6 uppercase'> growing with data analytics</p>
                <h1 className='md:text-7xl sm:-6xl text-4xl font-bold capitalize md:py-6 py-2'>grow with data.</h1>
                <div  className='md:text-5xl sm:text-4xl text-xl font-bold flex justify-center items-center md:pl-4 py-3' >
                    <p className='pr-2'>fast, flexible financing for </p>
                    <Typewriter options={{ strings: ['BTB', 'BTC',"SASS"], autoStart: true, loop: true, }}/>
                </div>
                <p className='md:text-2xl text-xl font-bold  text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC, & SASS platform</p>

                <button className='py-2 text-[black] font-bold bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto'>GET STARTED</button>
        </div>
    </div>
  )
}
//{}[]
export default Hero