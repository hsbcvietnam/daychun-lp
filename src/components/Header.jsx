import React from 'react'
import './css/Header.css'

function Header() {
    const navItems = [
        ['intro', 'Giới thiệu', ''],
        ['functionality', 'Tính năng', ''],
        ['follow', 'Theo dõi', 'nav-selected']
    ]

    const setSelected = (e) => {
        navItems.map((item) => {
            if (e.target.id === `${item[0]}-nav`) {
                document.getElementById(item[0]).scrollIntoView({behavior: 'smooth'})
            }
        })
    }

    return (
        <div className='header'>
            <div className='header-logo-container'>
                <div className='header-logo'>
                    <a href='#'><div className='click-area'></div></a>
                </div>
            </div>
            <div className='header-nav-area'>
                {
                    navItems.map((item) => (
                        <div key={item[0]} id={`${item[0]}-nav`} className={`header-nav-item ${item[2]}`} onClick={(e) => setSelected(e)}>{`${item[1]}`}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header