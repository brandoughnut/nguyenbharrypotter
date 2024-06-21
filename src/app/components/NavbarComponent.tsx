import React from 'react'
import netflixlogo from '@/assets/netflixlogo.png';
import Image from 'next/image';

const NavbarComponent = () => {
  return (
    <div className='h-[80px] flex px-[60px] bg-[#080707] sticky top-0'>
        <Image className='w-auto h-[50px] my-auto cursor-pointer' src={netflixlogo} alt="netflix logo" />
        <p className='text-white my-auto ms-16 cursor-pointer font-semibold'>Home</p>
    </div>
  )
}

export default NavbarComponent
