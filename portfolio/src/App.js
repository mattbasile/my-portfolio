import React, { Component } from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import HomePage from './components/HomePage'
import Navigation from './components/Bars/Navigation'
import Footer from './components/Bars/Footer';


export class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={HomePage}/>
        <Route path="/PortfolioItem/:id" component={HomePage}/>
        <Route path="/Experience/" component={HomePage}/>
        
        
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


