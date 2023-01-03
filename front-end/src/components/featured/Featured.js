import React from 'react'
import { Link } from 'react-router-dom'
import './featured.css'
import Nanny from '../../assets/nanny.webp'
import cleaningservices from '../../assets/cleaningservices.webp'
import gardening from "../../assets/gardening.webp"



const   Featured = () => {
  return (
    <>
    <label ><h1>Our Services</h1></label>

 <div className='containerf'>
     
   <div className='cards'>
      <div className='card-img'>
           <img src={Nanny} alt='nanny' />
           </div>
          
          <div className='card-body'>
          <label><Link><h2>Nanny Services</h2></Link></label>
                            
          
          <p >  Click Here to browse of Nanny 
               Services Available.</p>
            
        </div>
     
 </div>
    

   
   <div className='cards'>
      <div className='card-img'>
           <img src={cleaningservices} alt='Cleaning Service' />
           </div>
          
          <div className='card-body'>
          <label><Link><h2>Cleaning Service</h2></Link></label>
                            
          
          <p >  Click Here to browse of Cleaning
               Services Available.</p>
            
        </div>
     
 </div>
    
  
  
   <div className='cards'>
      <div className='card-img'>
           <img src={gardening} alt='Gardening' />
           </div>
          
          <div className='card-body'>
          <label><Link><h2>Gardening Services</h2></Link></label>
                            
          
          <p >  Click Here to browse of Gardening 
               Services Available.</p>
            
        </div>
     
 </div>
    
   </div>
 
    </>
  )
}

export default  Featured