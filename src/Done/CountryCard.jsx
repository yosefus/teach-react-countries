import React, { useContext } from 'react'
import { PopupContext } from '.'

export default function CountryCard({ country = {} }) {
   const { name, flags } = country
   const { setPopup } = useContext(PopupContext)

   return (
      <li className='country-card' onClick={() => setPopup(country)}>
         <p>{name?.common}</p>
         <img src={flags?.svg} alt='flag' />
      </li>
   )
}
