import React from 'react'
import single from "../component/assest/single.png"
import triple from "../component/assest/triple.png"
import double from "../component/assest/double.png"

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="single"/>
                    <h2 className='text-2xl font-bold text-center py-8'>single user</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                     <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                     </div>
                     <button className='py-2 text-[black] font-bold bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto' type='sumbit'>Start Trial</button>
                </div>
                <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="single"/>
                    <h2 className='text-2xl font-bold text-center py-8'>single user</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                     <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                     </div>
                     <button className='py-2 text-[#47a053] font-bold bg-[#0a0a0a] w-[150px] rounded-md my-6 mx-auto' type='sumbit'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="single"/>
                    <h2 className='text-2xl font-bold text-center py-8'>single user</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                     <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                     </div>
                     <button className='py-2 text-[black] font-bold bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto' type='sumbit'>Start Trial</button>
                </div>
            </div>
    </div>
  )
}

export default Cards