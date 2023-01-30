import React, { useState } from 'react'
import './css/Functionality.css'

function Functionality() {
  const func = [
    {id: 1, text: "Gợi ý địa điểm"},
    {id: 2, text: "Bình chọn bỏ phiếu"},
    {id: 3, text: "Thông báo cuộc hẹn"},
    {id: 4, text: "Theo dõi vị trí lũ bạn"}
  ]

  const showcase = [
    {id: 0, title: 'cùng Dây Chun set những chiếc kèo thiệt cháy', content: 'Muốn tính năng nào có tính năng đó! Design xịn xò, hợp trend cùng UX/UI gần gũi, trẻ trung gen Z nào cũng mê tít. App trong mơ của mọi tín đồ đam mê tụ tập là đây chứ đâu!'},
    {id: 1, title: 'gợi ý chỗ ăn-chơi', subtitle: 'dựa trên địa điểm thành viên', content: 'Với tính năng tự động đề xuất địa điểm thông minh, các bạn sẽ không còn lo cả hội nhào nháo khi chọn quán thế nào vừa hợp khẩu vị mà chẳng sợ nhà xa. Chỉ cần có địa điểm các thành viên, việc còn lại cứ để Dây Chun lo!'},
    {id: 2, title: 'Hẹn nhau bởi nhớ thật mà', subtitle: 'chat, vote trên app', content: 'Một team 9 người thì 10 khẩu vị khác nhau, kèm những câu nói không bao giờ có đáp án "Ăn gì cũng được", giờ giấc lạc trôi khi bàn được chút thì nhảy số...tám chuyện drama. Lúc này hãy để phiếu bầu lên ngôi, chốt đơn rốp rẻng những chiếc kèo thơm.'},
    {id: 3, title: 'thời gian,\nđịa điểm rõ ràng', subtitle: 'tất cả chỉ việc\nlên đồ đi thôi', content: 'Nhiều hội nhiều tụ nhưng não cá vàng? Yên tâm, Dây Chun sẽ thay bạn "ghi nhớ" với tính năng nhắc nhở thời gian, địa điểm trước mỗi cuộc hẹn'},
    {id: 4, title: 'tracking vị trí', subtitle: 'đừng hòng lí do', content: 'Không chỉ dành cho những người bạn có câu cửa miệng "đang trên đường tới", mà còn phòng khi ai đó lạc lối trên mọi nẻo đường.'},
  ]

  const [activeFunc, setActiveFunc] = useState(0)

  const handleItemClick = (e) => {
    if ((e.target.id === 'click-1') || (e.target.id === 'click-1-mobile')) {
      document.getElementById('item-1').classList.add('active')
      document.getElementById('item-2').classList.remove('active')
      document.getElementById('item-3').classList.remove('active')
      document.getElementById('item-4').classList.remove('active')
      document.getElementById('item-1-mobile').classList.add('active')
      document.getElementById('item-2-mobile').classList.remove('active')
      document.getElementById('item-3-mobile').classList.remove('active')
      document.getElementById('item-4-mobile').classList.remove('active')
      setActiveFunc(1)
    }

    if ((e.target.id === 'click-2') || (e.target.id === 'click-2-mobile')) {
      document.getElementById('item-1').classList.remove('active')
      document.getElementById('item-2').classList.add('active')
      document.getElementById('item-3').classList.remove('active')
      document.getElementById('item-4').classList.remove('active')
      document.getElementById('item-1-mobile').classList.remove('active')
      document.getElementById('item-2-mobile').classList.add('active')
      document.getElementById('item-3-mobile').classList.remove('active')
      document.getElementById('item-4-mobile').classList.remove('active')
      setActiveFunc(2)
    }
    
    if ((e.target.id === 'click-3') || (e.target.id === 'click-3-mobile')) {
      document.getElementById('item-1').classList.remove('active')
      document.getElementById('item-2').classList.remove('active')
      document.getElementById('item-3').classList.add('active')
      document.getElementById('item-4').classList.remove('active')
      document.getElementById('item-1-mobile').classList.remove('active')
      document.getElementById('item-2-mobile').classList.remove('active')
      document.getElementById('item-3-mobile').classList.add('active')
      document.getElementById('item-4-mobile').classList.remove('active')
      setActiveFunc(3)
    }

    if ((e.target.id === 'click-4') || (e.target.id === 'click-4-mobile')) {
      document.getElementById('item-1').classList.remove('active')
      document.getElementById('item-2').classList.remove('active')
      document.getElementById('item-3').classList.remove('active')
      document.getElementById('item-4').classList.add('active')
      document.getElementById('item-1-mobile').classList.remove('active')
      document.getElementById('item-2-mobile').classList.remove('active')
      document.getElementById('item-3-mobile').classList.remove('active')
      document.getElementById('item-4-mobile').classList.add('active')
      setActiveFunc(4)
    }
  }  

  return (
    <div id='functionality' className='functionality'>
      <div className='functionality-container'>
        <div className='function-list'>
          <div className='function-list-title'>những tính năng<br />thú vị</div>
          {
            func.map((item) => (
              <div key={`item-${item.id}`} id={`item-${item.id}`} className='function-item-container hide-on-mobile'>
                <div className='function-item-icon'></div>
                <div className='function-item-text'>{`${item.text}`}</div>
                <div id={`click-${item.id}`} className='click-area' onMouseEnter={(e) => handleItemClick(e)}></div>
              </div>
            ))
          }
          <div className='show-on-mobile'>
            {
              func.map((item) => (
                <div key={`item-${item.id}-mobile`} id={`item-${item.id}-mobile`} className='function-item-container'>
                  <div className='function-item-icon'></div>
                  <div className='function-item-text'>{`${item.text}`}</div>
                  <div id={`click-${item.id}-mobile`} className='click-area' onClick={(e) => handleItemClick(e)}></div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='function-showcase'>
          {
            (
              <div key={`showcase-${showcase[activeFunc].id}`} id={`showcase-${showcase[activeFunc].id}`} className='function-showcase-container'>
                <div className='showcase-text-container'>
                  <div className='showcase-title'>{showcase[activeFunc].title}</div>
                  <div className='showcase-subtitle'>{showcase[activeFunc].subtitle}</div>
                  <div className='showcase-content'>{showcase[activeFunc].content}</div>
                </div>
                <div className='showcase-img'></div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Functionality