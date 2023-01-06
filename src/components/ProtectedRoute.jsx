import { Outlet, Navigate, useNavigate, NavLink } from "react-router-dom";
import { useContext, useEffect } from 'react'
import { LoginContext } from '../layout/Layout'

export default function ProtectedRoute() {
   const { user } = useContext(LoginContext)
   const navigate = useNavigate()

   // with component
   // if (user.role !== 'admin')
   //    return <Navigate to='/404' />

   // in function
   useEffect(() => {
      if (user.role !== 'admin') navigate('/404')
   }, [])


   return (
      <div>
         <div className='admin-nav'> admin nav</div>
         <header> <NavLink to='users'>users</NavLink> <NavLink to='about'>about us</NavLink>  </header>
         <Outlet />
         <div className='admin-nav'>admin footer</div>
      </div>
   )
}
