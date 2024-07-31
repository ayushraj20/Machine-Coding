import { useEffect, useState, useRef } from 'react';

const CounterOne = () => {
  const [count, setCount] = useState(0);
  const [runningState, setRunningState] = useState('');

  const intervalRef = useRef();

  useEffect(() => {
    if (runningState === 'start') {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (runningState === 'pause') {
      clearInterval(intervalRef.current);
    } else if (runningState === 'reset') {
      setCount(0);
      clearInterval(intervalRef.current);
    }
  }, [runningState]);

  return (
    <div>
      <p>CounterOne: {count}</p>
      <button onClick={() => setRunningState('start')}>Start</button>
      <button onClick={() => setRunningState('pause')}>Pause</button>
      <button onClick={() => setRunningState('reset')}>Reset</button>
    </div>
  );
};

export default CounterOne;
