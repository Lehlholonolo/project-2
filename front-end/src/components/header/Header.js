import React from 'react'
import "./Header.scss"
import {GrLogin} from "react-icons/gr"
import {FaUserCircle} from "react-icons/fa"
import {Link, NavLink,useNavigate} from "react-router-dom"



const activeLink = ({isActive}) => (isActive ? "active" : "");

const Header = () => {

const navigate = useNavigate();

  const goHome = () => {
    navigate("/")
  };

  return (
    <header className='header'>
        <nav>
            <div className='logo'onClick={goHome}>
            <GrLogin size={35} color='#999'/>
            <span>AUTH:Z</span>
            </div>

            <ul className="home-links" >
                <li className="--flex-center">
                <FaUserCircle size={20}/>
                <p className="--color-white">
                    Hi, Lucky |
                    </p>
                    

                </li>
                <li>
                  <button className="--btn --btn-primary">
                    <NavLink to ="/login">Login</NavLink>
                  </button>
                </li>
                <li>
                  
                    <Link to ="/profile" className={activeLink}>Profile</Link>

                </li>
                <li>
                  <button className="--btn --btn-secondary">
                    Logout
                  </button>
                </li>
                </ul>
        </nav>
    </header>
  )
}

export default Header