import React from 'react'
import {Link} from 'react-router-dom'

function Profile() {
  return (
    <div>
      <h2 className="text-center mt-8"> You've come to the right place!</h2>
      <div className="my-6 w-3/5">
        <h3>Hi, I'm Matt Basile, a New York based Front End Developer.</h3>
        <h3>After graduating college in 2016 I worked in <Link to='/experience'>Finance</Link> and <Link to='/experience'>Social Media </Link></h3>
        <h3>In November, I left it behind to dive into the world of Web Development</h3>
      </div>
      <div className="my-6 w-full ">
          <h3 className="w-3/5">I'm current enrolled at <a target="blank" href="https://lambdaschool.com/">Lambda School</a> where I'm training to become a Full Stack Engineer </h3>
          <h3 className="w-3/5" >My current technology stack includes: </h3>
          <div className="flex flex-wrap w-4/5 mx-auto ">
            <p className="w-1/3 text-center text-xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded " >Redux</p>
            <p className="w-1/3 text-center text-xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" >React</p>
            <p className="w-1/3 text-center text-xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" >JavaScript</p>
            <p className="w-1/3 text-center text-xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" >HTML</p>
            <p className="w-1/3 text-center text-xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" >CSS</p>
            <p className="w-1/3 text-center text-xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" >SASS</p>
            <p className="w-1/3 text-center text-xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" >TailWind CSS</p>
            <p className="w-1/3 text-center text-xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" >Bootstrap CSS</p>
            <p className="w-1/3 text-center text-xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" >GIT</p>
          </div> 
      </div>
      <h3>To see more of my work please continue below</h3>
    </div>
  )
}

export default Profile
