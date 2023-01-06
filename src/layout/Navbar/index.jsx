import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../Layout'

export default function Navbar() {
   const { setUser } = useContext(LoginContext)
   const navigate = useNavigate()

   function getClassNameByActive({ isActive }) {
      return isActive ? 'active' : ''
   }

   function logout() {
      setUser()
      navigate('/about')
   }

   return (
      <header className='navbar'>
         <NavLink className={getClassNameByActive} to='/'>home</NavLink>
         <NavLink
            className={getClassNameByActive}
            to={{ pathname: '/countries', search: '?search=pak' }}
         >
            countries
         </NavLink>
         <NavLink className={getClassNameByActive} to='/about'>about us</NavLink>
         <button onClick={logout}>logout</button>
      </header>
   )
}
