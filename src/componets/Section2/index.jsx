import React from 'react'
import "./style.css"
import photo6 from "../../assents/imgs/photo6.png"
import photo7 from "../../assents/imgs/photo7.png"
import photo8 from "../../assents/imgs/photo8.png"
import photo9 from "../../assents/imgs/photo9.png"
import photo10 from "../../assents/imgs/photo10.png"
function Section2() {
  return (
    <div className='section20'>
   <div className='section21'>
   <h5>Классы</h5>
   <p className='section2p'>Классы</p>
   </div>

   <div className='section22'>

    <div className='section23'>

        <img className='photo6' src={photo6} alt="" />
       <div className='section24'>

        <h2 >1 классы</h2>
        <p>6-7 лет</p>
       </div>
       
       <p className='section23p'>Изучение калиграфии, логопедия, английский этикет, разговорный английский, общеобразовательные предметы и спортивные занятия</p>
       <button>Записаться</button>
    </div>


    <div className='section23'>

<img className='photo6' src={photo7} alt="" />
<div className='section24'>

<h2 >3 классы</h2>
<p>8-9 лет</p>
</div>

<p className='section23p'>Английский 2 step, китайский язык, арифметика, логическое мышление, общеобразовательные предметы и спортивные занятия</p>
<button>Записаться</button>
</div>




<div className='section23'>

<img className='photo6' src={photo8} alt="" />
<div className='section24'>

<h2 >1 классы</h2>
<p>6-7 лет</p>
</div>

<p className='section23p'>Изучение калиграфии, логопедия, английский этикет, разговорный английский, общеобразовательные предметы и спортивные занятия</p>
<button>Записаться</button>
</div>
  


  

</div>

<div className='section25'>

<div style={{width:"301px"}} className='section23'>

<img className='photo6' src={photo9} alt="" />
<div className='section24'>

<h2 >4 классы</h2>
<p>9-10 лет</p>
</div>

<p className='section23p'>Изучение калиграфии, логопедия, английский этикет, разговорный английский, общеобразовательные предметы и спортивные занятия</p>
<button>Записаться</button>
</div>



<div style={{width:"301px"}} className='section23'>

<img className='photo6' src={photo10} alt="" />
<div className='section24'>

<h2 >0 классы</h2>
<p>4-5 лет</p>
</div>

<p className='section23p'>Изучение калиграфии, логопедия, английский этикет, разговорный английский, общеобразовательные предметы и спортивные занятия</p>
<button>Записаться</button>
</div>

</div>


  
    </div>
  )
}

export default Section2
