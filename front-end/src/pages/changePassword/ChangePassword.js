import React from 'react'
import Card from '../../components/card/Card'
import profileImg from '../../assets/avatarr.png'
 import './ChangePassword.scss'
import { useState } from 'react'
import PageMenu from '../../components/pageMenu/PageMenu'
import PasswordInput from '../../components/passwordInput/PasswordInput'

const initialSate = {
oldPassword: '',
newPassword:'',
passwordConfirmNew:'',
}

const ChangePassword = () => {
    const [formData, setFormData] = useState(initialSate)

    const {oldPassword,
    newPassword,
    passwordConfirmNew} = formData

    const handleInputChange = () => {};

  return <>
  <section>
<div className="container">
    <PageMenu/>
    <h2>
        ChangePassword
    </h2>
    <div className="--flex-start
change-password">
        <Card cardClass={"card"}>
        <div>
            <div className="profile-photo">
                <div>
                <img src={profileImg} alt='Profileimg'/>
                <h3>Role: Subcriber</h3>
                </div>
                </div>
                <form>
                    <p>
                        <label>Current Password:</label>
                        <PasswordInput
    
                        placeholder='Old Password' 
                        name='password' 
                        value={oldPassword}
                        onChange={handleInputChange}/>



                    </p>
                    <p>
                        <label> New Password</label>
                        <PasswordInput 
    
                        placeholder='New Password' 
                        name='password' 
                        value={newPassword}
                        onChange={handleInputChange}/>



                    </p>
                    <p>
                        <label>Confirm New Password</label>
                        <PasswordInput 
    
                        placeholder='Confirm New Password' 
                        name='passwordConfirm' 
                        value={passwordConfirmNew}
                        onChange={handleInputChange}
                        />
                    </p>
                   
                    <button className='--btn --btn-primary --btn-block'>Update Password</button>
                </form>
        </div>
        </Card>

    </div>

</div>
  </section>
  
  </>
}

export default ChangePassword