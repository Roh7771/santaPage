import React from 'react';

export default function Question(props) {
  return (
    <div className='container'>
      <form className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <div className='question mb-4'>Металл в солях – опора многих,<br/>А нас без них, не носят ноги.</div>
        <div className='inputs'>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio2" checked={props.answer === 'Натрий'} value="Натрий" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label label" htmlFor="customRadio2">Натрий</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio1" checked={props.answer === 'Кальций'} value="Кальций" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio1">Кальций</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio3" checked={props.answer === 'Калий'} value="Калий" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio3">Калий</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio4" checked={props.answer === 'Цинк'} value="Цинк" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio4">Цинк</label>
          </div>
        </div>
        <button type="button" onClick={props.onAnswer} className="btn btn-danger mt-5 answer-button">Отправить ответ Санте!</button>
      </form>
    </div>
  )
}