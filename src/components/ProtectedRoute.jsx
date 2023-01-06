import { Outlet, Navigate, useNavigate } from "react-router-dom";
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
         <div className='admin-nav'>admin nav</div>
         <Outlet />
         <div className='admin-nav'>admin footer</div>
      </div>
   )
}
