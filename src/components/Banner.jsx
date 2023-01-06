import React, { useState } from 'react'
import './css/Banner.css'

function Banner() {
    const [input, setInput] = useState('')

    return (
        <div className='banner'>
            <div className='banner-container'>
                <div className='banner-content-container'>
                    <div className='banner-text'>đón chờ daychun ra mắt set kèo thơm kèo đẹp</div>
                    <div className='banner-follow-box'>
                        <div className='banner-follow-box-content'>Để lại email để nhận thông báo từ Dâychun</div>
                        <div className='follow-box-input'>
                            <input className='follow-box-input-field' type="text" placeholder='Email của bạn' value={input} onChange={(e) => setInput(e.target.value)} />
                            <button className='follow-box-btn'>Theo dõi</button>
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