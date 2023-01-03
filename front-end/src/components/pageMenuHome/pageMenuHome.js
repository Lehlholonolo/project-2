import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import './locationMenu.css'
import Search from '../search/Search'

const pageMenuHome = () => {
  return (
    <div>
      <h1>Find the Service you're looking for</h1>
      <p className='container2'>All the services you want, convience for you and your business, free account creation, and more.</p>
        <span>

        <Search className="container2"/>
  </span>
            <ul className="container2" >
                <li><MdLocationOn size={35} color='rgb(255, 174, 0)'/>
                    <NavLink to ="/">Johannesburg</NavLink>
                </li>
                <li><MdLocationOn size={35} color='rgb(255, 174, 0)'/>
                    <NavLink to ="/">Pretoria</NavLink>
                </li>
                <li><MdLocationOn size={35} color='rgb(255, 174, 0)'/>
                    <NavLink to ="/">Midrand</NavLink>
                </li>
                
                
                </ul>
        
    </div>
  )
}

export default pageMenuHome