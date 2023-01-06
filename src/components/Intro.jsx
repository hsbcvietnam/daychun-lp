import React from 'react'
import './css/Intro.css'

function Intro() {
  return (
    <div id='intro' className='intro'>
      <div className='intro-container'>
        <div className='intro-text-container'>
          <div className='intro-text-title'>Giới thiệu</div>
          <div className='intro-text'>Phàm trên cuộc đời này nếu tổng hợp những sự mệt mỏi khi set kèo cùng hội bạn thân chắc có thể viết thành một cuốn sách dài 3 phần, mỗi phần dài 8 xen-ti. Hãy xem thử Dây Chun “đánh tan cơn mệt” này như thế nào nhé!</div>
        </div>
        <div className='video-container'>
          <div className='placeholder'>
            <div className='placeholder-text'>"Placeholder video với màu nền HSBC"</div>
          </div>
          {/* <video src='' autoPlay controls></video> */}
        </div>
      </div>
      <div className='weird-thing-1-container'>
        <div className='weird-thing-1'></div>
      </div>
      <div className='weird-thing-2-container'>
        <div className='weird-thing-2'></div>
      </div>
    </div>
  )
}

export default Intro