import React, { createContext, useEffect, useState } from 'react'
import Header from './Header'
import Main from './Main'
import Popup from './Popup'

export const PopupContext = createContext()

export default function Done() {
   const
      [countries, setCountries] = useState([]),
      [search, setSearch] = useState(''),
      [popup, setPopup] = useState(),
      filteredCountries = search ? countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase())) : countries


   useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
         .then(res => res.json())
         .then(setCountries)
   }, [])


   return (
      <div>
         <Header setSearch={setSearch} filteredCountries={filteredCountries} />
         <PopupContext.Provider value={{ popup, setPopup }}>
            <Main filteredCountries={filteredCountries} />
            <Popup className={popup && 'show'} />
         </PopupContext.Provider>
      </div>
   )
}
