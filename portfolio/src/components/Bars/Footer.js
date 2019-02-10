import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="flex sm:justify-center items-center flex-col sm:flex-row w-full h-12 bg-blue-darkest ">
        <a className="mx-2 mb-2 sm:mb-0 text-grey-lighter " href="">matthewbasile2@gmail.com</a> 
       <span className="hidden sm:block text-grey-lighter"> - </span>
        <div className="mb-2 sm:mb-0 ">
            <a className="mx-2 text-grey-lighter" href="">Medium</a>
            <a className="mx-2 text-grey-lighter" href="">Twitter</a>
            <a className="mx-2 text-grey-lighter" href="">Github</a>
            <a className="mx-2 text-grey-lighter" href="">LinkedIn</a>
            <a className="mx-2 text-grey-lighter" href="">AngelList</a>
        </div>
        <span className="hidden sm:block text-grey-lighter"> - </span>
        <a className="mx-2 text-grey-lighter" href=""> &copy;{(new Date()).getFullYear()} Matt Basile</a>
       
    </div>
    </div>
  )
}
