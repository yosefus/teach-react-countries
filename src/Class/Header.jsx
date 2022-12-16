import React from 'react'
import Search from './Search'

export default function Header({ lengnth, setSearch }) {


   return (
      <header>
         <h1>countries</h1>
         <p> {lengnth} - countries</p>
         <Search setSearch={setSearch} />
      </header>
   )
}
