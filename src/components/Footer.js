import React from 'react'
import Social from './Social'

export default function Footer() {
   return (
      <footer className="container text-muted p-4 d-flex justify-content-between">

         <span className="fs-4 hov">
            <a href="#" className="text-decoration-none text-muted">
               <i className="bi bi-columns-gap"></i> Portfolio
            </a>
         </span>

         <span className="fs-4">

            <Social />

         </span>

      </footer>
   )
}
