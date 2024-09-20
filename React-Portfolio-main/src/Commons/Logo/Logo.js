import React from 'react'
import "./Logo.css"
import { SiSimilarweb } from "react-icons/si";


const Logo = () => {
  return (
    <div className='logo__container'>
      <SiSimilarweb className='icon'/>
      <h2>YAMUNA</h2>
    </div>
  )
}

export default Logo