import React from 'react';
import santa from './../../images/santa.png'

export default function MainPage(props) {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className='text-center font-weight-bold greating animated fadeIn delay-1s'>Привет, дорогой Друг!</h1>
      <div className='text animated fadeIn delay-3s'>Ты просто Красавчик! :)</div>
      <div className='text animated fadeIn delay-3s'>Твой вчерашний ответ оказался верным.</div>
      <div className='text animated fadeIn delay-6s'>Продолжай в том же духе.</div>
      <div className='text animated fadeIn delay-6s'>Сегодня тебя ждет новая загадка!</div>
      <div className='text animated fadeIn delay-9s'>Готов?</div>
      <button className='btn btn-danger go-button mb-3 mt-3 animated fadeIn delay-9s' onClick={props.onStart}>Поехали!</button>
      <img alt='' src={santa} className='d-block animated fadeIn delay-1s'></img>
    </div>
  )
}