import React, {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [presentTime, currentTime] = useState(time);

  function getCurrentTime() {
    currentTime(new Date().toLocaleTimeString());
  }
  
  setInterval(getCurrentTime, 1000);

  return (
    <div className="container">
      <h1>{presentTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
