import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {

   return (
      <div>
         <div className='admin-nav'>admin nav</div>
         <Outlet />
         <div className='admin-nav'>admin footer</div>
      </div>
   )
}
