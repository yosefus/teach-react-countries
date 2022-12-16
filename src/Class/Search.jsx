import React from 'react'

export default function Search({ setSearch }) {
   return (
      <input type='search' placeholder='search...' onChange={e => setSearch(e.target.value)} />
   )
}
