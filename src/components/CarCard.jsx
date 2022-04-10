import React from 'react'
import { Link } from 'react-router-dom'
import './carCard.css'

function CarCard(carProp) {

    const car = carProp.car
    
  return (
    <div className="card">
        <div className="image">
            <img src={car.image} alt="" />
        </div>
        <div className="info">
            <h6>{car.name}/{car.category}</h6>
            <h6 className="price">Rp.{car.price} / hari</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestias ab dolorum velit numquam dignissimos accusantium.</p>
            <ul>
                <li>4 Orang</li>
                <li>Manual</li>
                <li>Tahun 2020</li>
            </ul>
            <Link to={`/cars/${car.id}`} className="btn btn-success nav-link text-white">Pilih Mobil</Link>
        </div>
    </div>
  )
}

export default CarCard