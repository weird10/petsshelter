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
        <div className='titleBarLeft'>
          <h1>Pet Shelter</h1>
          <h2>These pets are looking for a good home</h2>
        </div>
        <div className='titleBarRight'>
        <NavLink className="navLinks" to="/allPets" style={({isActive}) => 
          isActive ? activeStyle: undefined 
          } end>Home</NavLink>
        <NavLink className="navLinks" to="/form" style={({isActive}) => 
          isActive ? activeStyle: undefined 
          } end>Add a pet to the shelter!</NavLink>
        </div>
        

    </div>
  )
}

export default NavBar