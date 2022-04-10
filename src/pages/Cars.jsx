import React, { useEffect, useState } from 'react'
import './Cars.css'
import FormContainer from '../components/FormContainer'
import axios from 'axios'
import CarCard from '../components/CarCard'

function Cars() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    axios.get('https://rent-cars-api.herokuapp.com/customer/car')
      .then(response => {
        setCars(response.data)
      })
  }, [])


  const carsCard = []

  if (cars.length > 2) {
    for (let i = 0; i < 3; i++) {
      carsCard.push(
        <CarCard car={cars[i]} />
      )
    }

    return (
      <>
        <div className="cars-hero">
          <div className="form-wrapper">
            <FormContainer />
          </div>
        </div>
        <div className="cars container">
          {carsCard}
        </div>
      </>
    )
  }

}

export default Cars