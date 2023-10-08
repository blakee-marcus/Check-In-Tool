import React, { useState, useEffect } from 'react';

const ElapsedTime = ({ checkInTime }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      const difference = now - parseInt(checkInTime);
      setElapsedTime(difference);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [checkInTime]);

  const formatElapsedTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    const seconds = totalSeconds - hours * 3600 - minutes * 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return <span>{formatElapsedTime(elapsedTime)}</span>;
};

export default ElapsedTime;
