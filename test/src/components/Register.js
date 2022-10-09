import '../App.css'
import React, { useState } from 'react';

function Register(){

    const [ user, setUser] = useState({
        name:"",
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
        <div className="Register">
        <input type="text" name="name" placeholder="Enter your Name" value={user.name} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Enter your Email" value={user.email} onChange={handleChange}/>
        <input type="text" name="password" placeholder="Enter your Password" value={user.password} onChange={handleChange}/>
        <input type="submit" value="Register" />
        <div>OR</div>
        <input type="button" value="Login" />
        </div>
    )
}

export default Register