import React from 'react'

export default function Header() {
   return (
      <header className="site-header sticky-top py-1 mb-4">
         <nav className="container d-flex flex-column flex-md-row justify-content-center">
            <a href="#" className="py-2 text-center fs-2">
               <i className="bi bi-columns-gap"></i> Portfolio </a>
         </nav>
      </header>
   )
}
