import { useState, useRef } from 'react';

const CounterTwo = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef();

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setCount(0);
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>CounterTwo: {count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterTwo;
