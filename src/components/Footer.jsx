import React, { useState } from 'react'
import './css/Footer.css'

function Footer() {
  const [input, setInput] = useState('')

  return (
    <div className='footer'>
      <div className='footer-img'></div>
      <div className='footer-content-container'>
        <div className='footer-title'>coming <span>soon !</span></div>
        <div className='footer-text'>Bạn đã sẵn sàng cùng Dây Chun set những chiếc kèo thiệt cháy chưa?</div>
        <div className='footer-text'>Để không bỏ lỡ những tin tức ra mắt của Dây Chun, hãy đăng ký theo dõi ngay nhé!</div>
      </div>
      <div className='footer-follow-container'>
        <div className='footer-follow-text'>Theo dõi ngay để nhận thông báo mới nhất</div>
        <div className='footer-follow-input'>
          <input className='footer-follow-input-field' type="text" placeholder='Email của bạn' value={input} onChange={(e) => setInput(e.target.value)} />
          <button className='footer-follow-btn'>Theo dõi</button>
        </div>
      </div>
    </div>
  )
}

export default Footer