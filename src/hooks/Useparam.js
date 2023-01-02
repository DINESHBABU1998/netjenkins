import React from 'react'
import { useParams } from 'react-router-dom'


export default function Useparam() {
    const {name,id}=useParams()
  return (
    <h1>Book {name} {id}</h1>
  )
}
