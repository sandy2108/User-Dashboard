import React from 'react'
import Link from 'next/link'
import {RxSketchLogo ,RxDashboard, RxPerson} from 'react-icons/rx';
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'

const Sidebar = ({children}) => {
  return (
    <div className='flex '>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href="/"> 
                     <div className='bg-purple-800 p-3 rounded-lg inline-block text-white'>
                        <RxSketchLogo size={20}/>
                     </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href="/"> 
                     <div className='bg-gray-200 hover:bg-gray-200 p-3 my-4 rounded-lg inline-block cursor-pointer'>
                        <RxDashboard size={20}/>
                     </div>
                </Link>
                <Link href="/customer"> 
                     <div className='bg-gray-200 hover:bg-gray-200 p-3 my-4 rounded-lg inline-block cursor-pointer'>
                        <RxPerson size={20}/>
                     </div>
                </Link>
                <Link href="/orders"> 
                     <div className='bg-gray-200 hover:bg-gray-200 p-3 my-4 rounded-lg inline-block cursor-pointer'>
                        <HiOutlineShoppingBag size={20}/>
                     </div>
                </Link>
                <Link href="/"> 
                     <div className='bg-gray-200 hover:bg-gray-200 p-3 my-4 rounded-lg inline-block cursor-pointer'>
                        <FiSettings size={20}/>
                     </div>
                </Link>


            </div>
        </div>

        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar