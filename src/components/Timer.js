import {useEffect} from 'react';

function Timer({dispatch, countDown}) {
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({type: 'tick'});
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <div className="timer">{countDown}</div>;
}

export default Timer;
