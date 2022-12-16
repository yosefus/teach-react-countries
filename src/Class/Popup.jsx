import React, { useContext } from 'react'
import { PopupContext } from '.'

export default function Popup() {
   const { clicked, setClicked } = useContext(PopupContext)

   return (
      <div className={`popup-layout  ${clicked ? ' show' : ''}`} onClick={() => setClicked()}>
         <div className='popup-content'>
            <h2>{clicked?.name?.common}</h2>
            <p><b>area : </b>{clicked?.area}</p>
            <p><b>fifa : </b>{clicked?.fifa}</p>
            <p><b>startOfWeek : </b>{clicked?.startOfWeek}</p>
            <p><b>status : </b>{clicked?.status}</p>
            <p><b>subregion : </b>{clicked?.subregion}</p>
            <div className='flag' style={{ backgroundImage: `url(${clicked?.flags?.svg})` }} />
         </div>
      </div>
   )
}
