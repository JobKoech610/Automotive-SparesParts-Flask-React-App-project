import React from 'react'
import {NavLink} from 'react-router-dom'
import './link.css';

function Navbar () {
  // const linkStyles = {
  //   textAlign: "center",
  //   marginLeft:"10px",
  //   textDecoration: "none",
  //   backgroundColor: "#1495c4",
  //   color: "black",
  //   fontWeight: "bold",
  //   fontSize: "30px",
  //   padding: "10px 20px",
    
  // }

  return (
    <div>
    <nav className='link'>
      <NavLink exact to='/' className="links">Home</NavLink>
      <NavLink to='/accessory' className="links" >Accessory</NavLink>
      <NavLink to='/accessoryList' className="links">Accessory List</NavLink>
    </nav>
    </div>
  )
}

export default Navbar
