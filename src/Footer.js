import React from 'react'

export default function Footer() {
   return (
      <footer className="container text-muted p-4 d-flex justify-content-between">

         <span className="fs-4 hov">
            <a href="#" className="text-decoration-none text-muted">
               <i className="bi bi-columns-gap"></i> Portfolio
            </a>
         </span>

         <span className="fs-4">
            <a href="#" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
               <i className="bi bi-linkedin px-1 hov"></i></a>
            <a href="https://github.com/fatihqaz" className="text-decoration-none" target="_blank"
               rel="noopener noreferrer">
               <i className="bi bi-github px-1 hov" title="https://github.com/fatihqaz"></i></a>
            <a href="#" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
               <i className="bi bi-twitter px-1 hov"></i></a>
            <a href="#" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
               <i className="bi bi-envelope px-1 hov" title="qaz3400@outlook.com"></i></a>
         </span>

      </footer>
   )
}
