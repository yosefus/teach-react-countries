import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import Popup from './Popup'

export default function Done() {
   const
      [countries, setCountries] = useState([]),
      [search, setSearch] = useState(''),
      [popup, setPopup] = useState(),
      filteredCountries = search ? countries.filter(c => c.name.common.includes(search)) : countries


   useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
         .then(res => res.json())
         .then(setCountries)
   }, [])


   return (
      <div>
         <header>
            <h1>countries app</h1> <p>{filteredCountries.length} countries</p>
            <input type='search' onChange={e => setSearch(e.target.value)} placeholder='search...' />
         </header>

         <ul className='countries'>
            {filteredCountries.map((c, i) =>
               <CountryCard key={`${c.ccn3} ${i}`} country={c} setPopup={setPopup} />)}
         </ul>

         <Popup setPopup={setPopup} popup={popup} className={popup && 'show'} />
      </div>
   )
}
