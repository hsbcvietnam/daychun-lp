import React, { useState } from 'react'
import './App.css'
import Header from './components/header'
import Banner from './components/Banner'
import Intro from './components/Intro'
import Functionality from './components/Functionality'
import Follow from './components/Follow'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'

function App() {
  const [isSubscribed, setIsSubscribed] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Banner isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
      <Intro />
      <Functionality />
      <Follow />
      <Footer isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
      <Subscribe isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
    </div>
  )
}

export default App
