import React from 'react'
import Social from './Social'

export default function Intro() {
   return (
      <>
         <section className="p-3 p-md-5 m-2 text-center bg-light">
            <div className="col-md-9 mx-auto">
               <img className="rounded-circle" src="static/img/profile.jpg" alt="profil picture" width="200" height="200" />
               <h1 className="fw-normal">Fatih</h1>
               <p className="lead fw-normal">Jr. Frontend Developer. Desinger.</p>
               <p className="lead fw-normal">Merhaba! Ben Fatih. Bilgisayar öğretmenliği mezunuyum. Uzun zamandır
                  tasarım üzerine olan yolculuğuma şimdi yazılım üzerinden devam ediyorum. Bilişim dünyasına
                  meraklı, vaktimi araştırarak ve öğrenerek geçirmeye çalışan biriyim...</p>

              
                  <Social />
                  <hr />
               

               <div className="port">
                  <a href="#p1" className="text-decoration-none text-muted">
                     <h2 className="fw-light mt-5">Portfolio<br />
                        <i className="bi bi-chevron-compact-down"></i>
                     </h2>
                  </a>
               </div>
            </div>
         </section>
         <hr id="p1" />
      </>
   )
}
