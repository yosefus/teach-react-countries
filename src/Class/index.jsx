import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Popup from './Popup'

export const PopupContext = createContext()

function Class() {
   const [searchParams, setSearchParams] = useSearchParams()
   const [countries, setCountries] = useState([])
   const searchByDefault = searchParams.get('search') || ''
   const [search, setSearch] = useState(searchByDefault)
   const [clicked, setClicked] = useState()

   // 1
   const filtered = !search ?
      countries :
      countries.filter(country => country?.name?.common?.toLowerCase().includes(search.toLowerCase()))

   // 2
   // const [filtered, setFilteredCountries] = useState([])

   // useEffect(() => {
   //    const filtered = countries.filter(country => country?.name?.common?.toLowerCase().includes(search.toLowerCase()))
   //    setFilteredCountries(filtered)
   // }, [search, countries.length])

   useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all')
         .then(res => setCountries(res.data))
         .catch(err => console.log(err))
   }, [])

   // useEffect(() => {
   //    fetch('https://restcountries.com/v3.1/all')
   //       .then(res => res.json())
   //       .then(setCountries)
   //       .catch(err => console.log(err))
   // }, [])

   return (
      <div>
         {/* header */}
         <Header lengnth={filtered.length} search={search} setSearch={setSearch} />

         <PopupContext.Provider value={{ setClicked, clicked }} >
            {/* main */}
            <Main countries={filtered} />
            {/* popup */}
            <Popup />
         </PopupContext.Provider>

      </div>
   )
}

export default Class