import { useState } from 'react';

const StarRating = () => {
  const [ratingCount, setRatingCount] = useState(0);

  const [hoverCount, setHoverCount] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            onClick={() => setRatingCount(index + 1)}
            onMouseOver={() => setHoverCount(index + 1)}
            onMouseOut={() => setHoverCount(0)}
            style={{
              color: ratingCount > index || hoverCount > index ? 'yellow' : '',
            }}
          >
            &#9733;
          </span>
        ))}
      </div>
      <span>Rating: {ratingCount}</span>
    </div>
  );
};

export default StarRating;
