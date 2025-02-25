import React, { useState, useEffect } from "react";

//timer starts at 0
//paused or started
//the lap it's on
const RunningExercise = ({ name }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

//start or reset timer
  const TimeReStart = () => {
    if (isRunning) {
        //resets everything
      setTime(0);
      setIsRunning(false);
      setLaps([]);
    } else {
      setIsRunning(true);
    }
  };

  //same as duration exercise
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);


  const RecordLap = () => {
    if (isRunning) {
    //adds time to lap array
      setLaps([...laps, time]);
    }
  };

  //how to format time
  const CalcTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`;
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Time: {CalcTime(time)}</p>
      <button onClick={TimeReStart}>
        {isRunning ? "Reset" : "Start"}
      </button>
      <button onClick={RecordLap} disabled={!isRunning}>
        Record Lap
      </button>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {CalcTime(lap)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunningExercise;

