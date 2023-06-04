import React from 'react'
import laptop from "../component/assest/laptop.jpg"

const Analytics = () => {
  return (
    <div className='bg-white py-16 px-4 w-full'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt='laptop'/>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] uppercase font-bold'>data analytics dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl capitalize font-bold py-2'>manage data analytics centrally</h1>
                    <p>
                    octopus mooched off his girlfriend and watched TV. But then the winter came, and the grasshopper died, and the octopus ate all his acorns. Also he got a race car. Is any of this getting through to you? Yes! In your face, Gandhi!
                    </p>
                    <button className='py-2 text-[black] font-bold bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto'>GET STARTED</button>
                </div>
        </div>
    </div>
  )
}
//{}[]
export default Analytics