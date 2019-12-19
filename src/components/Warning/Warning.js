import React from 'react';
import santa from './../../images/santa.png';

export default function Warning() {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className='text-center font-weight-bold greating'>Привет!</h1>
      <div className='text'>Похоже, ты уже отгадывал загадку сегодня.</div>
      <div className='text '>Приходи завтра.</div>
      <img alt='' src={santa} className='d-block mt-5'></img>
    </div>
  )
}