import React from 'react'
import Search from './Search'

export default function Header({ setSearch, filteredCountries }) {
   return (
      <header>
         <h1>countries app</h1> <p>{filteredCountries.length} countries</p>
         <Search setSearch={setSearch} />
      </header>
   )
}
