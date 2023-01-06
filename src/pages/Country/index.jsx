import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Country() {
   // get the countryCode from the params (url)
   const { countryCode } = useParams()
   const [country, setCountry] = useState()

   useEffect(() => {
      axios
         .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
         .then(res => setCountry(res.data[0]))
         .catch(err => console.log(err))
   }, [])

   if (!country)
      return <p>loading...</p>

   else
      return (
         <div className='country-page'>
            <h1>{country?.name?.common}</h1>
            <img src={country?.flags?.svg} alt="flag" />
         </div>
      )
}
