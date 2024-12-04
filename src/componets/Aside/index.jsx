import React from 'react'
import "./style.css"
import ellips from "../../assents/imgs/Ellipse 1.png";
import rebyonok from "../../assents/imgs/reb.png";

function Aside() {
  return (
    <div class="aside-1">
        <aside>

        <div className='aside-2'>
<p ><span style={{color:"#5855E7"}}>The Best Future Stars</span> - мы заботимся о будущем вашего ребенка</p>

<p className='pclass'>Наши опытные преподователи сделают процесс обучения максимально интересным и эффективным для вашего ребенка</p>
<div className='btnall'>
          <button className='btn1'>Позвонить</button>
          <button className='btn2'>Подробнее</button>
        </div>
        </div>


<div className='right'>
<img className='img-1' src={ellips} alt="" />
<img className='img-2' src={rebyonok} alt="" />

</div>
       
        </aside>
      
    </div>
  )
}

export default Aside
