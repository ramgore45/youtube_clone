import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../store/slices/globalSlice'
import { Link } from 'react-router-dom'
import { YOUT_TUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../store/slices/searchSlice'

const Header = () => {

    const dispatch = useDispatch()

    const searchCache = useSelector(store=> store.search)

    const [searchQuery, setSearchQuery] = useState()
    const [searchSuggestions, setSearchSuggestions] = useState([])
    const [showSuggetions, setShowSuggestions] = useState(false)

    const fetchSearchSuggestion = async(searchQuery)=>{
        try{
            console.log("search query text = ",searchQuery)
            const data = await fetch(YOUT_TUBE_SEARCH_API+searchQuery)
            const result = await data.json()
            setSearchSuggestions(result[1])
            // update searchCache === passing object {searchQuery : [array of values]}
            dispatch(cacheResults({[searchQuery]: result[1]}))
        }catch(error){
            console.log('search api calls failed', error)
        }
    }
    
    const toggleMenuHandler = ()=>{
       dispatch(toggleMenu())
    }

    useEffect(()=>{
        // make an api every key press
        // make an api calls on every keystroke when time between two keystroke is greater than 200ms
        // decline the api calls when time between two keystroke is less than 200ms

        // searchQuery == keystroke - F 
                // render the component
                // useEffect Call
                // startTimer => make apiCalls after 200ms
                
            // condition 1 =====> greate than 200ms
                // searchQuery == keystrokes - Fl
                    // re-render the component
                    // useEffect call
                    // startTimer => make apicalls

            // condition 2 ====> less than 200 ms
                    // searchQuery == keystrokes - Fl
                        // destroy the apicalls by calling returnc - clearTimeout
                        // re-render the component
                        // useEffect call
                        // startTimer => make apicalls
        
        const timer = setTimeout(()=>{
            // if searchQuery found in searchCache which is store with results dont make the API calls
            if(searchCache[searchQuery]){
                setShowSuggestions(searchCache[searchQuery])
            }else{
                fetchSearchSuggestion(searchQuery)
            }
        }, 200)

        return ()=>{
            console.log("clearing timer after render within 200ms")
            clearTimeout(timer)
        }
    },[searchQuery])

  return (
    <div className='grid grid-flow-col py-4 shadow-lg'>
        <div className=' col-span-1 flex justify-center self-center gap-x-10'>
            <RxHamburgerMenu className='text-4xl cursor-pointer' 
                onClick={toggleMenuHandler}
            />

            {/* YoutTube logo */}
            {/* link tag is not working accesing out of RouteProvider */}
            <Link to={"/"} className='self-center'>
                <img className='h-7'
                    src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png'
                    alt='YoutTube-Logo'
                />
            </Link>
                
        </div>

        <div className='col-span-10 self-center flex ml-32 relative w-1/2'>
            <input className='w-full rounded-l-full px-5 border border-gray-400 outline-none'
                type='text'
                placeholder='search anything'
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=> setShowSuggestions(true)}
                onBlur={()=> setShowSuggestions(false)}
            />
            <button className='px-3 py-2 rounded-r-full bg-gray-400'>Search</button>
            
            {showSuggetions &&
                <ul className='w-full absolute top-10 rounded-lg bg-white shadow-lg'>
                    {
                        searchSuggestions.map((search,index)=>(
                            <li className='p-2 border-b border-gray-400 cursor-pointer hover:bg-gray-200' key={index}
                                onClick={()=> setSearchQuery(search)}
                            >
                                {search}
                            </li>
                        ))
                    }
                </ul>
            }
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