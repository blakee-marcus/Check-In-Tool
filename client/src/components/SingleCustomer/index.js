import React from 'react';

import formatTime from '../../utils/formatTime';
import ElapsedTime from '../elapsedTime';

const SingleCustomer = ({ customer, handleChange }) => {
  return (
    <div key={customer._id}>
      <p className={`text-${customer.status}`}>
        {customer.status == 'waiting' || customer.status == 'inspecting' ? (
          <ElapsedTime checkInTime={customer.checkInTime} />
        ) : (
          formatTime(customer.checkInTime)
        )}
      </p>
      <div
        className={`background-${customer.status} text-${customer.status} pl-1 flex-row justify-space-between`}>
        <div className='flex-column'>
          <p style={{ fontWeight: '500' }}>{customer.name}</p>
          <p>Last Touch: {customer.lastTouch.username ? customer.lastTouch.username : customer.lastTouch}</p>
        </div>
        <select
          className={`text-${customer.status}`}
          value={customer.status}
          onChange={(e) => handleChange(customer._id, e.target.value)}>
          <option value='waiting'>Waiting</option>
          <option value='inspecting'>Inspecting</option>
          <option value='assisting'>Assisting</option>
          <option value='assisted'>Assisted</option>
        </select>
      </div>
    </div>
  );
};

export default SingleCustomer;
