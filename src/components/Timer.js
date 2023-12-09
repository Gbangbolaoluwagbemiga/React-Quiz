import {useEffect} from 'react';

function Timer({dispatch, countDown}) {
  useEffect(
    function () {
      setInterval(() => {
        dispatch({type: 'tick'});
      }, 1000);
    },
    [dispatch]
  );

  return <div className="timer">{countDown}</div>;
}

export default Timer;
