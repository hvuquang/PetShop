import React from 'react'
import shoplogo from '../../images/logoshop.png'
import './SideBar.css'

function SideBar() {
  return (
    <div id='sidebar-section'>
        <div id='sidebar-header'>
            <img src={shoplogo} alt="a logo with a brown dog" />
        </div>
        <div id='sidebar-body'>
            <button>Thú cưng</button>
            <button>Thức ăn</button>
            <button>Phụ kiện</button>
            <button>Dịch vụ</button>
        </div>
    </div>
  )
}

export default SideBar
