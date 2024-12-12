import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openMenu } from '../store/slices/globalSlice'
import { useLocation } from 'react-router-dom'

const SideBar = () => {

  const isMenuOpen = useSelector((store)=> store.global.isMenuOpen)

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(openMenu(location.pathname === '/'))
  }, [location.pathname])

  if(!isMenuOpen) return null

  return (
    <div className='w-[15%]'>
      <ul className='py-4 px-2 gap-2 mx-4 border-b-2'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <ul className='py-4 px-2 gap-2 mx-4 border-b-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <ul className='py-4 px-2 gap-2 mx-4 border-b-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar