import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

import formatTime from '../../utils/formatTime';
import ElapsedTime from '../elapsedTime';

const statusColors = {
  waiting: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  inspecting: 'bg-blue-100 text-blue-800 border-blue-300',
  assisting: 'bg-purple-100 text-purple-800 border-purple-300',
  assisted: 'bg-green-100 text-green-800 border-green-300',
};

const SingleCustomer = ({ customer, handleChange }) => {
  const statusColor = statusColors[customer.status] || 'bg-gray-100 text-gray-800';

  return (
    <motion.div
      key={customer._id}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`w-full rounded-lg shadow-sm border ${statusColor} px-4 py-3 mb-4 flex flex-col sm:flex-row justify-between gap-4`}>
      {/* Left section */}
      <div className='flex flex-col justify-center'>
        <p className='text-lg font-semibold'>{customer.name}</p>
        <p className='text-sm text-zinc-600 dark:text-zinc-300'>
          Last Touch:{' '}
          <span className='font-medium'>{customer.lastTouch.username || customer.lastTouch}</span>
        </p>
        <div className='mt-1 flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400'>
          <Clock className='w-4 h-4' />
          {['waiting', 'inspecting'].includes(customer.status) ? (
            <ElapsedTime checkInTime={customer.checkInTime} />
          ) : (
            formatTime(customer.checkInTime)
          )}
        </div>
      </div>

      {/* Right section */}
      <div className='flex flex-col items-end justify-between gap-2 w-full sm:w-48'>
        <select
          className='w-full text-sm rounded-md border border-zinc-300 dark:border-zinc-600 px-2 py-1 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100'
          value={customer.status}
          onChange={(e) => handleChange(customer._id, e.target.value)}>
          <option value='waiting'>Waiting</option>
          <option value='inspecting'>Inspecting</option>
          <option value='assisting'>Assisting</option>
          <option value='assisted'>Assisted</option>
        </select>

        {customer.status === 'waiting' && (
          <select
            className='w-full text-sm rounded-md border border-zinc-300 dark:border-zinc-600 px-2 py-1 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100'
            value={customer.locationWaiting}
            onChange={(e) => handleChange(customer._id, customer.status, e.target.value)}>
            <option value='showroom'>Showroom</option>
            <option value='edu station'>Edu Station</option>
          </select>
        )}
      </div>
    </motion.div>
  );
};

export default SingleCustomer;
