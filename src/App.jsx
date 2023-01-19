import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Banner from './components/Banner'
import Intro from './components/Intro'
import Functionality from './components/Functionality'
import Follow from './components/Follow'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import Success from './components/Success'

function App() {
  const [isSubscribed, setIsSubscribed] = useState(0)

  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    const heightToHideFrom = document.getElementById('banner').offsetTop + 100;
    const heightToShowFrom = document.getElementById('follow').offsetTop - document.getElementById('banner').offsetHeight;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if ((winScroll > heightToHideFrom) && (winScroll < heightToShowFrom)) {  
      document.getElementById('subscribe').style.display = 'block'
    } else {
      document.getElementById('subscribe').style.display = 'none'
    }
  };

  return (
    <div className='App'>
      <Header />
      <Banner isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
      <Intro />
      <Functionality />
      <Follow />
      <Footer isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
      <Subscribe isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
      <Success />
    </div>
  )
}

export default App