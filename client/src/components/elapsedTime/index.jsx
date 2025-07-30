import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { motion } from 'framer-motion';

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
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className='inline-flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-md shadow-sm'>
      <Timer className='w-4 h-4 text-green-600 dark:text-green-400' />
      <span>{formatElapsedTime(elapsedTime)}</span>
    </motion.div>
  );
};

export default ElapsedTime;
