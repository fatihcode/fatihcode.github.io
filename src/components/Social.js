import React from 'react'
import { social } from './data'

export default function Social() {
   return (
      <span className="fs-4 ">
         {social.map(item => (
            <a key={item.id} href={item.link} title={item.title}  target="_blank" rel="noopener noreferrer">{item.icon}</a>
         ))}
      </span>
   )
}