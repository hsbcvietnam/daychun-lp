import React, { useEffect, useState } from 'react'
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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    const heightToHideFrom = document.getElementById('intro').offsetTop + 100;
    const heightToShowFrom = document.getElementById('follow').offsetTop - document.getElementById('banner').offsetHeight;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if ((winScroll > heightToHideFrom) && (winScroll < heightToShowFrom)) {  
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    document.getElementById('video').play();
  };

  return (
    <div className='App'>
      <Header />
      <Banner isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
      <Intro />
      <Functionality />
      <Follow />
      <Footer isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
      {
        isVisible && <Subscribe isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
      }
    </div>
  )
}

export default App
