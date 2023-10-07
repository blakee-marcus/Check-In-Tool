import React from 'react';

import formatTime from '../../utils/formatTime';

const SingleCustomer = ({ customer, handleChange }) => {
  return (
    <div key={customer._id}>
      <p className={`text-${customer.status}`}>
        {formatTime(customer.checkInTime)}
      </p>
      <div
        className={`background-${customer.status} text-${customer.status} pl-1 flex-row justify-space-between`}>
        <div className='flex-column'>
          <p style={{ fontWeight: '500' }}>{customer.name}</p>
          <p>by {customer.fromUser.username}</p>
        </div>
        <select
          value={customer.status}
          onChange={(e) => handleChange(customer._id, e.target.value)}>
          <option value='waiting'>Waiting</option>
          <option value='assisting'>Assisting</option>
          <option value='assisted'>Assisted</option>
        </select>
      </div>
    </div>
  );
};

export default SingleCustomer;
