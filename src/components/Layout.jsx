import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import {FaHome,FaWpforms,FaUser,FaSignOutAlt} from 'react-icons/fa'
import { useState } from 'react'



const Layout = () => {

    const [layout,setLayout] = useState(false)
    const stateLayout =()=>{
        setLayout(!layout)
    }

    return (
    <div className='flex  min-h-screen  '>
        <div className={` bg-slate-900 p-3 ${layout ? 'w-20': 'w-1/6'} transition-all duration-200`}>
    
            <div className={` ${!layout && 'flex justify-between items-center m-5'}`} >
                <h2 className={`${layout ? 'hidden' : 'text-2xl font-bold text-white'}`}>CRM - React</h2>
                <button onClick={stateLayout} className={`text-white text-xl mx-6 focus:outline-none ${layout && 'flex justify-center items-center mt-5'}`}>
                ☰
            </button>
            </div>

            <nav >
                <Link className={` ${layout ? 'flex justify-center items-center rounded-sm p-1  shadow transition duration-200  hover:bg-gray-700     font-bold gap-5 text-lg mt-5 text-white' : 'flex gap-5 items-center font-bold rounded-sm p-1  shadow transition duration-200  hover:bg-gray-700 text-lg mt-10 text-white'}`}   to='/'><FaHome/><span className={`${layout && 'hidden'}`}>Home</span></Link>
                <Link className={` ${layout ? 'flex justify-center items-center rounded-sm p-1  shadow transition duration-200  hover:bg-gray-700     font-bold gap-5 text-lg mt-5 text-white' : 'flex gap-5 items-center font-bold rounded-sm p-1  shadow transition duration-200  hover:bg-gray-700 text-lg mt-5 text-white '}`}   to='/clientes/nuevo'><FaWpforms/><span className={`${layout && 'hidden'}`}>Forms</span></Link>
                <Link className={` ${layout ? 'flex justify-center items-center rounded-sm p-1  shadow transition duration-200  hover:bg-gray-700     font-bold gap-5 text-lg mt-5 text-white' : 'flex gap-5 items-center font-bold rounded-sm p-1  shadow transition duration-200  hover:bg-gray-700 text-lg mt-5 text-white '}`}   to='/clientes'><FaUser/><span className={`${layout && 'hidden'}`}>Clients</span></Link>
                <Link className={` ${layout ? 'flex justify-center items-center rounded-sm p-1  shadow transition duration-200  hover:bg-gray-700     font-bold gap-5 text-lg mt-5 text-white' : 'flex gap-5 items-center font-bold rounded-sm p-1  shadow transition duration-200  hover:bg-gray-700 text-lg mt-5 text-white '}`}   to='/login'><FaSignOutAlt/><span className={`${layout && 'hidden'}`}>Exit</span></Link>
            </nav>
        </div>
        
        <div className='flex-1'>
            <Outlet/>
        </div>
        
    </div>
  )
}

export default Layout