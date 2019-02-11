import React from 'react'
import Header from './Header'
import Profile from './Profile'
import Stack from './Bars/Stack'
import ProjectList from './Portfolio/ProjectList';
import ArticlesList from './Blog/ArticlesList';


function HomePage(props) {
  return (
    <div>
      <Header />
      <Profile />
      <Stack/>
      <ProjectList />
      <ArticlesList />
    </div>
  )
}



export default HomePage

