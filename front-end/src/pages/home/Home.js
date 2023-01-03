import React from 'react'
import "./Home.scss"
import loginImg from '../../assets/login.svg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    
        <section className='container hero'>
        <div className="hero-text">
          <h2>
            Hlong-Cole Traders Authentication Service
          </h2>
          <p>
            Product and Service Web App for all your needs and wants,
             weither it be a gift or Service available for your area.
          </p>
          <p>
            Rights are hereby granted by Lucky Products & Services.
            Register or Login to access your personal information and place your order now.
          </p>
          <div className='hero-buttons --flex-start'>
            <button className='--btn --btn-danger'> <Link to='/register'> Register </Link></button>
            <button className='--btn --btn-primary'> <Link to='/login'> Login </Link></button>
          </div>
        </div>
        <div className="hero-image">
          <img src={loginImg} alt="Auth"/>
        </div>
        </section>
      
    </div>
  )
}

export default Home