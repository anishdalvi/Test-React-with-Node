import '../App.css'
import React from 'react';
import { useState } from 'react'


function Login(){

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        //console.log(e.target) // printing present name
        const { name, value} = e.target
        //console.log(name, value) //printing specific name
        setUser ({
            ...user,  //spread operator
            [name]:value
        })
    }


    return (
        <div className='Login'>
            {/* {console.log("User",user)}  for printing user */}
        <input type="email" name="email" placeholder="Enter your Email" value={user.email} onChange={ handleChange } />
        <input type="password" name="password" placeholder="Enter your Password" value={user.password} onChange={ handleChange } />
        <input type="submit" value="Login" />
        <div>OR</div>
        <input type="button" value="Register" />
        </div>
    )
}

export default Login