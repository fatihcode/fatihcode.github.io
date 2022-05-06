import React from 'react'
import Social from './Social'

export default function Intro() {
   return (
      <>
         <section className="p-3 p-md-5 m-2 text-center bg-light">
            <div className="col-md-9 mx-auto">
               <img className="rounded-circle" src="static/img/profile.jpg" alt="profile" width="200" height="200" />
               <h1 className="fw-normal">Fatih</h1>
               <p className="lead fw-normal">Full Stack Developer, Desinger.</p>
               <p className="lead fw-normal">Merhaba! Ben Fatih. Bilgisayar öğretmenliği mezunuyum. Uzun zamandır
                  tasarım üzerine olan yolculuğuma şimdi yazılım üzerinden devam ediyorum. Bilişim dünyasına
                  meraklı, vaktimi araştırarak ve öğrenerek geçirmeye çalışan biriyim...</p>

              
                  <Social />
                  <hr />
               

               <div className="port">
                  <a href="#p1" className="text-decoration-none text-muted">
                     <h2 className="fw-light mt-5">Portfolio<br />
                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/></svg>
                     </h2>
                  </a>
               </div>
            </div>
         </section>
         <hr id="p1" />
      </>
   )
}
