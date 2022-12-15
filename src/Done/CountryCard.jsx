import React from 'react'

export default function CountryCard({ country = {}, setPopup }) {
   const { name, flags } = country

   return (
      <li className='country-card' onClick={() => setPopup(country)}>
         <p>{name?.common}</p>
         <img src={flags?.svg} alt='flag' />
      </li>
   )
}
