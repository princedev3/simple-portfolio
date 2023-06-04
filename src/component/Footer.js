import React from 'react'
import { FaDribbbleSquare,FaInstagram,FaFacebook,FaTwitterSquare,FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Hector.</h1>
        <p className='py-4'>octopus mooched off his girlfriend and watched TV. But then the winter came, and</p>
        <div className='flex md:w-[75%] my-6 justify-between'>
            <FaDribbbleSquare size={30} />
            <FaFacebook size={30} />
            <FaGithubSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-3'>

        
        <div>
            <h6 className='font-mediun text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Insight</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Analytics</li>
            </ul>
        </div>
        <div>
            <h6 className='font-mediun text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentaion</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>Api Status</li>
            </ul>
        </div>
      
        <div>
            <h6 className='font-mediun text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-mediun text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
        </div>
        </div>
        </div>
  )
}
////{}[]
export default Footer