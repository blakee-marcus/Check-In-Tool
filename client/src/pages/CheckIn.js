import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Header from '../components/header';
import SingleCustomer from '../components/SingleCustomer';
import todaysDate from '../utils/dateFormat';
import AddCustomerModal from '../components/addCustomerModal';

import { QUERY_DAY } from '../utils/queries';
import { UPDATE_CUSTOMER } from '../utils/mutations';

const CheckIn = () => {
  const [customers, setCustomers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateCustomer] = useMutation(UPDATE_CUSTOMER);
  const { loading, data } = useQuery(QUERY_DAY, {
    variables: { date: `${todaysDate()}, 12:00 am` },
  });

  useEffect(() => {
    if (data?.getDay?.customers) {
      setCustomers(data?.getDay?.customers);
      console.log(data);
    }
  }, [data]);

  const handleChange = (customerId, newStatus) => {
    updateCustomer({
      variables: { customerId, status: newStatus },
    });
    // update local state so we don't have to refresh the page
    const updatedCustomers = customers.map((customer) => {
      if (customer._id === customerId) {
        return { ...customer, status: newStatus };
      }
      return customer;
    });
    setCustomers(updatedCustomers);
  };

  return (
    <section className='m-0 flex-column'>
      {modalOpen && <AddCustomerModal setModalOpen={setModalOpen} setCustomers={setCustomers} />}
      <Header />
      <div className='header-secondary sticky px-2 flex-row justify-space-between'>
        {todaysDate()}
        <button style={{ backgroundColor: 'transparent' }} onClick={() => {setModalOpen(true)}}>+</button>
      </div>
      <div className='mx-3 mb-3'>
        {customers &&
          customers.map((customer) => (
            <SingleCustomer
              key={customer._id}
              customer={customer}
              handleChange={handleChange}
            />
          ))}
      </div>
    </section>
  );
};

export default CheckIn;
