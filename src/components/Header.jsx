import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='App-header'>
        <NavLink to='/add-tv-show'>Add TV-Show</NavLink>
        <NavLink to='/all-tv-shows'>Show all TV-shows</NavLink>
        <NavLink to='/iii'>Sign-Up page</NavLink>
        
    </div>
  )
 
}

export default Header