import { useState, createContext } from 'react'
import Login from '../../pages/Login'

export const LoginContext = createContext()

export default function Layout({ children }) {
   const [user, setUser] = useState()
   // console.log(user);

   return (
      <LoginContext.Provider value={{ user, setUser }}>
         {user ? children : <Login />}
      </LoginContext.Provider>
   )
}
