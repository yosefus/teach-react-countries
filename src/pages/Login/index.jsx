import { useContext, useState } from "react"
import {LoginContext} from "../../layout/Layout/index"
export default function Login() {
   const { user, setUser } = useContext(LoginContext)
   const {email, setEmail} = useState()
   const {password, setPassword} = useState()
   //chec
   //branch test


   return (
     <div className="login-page">
       <form onSubmit={() => setUser({ email, password })}>
         <h2>login</h2>
         <input
           onChange={(e) => setEmail(e.target.value)}
           type="text"
           placeholder="email..."
         />
         <input
           onChange={(e) => setPassword(e.target.value)}
           type="password"
           placeholder="password..."
         />
         <button>Login</button>
       </form>
     </div>
   );
}
