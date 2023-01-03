import React from 'react'
import Card from '../../components/card/Card'
import profileImg from '../../assets/avatarr.png'
import './Profile.scss'
import { useState } from 'react'
import PageMenu from '../../components/pageMenu/PageMenu'

const initialSate = {
name: 'Lucky',
email:'Lucky@gmail.com',
phone:'',
bio:'',
photo:'',
role:'',
isVerified: false,
}

const Profile = () => {
    const [profile, setProfile] = useState(initialSate)

    const handleImageChange = () => {};
    const handleInputChange = () => {};

  return <>
  <section>
<div className="container">
    <PageMenu/>
    <h2>
        Profile
    </h2>
    <div className="--flex-start
    profile">
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
                        <label>Change Display Photo:</label>
                        <input type="file" accept='image/*' name='image' onChange={handleImageChange}></input>
                    </p>
                    <p>
                        <label>Name:</label>
                        <input type="text" name='name' value={profile.name} onChange={handleInputChange}></input>
                    </p>
                    <p>
                        <label>Email:</label>
                        <input type="email" name='email' value={profile.email} onChange={handleInputChange} disabled></input>
                    </p>
                    <p>
                        <label>Phone:</label>
                        <input type="text" name='phone' value={profile.phone} onChange={handleInputChange}></input>
                    </p>
                    <p>
                        <label>Bio:</label>
                        <textarea name="bio" value= {profile.bio} cols="30" rows='10'></textarea>
                    </p>
                    <button className='--btn --btn-primary --btn-block'>Update Profile</button>
                </form>
        </div>
        </Card>

    </div>

</div>
  </section>
  
  </>
}

export default Profile