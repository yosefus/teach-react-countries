import React from 'react'
import { useParams } from 'react-router-dom'

export default function Country() {
   const { countryCode } = useParams()

   // create server req to current country

   return (
      <div>
         {countryCode}
      </div>
   )
}
