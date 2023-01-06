import React from 'react'
import Search from './Search'

export default function Header({ lengnth, setSearch, search }) {


   return (
      <header>
         <h1>countries</h1>
         <p> {lengnth} - countries</p>
         <Search search={search} setSearch={setSearch} />
      </header>
   )
}
