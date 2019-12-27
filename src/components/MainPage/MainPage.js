import React from 'react';
import santa from './../../images/santa.png'

export default function MainPage(props) {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className='text-center font-weight-bold greating animated fadeIn delay-1s'>Привет, дорогой Друг!</h1>
      <div className='text animated fadeIn delay-3s'>Завтра ты узнаешь кто твой Санта :)</div>
      <div className='text animated fadeIn delay-6s'>И получишь свой главный подарок!</div>
      <div className='text animated fadeIn delay-9s'>До встречи!</div>
      <img alt='' src={santa} className='d-block animated fadeIn delay-1s mt-2'></img>
    </div>
  )
}