import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './css/Banner.css'
import emailjs from '@emailjs/browser';

function Banner({isSubscribed, setIsSubscribed}) {
    const [email, setEmail] = useState('')
    const field = 'banner'
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
            //   console.log(response);
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
        <div id='banner' className='banner'>
            <div className='banner-container'>
                <div className='banner-content-container'>
                    <div className='banner-text'>đón chờ daychun ra mắt set kèo thơm kèo đẹp</div>
                    <div className='banner-text banner-text-mobile'>
                        <span>đón chờ</span><br />
                        daychun ra mắt<br />
                        <span>set kèo thơm</span><br />
                        kèo đẹp
                    </div>
                    <div className='banner-follow-box'>
                        <div className='banner-follow-box-content'>Để lại email để nhận thông báo từ Dâychun</div>
                        <div id={shake ? `shake` : null} className='follow-box-input'>
                            <form className='follow-box-form'>
                                <input className='follow-box-input-field' type="email" name="email" placeholder='Email của bạn' value={email} onChange={(e) => setEmail(e.target.value)} />
                                {
                                    (isSubscribed === 1) ? (
                                        <button type='submit' className='follow-box-btn follow-box-btn-disabled' disabled>Đã theo dõi</button>
                                    ) : (
                                        <button type='submit' className='follow-box-btn' onClick={handleSubmit}>Theo dõi</button>
                                    )
                                }
                            </form>
                        </div>
                    </div>
                </div>
                <div className='banner-image-container'>
                    <div className='banner-image-1'></div>
                    <div className='banner-image-2'></div>
                    <div className='banner-image-3'></div>
                    <div className='banner-image-4'></div>
                </div>
            </div>
        </div>
    )
}

export default Banner