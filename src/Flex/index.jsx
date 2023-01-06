import React from 'react'
import './style.css'

export default function Flex() {
   return (
      <div className='main-flex'>
         <First />
         <Second />
         <Third />
      </div>
   )
}


export function First() {
   return (<div className='first'>
      <div className="red box"></div>
      <div className="blue box"></div>
      <div className="green box"></div>
   </div>)
}

export function Second() {
   return (<div className='second'>
      <div className="red box">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, possimus.</div>
      <div className="blue box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt consequuntur aspernatur ex obcaecati illo ipsum dolor quisquam minima eius ipsam.</div>
      <div className="green box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, optio.</div>
   </div>
   )
}

export function Third() {
   return (<div className='third'>
      <div className="red box"></div>
      <div className="blue box"></div>
      <div className="green box"></div>
   </div>
   )
}