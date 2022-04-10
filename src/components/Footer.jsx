import React from 'react'
import SosialMedia from '../assets/icon_facebook.svg'
import SosialMedia1 from '../assets/icon_instagram.svg'
import SosialMedia2 from '../assets/icon_twitter.svg'
import SosialMedia3 from '../assets/icon_mail.svg'
import SosialMedia4 from '../assets/icon_twitch.svg'
import logo from '../assets/logo.png'
import '../index.css';

function Footer() {
  return (
    <footer>
        <div className='container py-5'>
            <div className='row'>
                <div className='col'>
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-332-808</p>
                </div>
                <div className='col'>
                    <a href='/' className='nav-link text-dark'>Our Services</a>
                    <a href='/' className='nav-link text-dark'>Why Us</a>
                    <a href='/' className='nav-link text-dark'>Testimonial</a>
                    <a href='/' className='nav-link text-dark'>FAQ</a>
                </div>
                <div className='col'>
                    <p>Connect with us</p>
                    <a href='/' className='px-1'><img src={SosialMedia} alt='facebook'/></a>
                    <a href='/' className='px-1'><img src={SosialMedia1} alt='instagram'/></a>
                    <a href='/' className='px-1'><img src={SosialMedia2} alt='twitter'/></a>
                    <a href='/' className='px-1'><img src={SosialMedia3} alt='mail'/></a>
                    <a href='/' className='px-1'><img src={SosialMedia4} alt='twitch'/></a>
                </div>
                <div className='col'>
                    <p>Copyright Binar 2022</p>
                    <div className='logo'>
                        <img src={logo} alt='logo'/>
                    </div>
                </div>
            </div>
        </div>
        </footer>
  )
}

export default Footer;