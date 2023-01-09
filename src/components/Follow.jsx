import React from 'react'
import './css/Follow.css'

function Follow() {
  const handleClick = () => {
    window.open('https://techhunt.vn/');
  }

  return (
    <div id='follow' className='follow'>
      <div className='follow-container'>
        <div className='follow-title'>Chúng tớ là ai</div>
        <div className='follow-text'>Chúng tớ là Tech hunt, team creative ứng dụng công nghệ thuộc THG plaplapla...<br />nhìn thấy zấn đề trong việc set kèo, nên mới làm ra app này...</div>
        <div className='techhunt-logo' onClick={handleClick}></div>
        <div className='follow-btn-container' onClick={handleClick}>
          <div className='follow-btn-icon'></div>
          <div className='follow-btn-text'>Tìm hiểu thêm<br />về Techhunt</div>
        </div>
      </div>
    </div>
  )
}

export default Follow