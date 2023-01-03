import React from 'react'
import styles from "./auth.module.scss"
import Card from '../../components/card/Card'
import {TiArrowMaximiseOutline, TiUserAddOutline} from "react-icons/ti"
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import { FaTimes } from 'react-icons/fa'
import {BsCheck2All } from 'react-icons/bs'
// import sendEmail from '../../../../back-end/utils/sendEmail'

const initialState = {
name: '',
email: '',
password: '',
passwordConfirm: '',
}


const Register = () => {
const[formData, setFormData] = useState(initialState);
const {name, email, password, passwordConfirm} = formData;

const [uCase, setUCase] = useState(false)
const [num, setNum] = useState(false)
const [sChar, setSChar] = useState(false)
const [passLenght, setPassLength] = useState(false)

const timesIcon = <FaTimes color='red' size={15}/>
const checkIcon = <BsCheck2All color='green' size={15}/>

const switchIcon = (condition) => {
if (condition) {
    return checkIcon
}
return timesIcon

}

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
};

useEffect(() => {
    //Check Lower & Uppercase
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        setUCase(true)
    } else {
        setUCase(false)
    }
    //Check for Numbers
    if(password.match(/([0-9])/
    ) ){
        setNum(true)
    } else {
        setNum(false)
    }
    //Check for Special Characters
    if(password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) ){
        setSChar(true)
    } else {
        setSChar(false)
    }
    //Check for password length
    if(password.length > 5 ){
        setPassLength(true)
    } else {
        setPassLength(false)
    }
},[password])

const sendEmail = async (e)=>{
e.preventDefault()

const data = {
    email
}
const response = await axios.post("http://localhost:5000/api/sendemail",data)
console.log(response.data)
}
    

const loginUser = () => {}

  return (
    <div className={`container ${styles.auth}`}>
<Card>
  <div className={styles.form}>

    <div className='--flex-center'> <TiUserAddOutline size={35} color='#999'/></div>
    <h2>Register</h2>
    
    <br />
    
    <form onSubmit={loginUser}>

      <input type='text'
      placeholder='Name' 
      required
      name='name' 
      value={name}
      onChange={handleInputChange}
      />
       <input type='email'
      placeholder='Email' 
      required
      name='email' 
      value={email}
      onChange={handleInputChange}
      />

    <PasswordInput 
    
    placeholder='Password' 
    name='password' 
    value={password}
    onChange={handleInputChange}/>

<PasswordInput 
    
    placeholder='Confirm Password' 
    name='passwordConfirm' 
    value={passwordConfirm}
    onChange={handleInputChange}
    />

    {/* Password Strength */}
    <Card cardClass={styles.group}>
        <ul className='form-list'>
<li>
<span className={styles.indicator}>
{/* {uCase ? checkIcon : timesIcon} */}

{switchIcon(uCase)} 
&nbsp; Contains Lowercase & Uppercase

</span>

</li>
<li>
<span className={styles.indicator}>
{/* {uCase ? checkIcon : timesIcon} */}

{switchIcon(num)} 
&nbsp; Contains a Number (0-9)

</span>

</li>
<li>
<span className={styles.indicator}>
{/* {uCase ? checkIcon : timesIcon} */}

{switchIcon(sChar)} 
&nbsp; Contains Special Character (!@#$%^&*)

</span>

</li>
<li>
<span className={styles.indicator}>
{/* {uCase ? checkIcon : timesIcon} */}

{switchIcon(passLenght)} 
&nbsp; Contains Atleast 6 Characters

</span>

</li>

        </ul>


    </Card>


      <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>

    </form>
   
   
    <span className={styles.register}> <Link to="/">Home </Link>
   
    <p> &nbsp; Already have and Account? &nbsp;</p>
    <Link to='/login'> Login </Link>
</span>
</div>
</Card>
    </div>
  )
}

export default Register