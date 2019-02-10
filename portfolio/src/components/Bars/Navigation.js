import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="sm:h-12 text-center flex justify-end items-center flex-wrap bg-blue-darkest">
        <Link className="py-2 sm:w-auto sm:h-auto sm:block sm:mx-2 h-8 flex items-center justify-center w-full text-grey-lighter text-xl no-underline hover:underline" to='/about'>Profile</Link>
        <Link className="py-2 sm:w-auto sm:h-auto sm:block sm:mx-2 h-8 flex items-center justify-center w-full text-grey-lighter text-xl no-underline hover:underline" to="/portfolio">Portfolio</Link>
        <Link className="py-2 sm:w-auto sm:h-auto sm:block sm:mx-2 h-8 flex items-center justify-center w-full text-grey-lighter text-xl no-underline hover:underline" to="/Blog">Blog</Link>
        <Link className="py-2 sm:w-auto sm:h-auto sm:block sm:mx-2 h-8 flex items-center justify-center w-full text-grey-lighter text-xl no-underline hover:underline" to="/Contact">Contact</Link>
    </nav>
  )
}
