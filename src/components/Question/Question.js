import React from 'react';

export default function Question(props) {
  return (
    <div className='container'>
      <form className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <div className='question mb-4'>Хоть многие вещества превращает в яд,<br/>В химии она достойна всяческих наград.</div>
        <div className='inputs'>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio2" checked={props.answer === 'Сурьма'} value="Сурьма" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label label" htmlFor="customRadio2">Сурьма</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio1" checked={props.answer === 'Медь'} value="Медь" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio1">Медь</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio3" checked={props.answer === 'Платина'} value="Платина" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio3">Платина</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio4" checked={props.answer === 'Сера'} value="Сера" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio4">Сера</label>
          </div>
        </div>
        <button type="button" onClick={props.onAnswer} className="btn btn-danger mt-5 answer-button">Отправить ответ Санте!</button>
      </form>
    </div>
  )
}