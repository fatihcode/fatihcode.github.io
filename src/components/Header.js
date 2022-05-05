import React from 'react'
import Logo from './Logo'

export default function Header() {
   return (
      <header className="site-header sticky-top py-1 mb-4">
         <nav className="container d-flex justify-content-center">
            <Logo />
         </nav>
      </header>
   )
}