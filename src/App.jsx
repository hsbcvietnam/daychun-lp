import React from 'react'
import './App.css'
import Header from './components/header'
import Banner from './components/Banner'
import Intro from './components/Intro'
import Functionality from './components/Functionality'
import Follow from './components/Follow'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>
      <Header />
      <Banner />
      <Intro />
      <Functionality />
      <Follow />
      <Footer />
    </div>
  )
}

export default App
