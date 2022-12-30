import { Link } from 'react-router-dom'

export default function Country({ country }) {

   return (
      <Link to={{ pathname: `/countries/${country.cca3}` }} state={{ country: country, fromCountryPage: true }}>
         <li className='country-card' >
            <p>{country?.name?.common}</p>
            <img src={country?.flags?.svg} alt='flag' />
         </li>
      </Link>
   )
}
