import React, { useContext } from 'react'
import { PopupContext } from '.'

export default function Popup({ className }) {
   const { popup, setPopup } = useContext(PopupContext)

   return (
      <div className={`popup-layout ${className}`} onClick={() => setPopup()} >
         <div className='popup-content'>
            <h2> {popup?.name?.common}</h2>
            <p><b>official name: </b>{popup?.name?.official}</p>
            <p><b>population: </b>{popup?.population}</p>
            <p><b>region: </b>{popup?.region}</p>
            <p><b>area: </b>{popup?.area}</p>
            <p><b>subregion: </b>{popup?.subregion}</p>
            <div className='flag' style={{ backgroundImage: `url(${popup?.flags?.svg})` }} />
         </div>
      </div>
   )
}
