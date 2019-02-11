import React from 'react'



export default function ProjectList() {
  return (
    <div className="w-4/5 mx-auto my-12">
      <h2 className="border border-t-0 border-r-0 border-l-0 border-b-4 w-1/5 ">My Projects</h2>
      <div className="w-full flex mt-4 ">
          <p className="w-1/5 line border border-t-0 border-r-4 border-l-0 border-b-0 leading-loose  text-lg">
            Currently enrolled at Lambda School, I'm learning and building everyday. Here you'll find different projects I've built along the way. Some are group, some are self-driven and others are assignments. 
          </p>
          <div className="w-1/4 mx-2 shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Guidr</div>
                <p className="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                <div className="w-full text-center ">
                <a className="block border" target="blank" href="http://guidr2.netlify.com">Visit Guidr</a>
                <button className="border w-full">Learn More</button>
                </div>
            </div>
          </div>
          <div className="w-1/4 mx-2 shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Redux Pokedex</div>
                <p className="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
          </div>
          <div className="w-1/4 mx-2 shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">DBZ Battles</div>
                <p className="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
          </div>
        </div>
    </div>
  )
}
