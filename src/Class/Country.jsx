import { Link } from 'react-router-dom'

export default function Country({ country }) {

   return (
      <Link to={`/countries/${country.cca3}`}>
         <li className='country-card'>
            <p>{country?.name?.common}</p>
            <img src={country?.flags?.svg} alt='flag' />
         </li>
      </Link>
   )
}
