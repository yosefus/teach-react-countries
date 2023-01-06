import { useContext, useState } from 'react'
import { LoginContext } from '../../layout/Layout'

export default function Login() {
   const { setUser } = useContext(LoginContext)
   // const [formData, setFormData] = useState({ email: '', password: '' })
   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')

   function submitLogin(e) {
      e.preventDefault()
      // setUser(formData)
      setUser({ email, password, role: 'admin' })
   }

   // function onChange(e) {
   //    const name = e.target.name
   //    const value = e.target.value
   //    setFormData({ ...formData, [name]: value })
   // }

   return (
      <div className='login-page'>
         <form onSubmit={submitLogin}  >
            <h2>login</h2>
            <input onChange={e => setEmail(e.target.value)} name='email' required type="email" placeholder='email...' />
            <input onChange={e => setPassword(e.target.value)} name='password' required type="password" placeholder='password...' />
            {/* <input onChange={onChange} name='email' required type="email" placeholder='email...' />
            <input onChange={onChange} name='password' required type="password" placeholder='password...' /> */}
            <button>Login</button>
         </form>
      </div>
   )
}
