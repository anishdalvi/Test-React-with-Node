import '../App.css'
import { Link } from 'react-router-dom'


function Navbar(){
    return (
        <div className='Navbar'>
            
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>
                    
                </ul>
            
        </div>
    )
}

export default Navbar