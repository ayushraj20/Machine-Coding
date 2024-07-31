import { useState } from 'react';

const InfiniteScroll = () => {
  const [count, setCount] = useState(50);

  return (
    <div>
      {[...Array(count)].map((_, index) => (
        <div key={index}>{index + 1}</div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
