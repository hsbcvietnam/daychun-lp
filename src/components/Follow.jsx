import React from 'react'
import './css/Follow.css'

function Follow() {
  const handleClick = () => {
    window.open('https://techhunt.vn/');
  }

  return (
    <div className='follow'>
      <div className='follow-container'>
        <div className='follow-title'>Chúng tớ là ai</div>
        <div className='follow-text'>Chúng tớ là Tech Hunt, thuộc The Hunter Group, một team với những thành viên trẻ, nhiệt huyết và sáng tạo, luôn mong muốn ứng dụng công nghệ vào marketing truyền thông cũng như tạo ra những sản phẩm công nghệ giúp giải quyết các vấn đề trong đời sống.<br /><br />Đó là lý do Dây Chun ra đời - Trợ thủ đắc lực giúp những cuộc hẹn hò tụ tập của GenZ trở nên nhanh gọn, dễ dàng, thú vị hơn bao giờ hết.</div>
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