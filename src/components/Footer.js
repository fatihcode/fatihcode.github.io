import React from 'react'
import Logo from './Logo'
import Social from './Social'

export default function Footer() {
   return (
      <footer className="container text-muted p-4 d-flex justify-content-between">
         <Logo />
         <Social />
      </footer>
   )
}