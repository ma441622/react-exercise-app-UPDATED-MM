import React, { useState, useEffect } from 'react';

//name of exercise taken
const DurationExercise = ({ name }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  const TimeReStart = () => {
    if (isRunning) {
    //stops timer and resets
      setTime(0);
      setIsRunning(false);
    } else {
    //time is running
      setIsRunning(true);
    }
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      //runs every 10 millisec
      interval = setInterval(() => {
        //increment by 10
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    // timer stopped
    return () => clearInterval(interval);
  }, [isRunning]);


  const CalcTime = (time) => {
    //calculates minutes
    const minutes = Math.floor(time / 60000);
    //calculates seconds
    const seconds = Math.floor((time % 60000) / 1000);
    //calculates milliseconds
    const milliseconds = time % 1000;
    //returns as string with double digits, the milliseconds has 3
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
  };

//running show reset other time show start
  return (
    <div>
      <h3>{name}</h3>
      <p>Time: {CalcTime(time)}</p>
      <button onClick={TimeReStart}>
        {isRunning ? 'Reset' : 'Start'}
      </button>
    </div>
  );
};

export default DurationExercise;
