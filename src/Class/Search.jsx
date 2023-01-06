import React from 'react'

export default function Search({ setSearch, search }) {
   return (
      <input type='search' value={search} placeholder='search...' onChange={e => setSearch(e.target.value)} />
   )
}
