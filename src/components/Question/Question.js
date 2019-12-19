import React from 'react';

export default function Question(props) {
  return (
    <div className='container'>
      <form className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <div className='question mb-4'>Шпаты, глины, мусковит, какой металл объединит?</div>
        <div className='inputs'>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio2" checked={props.answer === 'Железо'} value="Железо" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label label" htmlFor="customRadio2">Железо</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio1" checked={props.answer === 'Алюминий'} value="Алюминий" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio1">Алюминий</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio3" checked={props.answer === 'Олово'} value="Олово" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio3">Олово</label>
          </div>
          <div className="custom-control custom-radio">
            <input onChange={props.onChange} type="radio" id="customRadio4" checked={props.answer === 'Калий'} value="Калий" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio4">Калий</label>
          </div>
        </div>
        <button type="button" onClick={props.onAnswer} className="btn btn-danger mt-5 answer-button">Отправить ответ Санте!</button>
      </form>
    </div>
  )
}