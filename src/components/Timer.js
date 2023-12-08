import {useEffect} from 'react';

function Timer() {
  useEffect(function () {
    setInterval(() => {
      console.log('hi');
    }, 1000);
  }, []);

  return <div className="timer"></div>;
}

export default Timer;
