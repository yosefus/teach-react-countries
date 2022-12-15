import React from 'react'
import CountryCard from './CountryCard'

export default function Main({ filteredCountries }) {
   return (
      <ul className='countries'>
         {filteredCountries.map((c, i) =>
            <CountryCard key={`${c.ccn3} ${i}`} country={c} />)}
      </ul>
   )
}
