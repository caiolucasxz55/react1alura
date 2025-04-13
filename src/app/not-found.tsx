import Image from 'next/image'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h2>Conteúdo não encontrado!</h2>
        <Image src="https://http.dog/404.jpg" alt='404' width={300} height={300}/> 
    </div>
  )
}
