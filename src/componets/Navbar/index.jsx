import React from 'react'
import "./style.css"
import logo from '../../assents/imgs/logo.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar1'>
        <img  src={logo} alt="" />
       <ul>

        <li>О нашей школе</li>
        <li>Преимущества</li>
        <li>Классы</li>
        <li>Контакты</li>
       </ul>
       <button className='navbtn'>Связаться с нами</button>
      </div>
      
    </div>
  )
}

export default Navbar
