import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './css/Subscribe.css'

function Subscribe({isSubscribed, setIsSubscribed}) {
  const [email, setEmail] = useState('')
  const field = 'box'
  const [time, setTime] = useState('')

  useEffect(() => {
    setTime(Date().toLocaleString().slice(0, 24))
  }, [email])

  const handleSubmit = (e) => {
    if (isSubscribed === 0) {
        document.getElementById('success').style.display = 'block'
    }
    e.preventDefault()
    const objt = { email, field, time }
    axios
      .post(
        'https://sheet.best/api/sheets/aea193e5-5189-4a47-a403-37ff82876b1e',
        objt
      )
      .then((response) => {
        console.log(response);
      });
    setIsSubscribed(1)
    setEmail('')
};

  return (
    <div id='subscribe' className='subscribe'>
      <div className='subscribe-container'>
        <div className='subscribe-img'></div>
        <div className='subscribe-follow-box'>
          <div className='subscribe-follow-box-content'>Để lại email để nhận thông báo từ <strong>Dâychun</strong></div>
          <div className='subscribe-follow-box-input'>
            <form className='subscribe-follow-box-form'>
              <input className='subscribe-follow-box-input-field' type="email" name="email" placeholder='Email của bạn' value={email} onChange={(e) => setEmail(e.target.value)} />
              {
                (isSubscribed === 1) ? (
                  <button type='submit' className='subscribe-follow-box-btn subscribe-follow-box-btn-disabled' disabled>Đã theo dõi</button>
                ) : (
                  <button type='submit' className='subscribe-follow-box-btn' onClick={handleSubmit}>Theo dõi</button>
                )
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe