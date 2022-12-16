import React, { useContext } from 'react'
import { PopupContext } from '.'

export default function Country({ country }) {
   const { setClicked } = useContext(PopupContext)

   return (
      <li onClick={() => setClicked(country)} className='country-card'>
         <p>{country?.name?.common}</p>
         <img src={country?.flags?.svg} alt='flag' />
      </li>
   )
}
