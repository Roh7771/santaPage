import React from 'react';

export default function Question(props) {
  return (
    <div className='container'>
      <form className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <div className='question mb-4'>Какой элемент вращается вокруг солнца?</div>
        <div className='inputs'>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio2" checked={props.answer === 'Нептуний'} value="Нептуний" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label label" htmlFor="customRadio2">Нептуний</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio1" checked={props.answer === 'Плутоний'} value="Плутоний" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio1">Плутоний</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio3" checked={props.answer === 'Уран'} value="Уран" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio3">Уран</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio4" checked={props.answer === 'Калифорний'} value="Калифорний" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio4">Калифорний</label>
          </div>
        </div>
        <button type="button" onClick={props.onAnswer} className="btn btn-danger mt-5 answer-button">Отправить ответ Санте!</button>
      </form>
    </div>
  )
}