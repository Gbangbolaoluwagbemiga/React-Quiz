import {useReducer} from 'react';

function reducer(state, action) {
  console.log(state, action);
  // return {count: 0, step: 1};
  switch (action.type) {
    case 'dec':
      return {...state, count: state.count - 1};
    case 'inc':
      return {...state, count: state.count + 1};
    case 'setCount':
      return {...state, count: action.payload};

    default:
      console.log('Still confused');
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const initialStep = {count: 0, step: 1};
  const [state, dispatch] = useReducer(reducer, initialStep);
  const {count, step} = state;

  // This mutates the date object.
  const date = new Date('november 27 2023');
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type: 'dec'});
    // setCount((count) => count - 1);
    // setCount(count => count - step);
  };

  const inc = function () {
    dispatch({type: 'inc'});
    // setCount(count => count + step);
    // setCount((count) => count + 1);
  };

  const defineCount = function (e) {
    dispatch({type: 'setCount', payload: Number(e.target.value)});
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
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
