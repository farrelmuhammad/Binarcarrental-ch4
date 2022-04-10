/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='container fixed-top'>
            <nav className='navbar py-4'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <ul className='nav'>
                    <li className='nav-item'><a href='#our-services' className='nav-link text-dark'>Our Services</a></li>
                    <li className='nav-item'><a href='#why-us' className='nav-link text-dark'>Why Us</a></li>
                    <li className='nav-item'><a href='#testimonial' className='nav-link text-dark'>Testimonial</a></li>
                    <li className='nav-item'><a href='#faq' className='nav-link text-dark'>FAQ</a></li>
                    <li className='nav-item pl-3'><a href='#' className='btn btn-success nav-link text-white'>Register</a></li>
                </ul>
            </nav>
        </div>
  )
}

export default Navbar;