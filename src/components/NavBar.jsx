import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';

function NavBar() {
  return (
    <>
     <div style={{textAlign:'center'}}>
        <h4>
            <Link to ="/" style={{textDecoration:'none' , marginRight:'10px'}}>Login</Link>
            <Link to ="/home" style={{textDecoration:'none', marginRight:'10px'}}>Home</Link>
            <Link to ="/about" style={{textDecoration:'none', marginRight:'10px'}}>About</Link>
            <Link to ="/wow/contact" style={{textDecoration:'none', marginRight:'10px'}}>Contact</Link>
            <Link to ="/sau/dti/regis" style={{textDecoration:'none', marginRight:'10px'}}>Register</Link>
            <Header/> 
            <hr />
        </h4>    
    </div>
    </>
  )
}
export default NavBar
