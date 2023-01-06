import { useState, createContext } from 'react'
import Login from '../../pages/Login'

export const LoginContext = createContext()

export default function Layout({ children }) {
   const initialUser = null
   // const initialUser = { name: 'avi', token: 'sdfxfsdf', email: 's@s' }
   const [user, setUser] = useState(initialUser)

   return (
      <LoginContext.Provider value={{ user, setUser }}>
         {user ? children : <Login />}
      </LoginContext.Provider>
   )
}
