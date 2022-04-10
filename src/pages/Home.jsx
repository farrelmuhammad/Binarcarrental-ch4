import React from 'react'
import Hero from '../components/Hero'
import '../index.css';
import './Home.css';
import FormContainer from '../components/FormContainer'

function Home() {
  return (
    <>
        <Hero />
        <div className="form-wrapper">
            <FormContainer />
        </div>
    </>
  )
}

export default Home