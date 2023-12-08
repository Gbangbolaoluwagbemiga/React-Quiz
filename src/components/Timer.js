import {useEffect} from 'react';

function Timer() {
  useEffect(function () {
    setInterval(() => {}, 1000);
  }, []);

  return <div className="timer"></div>;
}

export default Timer;
