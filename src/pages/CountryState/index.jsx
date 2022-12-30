import { useLocation } from "react-router-dom"


export default function CountryState() {
   const location = useLocation()

   return (
      <div className='country-page'>
         <h1>{location?.state?.country?.name?.common}</h1>
         <img src={location?.state?.country?.flags?.svg} alt="flag" />
      </div>
   )
}
