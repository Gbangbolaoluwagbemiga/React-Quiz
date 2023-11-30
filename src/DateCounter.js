import {useReducer} from 'react';

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'dec':
      return {...state, count: state.count - state.step};
    case 'inc':
      return {...state, count: state.count + state.step};
    case 'setCount':
      return {...state, count: action.payload};
    case 'setStep':
      return {...state, step: action.payload};
    case 'reset':
      return {count: 0, step: 1};
    default:
      console.log('Getting it');
  }
}

function DateCounter() {
  const initialStep = {count: 0, step: 1};
  const [state, dispatch] = useReducer(reducer, initialStep);
  const {count, step} = state;

  // This mutates the date object.
  const date = new Date('november 27 2023');
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type: 'dec'});
  };

  const inc = function () {
    dispatch({type: 'inc'});
  };

  const defineCount = function (e) {
    dispatch({type: 'setCount', payload: Number(e.target.value)});
  };

  const defineStep = function (e) {
    dispatch({type: 'setStep', payload: Number(e.target.value)});
  };

  const reset = function () {
    dispatch({type: 'reset'});
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
