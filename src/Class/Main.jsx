import Country from './Country'

export default function Main({ countries }) {

   return (
      <div>
         <ul className='countries'>
            {countries.map((country, index) =>
               <Country
                  country={country}
                  key={`${country?.name?.common} ${index}`}
               />)}
         </ul>
      </div>
   )
}
