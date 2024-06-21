'use client'

import React, { useState } from 'react'
import netflixlogo from '@/assets/netflixlogo.png';
import Image from 'next/image';

const NavbarComponent = (props: {isNav:boolean, setIsNav:(input:boolean) => void}) => {

  return (
    <div className='h-[80px] flex px-[60px] bg-[#080707] sticky top-0 z-50'>
        <h1 className='text-[#E7442E] font-semibold text-[45px] my-auto cursor-pointer'><a href="#">HarryPotterflix</a></h1>
        <p 
        onClick={() => {
            props.setIsNav(true)
        }}
        className={props.isNav ? `text-white my-auto ms-16 cursor-pointer font-bold` : `text-[#c8c8c8] my-auto ms-16 cursor-pointer text-[17px]`}>Importance</p>
        <p 
        onClick={() => {
            props.setIsNav(false)
        }}
        className={props.isNav ? `text-[#c8c8c8] my-auto ms-16 cursor-pointer text-[17px]` : 'text-white my-auto ms-16 cursor-pointer font-bold'}>House</p>
    </div>
  )
}

export default NavbarComponent
