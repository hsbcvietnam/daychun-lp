import React, { useEffect, useState } from 'react'
import './css/Footer.css'
import axios from 'axios'
import emailjs from '@emailjs/browser'

function Footer({isSubscribed, setIsSubscribed}) {
  const [email, setEmail] = useState('')
  const field = 'footer'
  const [time, setTime] = useState('')
  const [shake, setShake] = useState(false)
  useEffect(() => {
    setTime(Date().toLocaleString().slice(0, 24))
  }, [email])

  const animate = () => {
    // Button begins to shake
    setShake(true);
    
    // Buttons stops to shake after 2 seconds
    setTimeout(() => setShake(false), 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (/\S+@\S+\.\S+/.test(email)) {
      if (isSubscribed === 0) {
        document.getElementById('success').style.display = 'block'
      }
      const objt = { email, field, time }
      axios
        .post(
          'https://sheet.best/api/sheets/aea193e5-5189-4a47-a403-37ff82876b1e',
          objt
        )
        .then((response) => {
          // console.log(response);
        });
      const serviceID = 'default_service';
      const templateID = 'template_zgev7fe';

      emailjs.send(serviceID, templateID, { email }, 'IWcjXjd7udXOzyDD4');
      setIsSubscribed(1)
      setEmail('')
    } else {
      animate();
    }
	}

  return (
    <div id='follow' className='footer'>
      <div className='footer-img'></div>
      <div className='footer-content-container'>
        <div className='footer-title'>coming <span>soon !</span></div>
        <div className='footer-text'>Bạn đã sẵn sàng cùng Dây Chun set những chiếc kèo thiệt cháy chưa?</div>
        <div className='footer-text'>Để không bỏ lỡ những tin tức ra mắt của Dây Chun, hãy đăng ký theo dõi ngay nhé!</div>
      </div>
      <div className='footer-follow-container'>
        <div className='footer-follow-text'>Theo dõi ngay để nhận thông báo mới nhất</div>
        <div id={shake ? `shake` : null} className='footer-follow-input'>
          <form className='follow-box-form'>
            <input className='footer-follow-input-field' type="email" name="email" placeholder='Email của bạn' value={email} onChange={(e) => setEmail(e.target.value)} />
            {
              (isSubscribed === 1) ? (
                <button type='submit' className='footer-follow-btn footer-follow-btn-disabled' disabled>Đã theo dõi</button>
              ) : (
                <button type='submit' className='footer-follow-btn' onClick={handleSubmit}>Theo dõi</button>
              )
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer