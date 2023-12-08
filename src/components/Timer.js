import {useEffect} from 'react';

function Timer({dispatch}) {
  useEffect(
    function () {
      setInterval(() => {
        dispatch({type: 'tick'});
      }, 1000);
    },
    [dispatch]
  );

  return <div className="timer"></div>;
}

export default Timer;
