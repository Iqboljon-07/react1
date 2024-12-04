import React from 'react'
import "./style.css"
import photo11 from'../../assents/imgs/photo11.png'
function Secton3() {
  return (
    <div className='section30'>
      <div className='section31'>
        <h1>Связаться</h1>
      <p>Связаться с нами</p></div>

      <div className='section32'>

        <div className='section33'>

            <h1>Контакты</h1>

            <div style={{height:"49px"}} className='section34'>
                <div></div>
                <span>г.Ташкент, Чиланзар 16-й квартал, ул. Ботирма</span>
            </div>

            <div className='section34'>
                <div></div>
                <span>+998970020771</span>
            </div>

            <div className='section34'>
                <div></div>
                <span>+998971970771 (Пн.-Пт. с 09:00 до 17:00)</span>
            </div>

            <img src={photo11} alt="" />
        </div>



        <div className='section40'>

            <h1>Оставьте заявку</h1>
            <span>В честь открытия нашей школы дарим скидку -20%</span>
            <input type="text"placeholder='Имя' />
            <input type="text" placeholder='Фамилия'/>
            <input type="text" placeholder='Номер' />
            <button>Отправить</button>
        </div>
      </div>
    </div>
    
  )
}

export default Secton3
