import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="navbar shadow-md bg-white header-transition z-50 sticky start-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm  font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About Us</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                {/* <a className="text-xl header-logo"><img className='h-12 w-24' src="https://indianwebify.com/wp-content/uploads/2024/03/Indian-11.png" alt="logo" /></a> */}
                <a className="text-xl header-logo">Shamim</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu header-menu font-semibold menu-horizontal px-1">
                    <li><Link to={'/'} className=''>Home</Link></li>
                    <li><Link to={'/about'} className=''>About Us</Link></li>
                    <li><Link to={'/services'} className=''>Services</Link></li>
                    <li><Link to={'/blog'} className=''>Blog</Link></li>
                    <li><Link to={'/contact'} className=''>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn  bg-blue-500 hover:bg-purple rounded-lg text-white">Quote</a>
            </div>
        </div>
    )
}

export default Header