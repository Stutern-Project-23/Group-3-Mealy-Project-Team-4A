import React from 'react'
import '../styles/forgotpassword.css'
export default function CustomHeader({heading,subtitle}) {
  return (
    <div>
        <h1>{heading}</h1>
        <p>{subtitle}</p>
    </div>
  )
}
