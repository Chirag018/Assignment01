import React from 'react'
import logo from '../assets/logo.png'
import { FiSearch } from 'react-icons/fi'
import { BiMenuAltRight } from 'react-icons/bi'

function Header() {
    return (
        <div className='header flex items-center justify-between border-2'>
            <div className='left flex m-4 px-10'>
                <img src={logo} />
                <div className='pl-1 pt-2'>
                    <h1 className='font-bold '><span className='text-orange-400'>SKILLY</span> TREE</h1>
                    <h6 className='text-xs'>Upskill with a personal touch</h6>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center mr-10 '>
                    <input className='border-2 rounded-full p-2 px-14 ' type='text' placeholder='SEARCH A SKILL' />
                    <FiSearch className='absolute ml-64' />
                </div>
                <BiMenuAltRight />
                <button className='rounded-full px-7 py-3'>Log in</button>
                <button className='bg-orange-500 rounded-full px-7'>Sign In</button>
            </div>
        </div>
    )
}

export default Header