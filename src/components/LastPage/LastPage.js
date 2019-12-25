import React from 'react';
import santa from './../../images/santa.png'

export default function LastPage({isLoading}) {
  const done = (
    <>
      <h1 className='done-title'>Готово!</h1>
      <div className='done-text'>Санта получил твой ответ.</div>
      <div className='done-text'>Если он верный, завтра ты получишь свой подарок!</div>
      <img alt='' src={santa} className='d-block mt-5'></img>
    </>
  );

  const loading = (
    <>
      <h1 className='done-title'>Подожди!</h1>
      <div className='done-text'>Твой ответ отпраляется Cанте.</div>
      <div className='done-text'>Это может занять пару минут.</div>
      <div className="lds-dual-ring mt-5"></div>
    </>
  )
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
      {isLoading ? loading : done}
    </div>
  )
}