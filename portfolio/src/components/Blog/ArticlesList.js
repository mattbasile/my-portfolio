import React from 'react'

export default function ArticlesList() {
  return (
    <div className="w-4/5 mx-auto my-12">
    <h2 className="border border-t-0 border-r-0 border-l-0 border-b-4 w-1/5 ">My Articles</h2>
    <div className="w-full flex mt-4 ">
        <p className="w-1/5 line border border-t-0 border-r-4 border-l-0 border-b-0 leading-loose  text-lg">
          In order to reinforce my learning I try to blog as much as possible. Not only does it brush up my tech skills but it allows me to continue to produce content. Here are some of my top posts from my publication.
        </p>
        <div className="w-1/4 mx-2 shadow-lg bg-blue-darkest">
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Post 1</div>
              <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
          </div>
        </div>
        <div className="w-1/4 mx-2 shadow-lg bg-blue-darkest">
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Post 2</div>
              <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
          </div>
        </div>
        <div className="w-1/4 mx-2 shadow-lg bg-blue-darkest">
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Post 3</div>
              <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
          </div>
        </div>
      </div> 
  </div>
  )
}
