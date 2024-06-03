import React from 'react';

import './steper.css';
const Steper = ({ count, setCount, color }) => {
  const countCange = (value) => {
    if (value === 'plus') {
      setCount(count + 1);
    } else {
      count > 1 && setCount(count - 1);
    }
  };
  return (
    <div className="steper">
      <button style={{ backgroundColor: color }} className="steper-button steper-minus" onClick={() => countCange('minus')}>
        -
      </button>
      <input style={{ backgroundColor: color }} className="steper-value" type="text" disabled value={count} />
      <button style={{ backgroundColor: color }} className="steper-button steper-plus" onClick={() => countCange('plus')}>
        +
      </button>
    </div>
  );
};

export default Steper;
