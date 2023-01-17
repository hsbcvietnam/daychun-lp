import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './css/Banner.css'

function Banner({isSubscribed, setIsSubscribed}) {
    const [email, setEmail] = useState('')
    const field = 'banner'
    const [time, setTime] = useState('')
    useEffect(() => {
        setTime(Date().toLocaleString().slice(0, 24))
    }, [email])

    const handleSubmit = (e) => {
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
        setIsSubscribed(1 - isSubscribed)
	};

    return (
        <div id='banner' className='banner'>
            <div className='banner-container'>
                <div className='banner-content-container'>
                    <div className='banner-text'>đón chờ daychun ra mắt set kèo thơm kèo đẹp</div>
                    <div className='banner-follow-box'>
                        <div className='banner-follow-box-content'>Để lại email để nhận thông báo từ Dâychun</div>
                        <div className='follow-box-input'>
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