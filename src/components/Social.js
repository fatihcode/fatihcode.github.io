import React from 'react'
import { social } from './data'

export default function Social() {
   return (
      <>
         {social.map(item => (
            <React.Fragment key={item.id}>
               <a href={item.link} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className={"bi "+item.icon + " px-3 hov"} title={item.link} ></i></a>
            </React.Fragment>

         ))}
      </>
   )
}
