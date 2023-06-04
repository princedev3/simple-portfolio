import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl font-bold py-6'>Want tips & tricks to optimize your flow? </h1>
                <p>sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-2 outline-none flex w-full rounded-md text-black from-stone-900 text-xl ' type='email' placeholder='Enter Email '/>
                        <button className='py-2 text-[white] font-bold bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto md:ml-4'>Notify ME</button>
                    </div>
                        <p>we care about the protection of your data. read our <span className='text-[#00df9a]'>privacy policy.</span></p>
            </div>
        </div>
    </div>
  )
}
////{}[]
export default Newsletter