import React from 'react'
import styles from "./auth.module.scss"
import Card from '../../components/card/Card'
import {MdPassword} from "react-icons/md"
import { useState } from 'react'
import {Link} from 'react-router-dom'
import PasswordInput from '../../components/passwordInput/PasswordInput'


const initialState = {
    
    password: '',
    passwordConfirm: '',
    }

const ResetPassword = () => {
    const[formData, setFormData] = useState(initialState);
    const {password, passwordConfirm} = formData;

const handleInputChange = () => {};

const loginUser = () => {}

  return (
    <div className={`container ${styles.auth}`}>
<Card>
  <div className={styles.form}>

    <div className='--flex-center'> <MdPassword size={35} color='#999'/></div>
    <h2>Reset Password</h2>
    <br />
    

    <form onSubmit={loginUser}>

    <PasswordInput 
    
    placeholder='New Password' 
    name='password' 
    value={password}
    onChange={handleInputChange}/>

<PasswordInput 
    
    placeholder='Confirm Password' 
    name='passwordConfirm' 
    value={passwordConfirm}
    onChange={handleInputChange}
    />

      <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>

    <div className={styles.links}> <p><Link to="/"> - Home </Link></p>
    
    <p> 
    <Link to='/login'> - Login </Link>
    </p>
    </div>
    </form>
   
    
</div>
</Card>
    </div>
  )
}

export default ResetPassword;