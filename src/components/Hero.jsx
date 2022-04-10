import React from 'react'
import Car from '../assets/img_car.png'
import '../index.css';

function Hero() {
  return (
    <section id='hero-section' className='hero-section'>
        <div className='container py-4'>
            <div className='row py-5'>
                <div className='col'>
                    <h2 className='font-weight-bold pb-3'>Sewa & Rental Mobil Terbaik di kawasan Sidoarjo</h2>
                    <p className='text-justify w-75'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                        dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <button className='btn btn-success'>Mulai Sewa Mobil</button>
                </div>
                <div className='col'>
                    <div className='hero'>
                        <img src={Car} alt='img_car' />
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Hero;