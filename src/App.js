import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [rotation, setRotation] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourRotation = (360 / 12) * (hours + minutes / 60);
      const minuteRotation = (360 / 60) * minutes;
      const secondRotation = (360 / 60) * seconds;

      setRotation({
        hour: hourRotation,
        minute: minuteRotation,
        second: secondRotation,
      });
    };

    // Update the clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Initial update to set the clock hands correctly
    updateClock();

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <ul id="clock">
          <li className="numbers">
            <span>1</span>
          </li>
          <li className="numbers">
            <span>2</span>
          </li>
          <li className="numbers">
            <span>3</span>
          </li>
          <li className="numbers">
            <span>4</span>
          </li>
          <li className="numbers">
            <span>5</span>
          </li>
          <li className="numbers">
            <span>6</span>
          </li>
          <li className="numbers">
            <span>7</span>
          </li>
          <li className="numbers">
            <span>8</span>
          </li>
          <li className="numbers">
            <span>9</span>
          </li>
          <li className="numbers">
            <span>10</span>
          </li>
          <li className="numbers">
            <span>11</span>
          </li>
          <li className="numbers">
            <span>12</span>
          </li>
          <li
            className="hour-hand"
            style={{ transform: `rotate(${rotation.hour}deg)` }}
          ></li>
          <li
            className="minute-hand"
            style={{ transform: `rotate(${rotation.minute}deg)` }}
          ></li>
          <li
            className="second-hand"
            style={{ transform: `rotate(${rotation.second}deg)` }}
          ></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
