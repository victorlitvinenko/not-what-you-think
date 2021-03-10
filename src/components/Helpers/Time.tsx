import React, { useState, useEffect } from 'react';

const Time = () => {
  const [state, setState] = useState({ time: new Date() });

  useEffect(() => {
    setInterval(() => {
      setState({ time: new Date() });
    }, 1000);
  });

  return (
    <div>
      <span className="mr10">{state.time.toLocaleTimeString()}</span>
      <span className="clock__date mr10">{state.time.toDateString()}</span>
    </div>
  );
};

export default Time;
