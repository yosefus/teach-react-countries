import { NavLink } from 'react-router-dom'

export default function Navbar() {

   function getClassNameByActive({ isActive }) {
      return isActive ? 'active' : ''
   }

   return (
      <header className='navbar'>
         <NavLink className={getClassNameByActive} to='/'>home</NavLink>
         <NavLink className={getClassNameByActive} to='/countries'>countries</NavLink>
         <NavLink className={getClassNameByActive} to='about'>about us</NavLink>
      </header>
   )
}
