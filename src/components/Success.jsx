import React from 'react'
import './css/Success.css'

function Success() {
    const handleClick = () => {
        document.getElementById('success').style.display = 'none'
    }

    return (
        <div id='success' className='success-container' onClick={handleClick}>
            <div className='success'></div>
        </div>
    )
}

export default Success