import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
      <div className="flex ites-center justify-center gap-5">
        <Link to={'/'}>About</Link>
        <Link to={'/'}>Contact</Link>
      </div>
      <p className='text-sm'>Created By Coding with Ebram</p>
    </footer>
  )
}

export default Footer