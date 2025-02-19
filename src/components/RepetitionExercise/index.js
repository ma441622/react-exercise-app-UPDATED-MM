import React, { useState } from "react";

const RepetitionExercise = ({ name }) => {
  const [count, setCount] = useState(0);

//increments
 const incrementCount = () => {
  setCount(count + 1);
};

//resets
const resetCount = () => {
  setCount(0);
};

return (
  <div>
    <h2>{name}</h2>
    <p>Repetitions: {count}</p>
    <button onClick={incrementCount}>Complete Rep</button>
    <button onClick={resetCount}>Reset</button>
  </div>
);
};

export default RepetitionExercise;
