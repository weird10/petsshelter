import React from 'react'
import { NavLink } from 'react-router-dom'



const NavBar = () => {

  let activeStyle = {
    color: "black",
    backgroundColor: "lightGreen",
    boxShadow: "4px 4px 0px magenta",
    fontWeight: "bold",
  }
  
  return (
    <div className='titlebar'>
        <h1>Pet Shelter</h1>
        <NavLink className="navLinks" to="/allPets" style={({isActive}) => 
          isActive ? activeStyle: undefined 
          } end>Home</NavLink>
        <NavLink className="navLinks" to="/form" style={({isActive}) => 
          isActive ? activeStyle: undefined 
          } end>Form</NavLink>

    </div>
  )
}

export default NavBar