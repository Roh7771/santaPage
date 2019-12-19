import React from 'react';
import santa from './../../images/santa.png'

export default function MainPage(props) {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className='text-center font-weight-bold greating animated fadeIn delay-1s'>Привет, дорогой Друг!</h1>
      <div className='text animated fadeIn delay-3s'>Хочешь подарки от Санты?</div>
      <div className='text animated fadeIn delay-3s'>Тогда тебе придется отгадать мои загадки.</div>
      <div className='text animated fadeIn delay-6s'>Каждый день - новая загадка.</div>
      <div className='text animated fadeIn delay-6s'>Отгадаешь - и подарок твой!</div>
      <div className='text animated fadeIn delay-9s'>Начнем?</div>
      <button className='btn btn-danger go-button mb-3 mt-3 animated fadeIn delay-9s' onClick={props.onStart}>Поехали!</button>
      <img alt='' src={santa} className='d-block animated fadeIn delay-1s'></img>
    </div>
  )
}