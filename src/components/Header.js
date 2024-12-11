import React, { useRef } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../store/slices/globalSlice'
import { Link } from 'react-router-dom'

const Header = () => {

    const searchRef = useRef()
    const dispatch = useDispatch()
    
    const toggleMenuHandler = ()=>{
       dispatch(toggleMenu())
    }

  return (
    <div className='grid grid-flow-col py-4 shadow-lg'>
        <div className=' col-span-1 flex justify-center self-center gap-x-10'>
            <RxHamburgerMenu className='text-4xl cursor-pointer' 
                onClick={toggleMenuHandler}
            />

            {/* YoutTube logo */}
                <img className='h-7 self-center cursor-pointer'
                    src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png'
                    alt='YoutTube-Logo'
                />
        </div>

        <div className='col-span-10 self-center flex ml-32'>
            <input className='w-1/2 rounded-l-full px-5 border border-gray-400 outline-none'
                type='text'
                ref={searchRef}
                placeholder='search anything'
            />
            <button className='px-3 py-2 rounded-r-full bg-gray-400'>Search</button>
        </div>

        <div className='col-span-1 self-center'>
            <img className='h-8'
            src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg'
            alt='profile-img'
            />
        </div>
    </div>
  )
}

export default Header