import React, { useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import { useCustomContext } from '../context/Context';
import { BiHomeAlt2,BiMoviePlay,BiTimeFive,BiPlay,BiHappy,BiHistory} from "react-icons/bi";


const SideBar = () => {

    const {sideBar,setSideBar} = useCustomContext()
    
  return (
    
    <section id='parent' className={`${sideBar?"translate-x-[0%]" :"translate-x-[-100%] hidden"} fixed top-0 left-0 w-full h-full bg-[#0000002d]`} onClick={(e)=>{
        if(e.target.id == "parent") setSideBar(false)
    }}>
        <div className='px-3 w-[230px] md:w-[230px] h-full bg-white'>
            <div className='flex gap-6 px-5 py-6'>
                <div onClick={()=>setSideBar(prev=>!prev)}>
                <FaBars size={20} className='cursor-pointer' />
                </div>
                <img className='w-[70px] md:w-[90px] object-contain lg:w-[95px]' src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-2-3.png" alt="YpuTube logo" />

            </div>

        <ul className='text-[15px]'>
            <li className='flex px-5 py-3 items-center gap-6 rounded-md hover:bg-gray-200'>
                <span><BiHomeAlt2 size={20} /></span>
                <span>Home</span>
            </li>
            <li className='flex px-5 py-3 items-center gap-6 rounded-md hover:bg-gray-200'>
                <span><BiMoviePlay size={20} /></span>
                <span>Shorts</span>
            </li>
            <li className='flex px-5 py-3 items-center gap-6 rounded-md hover:bg-gray-200'>
                <span><BiPlay size={20} /></span>
                <span>Subscriptions</span>
            </li>
        </ul>

        <hr />

        <div>
            <p className='p-2 font-bold'>You &gt;</p>
            <ul className='text-[15px]'>
            <li className='flex px-5 py-3 items-center gap-6 rounded-md hover:bg-gray-200'>
                <span><BiHappy size={20} /></span>
                <span>Channel</span>
            </li>
            <li className='flex px-5 py-3 items-center gap-6 rounded-md hover:bg-gray-200'>
                <span><BiHistory size={20} /></span>
                <span>History</span>
            </li>
            <li className='flex px-5 py-3 items-center gap-6 rounded-md hover:bg-gray-200'>
                <span><BiMoviePlay size={20} /></span>
                <span>Your Vedios</span>
            </li>
            <li className='flex px-5 py-3 items-center gap-6 rounded-md hover:bg-gray-200'>
                <span><BiTimeFive size={20} /></span>
                <span>Watch Later</span>
            </li>
           
           
        </ul>

        </div>


        </div>

    </section>
  )
}

export default SideBar