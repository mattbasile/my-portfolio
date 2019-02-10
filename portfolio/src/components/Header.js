import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
      <>
    <div className="h-screen flex w-full flex-wrap ">
    <div className="w-full text-grey-lighter flex flex-col justify-center items-center bg-blue-darkest header-left">
      <h1 className=" header-font ">N
      <span className="sub-header-font tracking-wide">eed </span>
      A Q
        <span className="sub-header-font tracking-wide">ualified</span></h1>
      <h2 className="tag-line-font">Front End Developer?</h2>
     <div className="mt-6 flex justify-around w-3/5">
      <button class="w-1/3 bg-transparent hover:bg-blue text-grey-lighter font-semibold hover:text-white py-6 px-4 border border-grey-lighter hover:border-transparent rounded">
    Definitely!
    </button>
    <button class="w-1/3 bg-transparent hover:bg-blue text-grey-lighter font-semibold hover:text-white py-6 px-4 border border-grey-lighter hover:border-transparent rounded">
    Need Convincing?
    </button>
    </div>
    </div>
    </div>
    
    </>
  )
}
