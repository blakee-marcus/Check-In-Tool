import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_CUSTOMER } from '../../utils/mutations';
import FormInput from '../formInput';

const AddCustomerModal = ({ setModalOpen, setCustomers }) => {
  const [addCustomer] = useMutation(ADD_CUSTOMER);
  const [formState, setFormState] = useState({
    'Customer Name': '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFormState = {
      ...formState,
      [name]: value,
    };
    setFormState(updatedFormState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addCustomer({
        variables: {
          name: formState['Customer Name'],
          checkInTime: new Date().toISOString(),  },
      });

      const newCustomer = response.data.addCustomer;
      setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);

      setModalOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className='vh-100 vw-100 flex-column flex-center mx-auto w-80 z-index-important '
      onSubmit={handleSubmit}>
      <FormInput
        handleChange={handleChange}
        label='Customer Name'
        value={formState[`Customer Name`]}
        autoComplete='name'
      />
      <button className='btn-primary mt-3' type='submit'>
        Submit
      </button>
      <button
        type='button'
        onClick={() => {
          setModalOpen(false);
        }}>
        Cancel
      </button>
    </form>
  );
};

export default AddCustomerModal;
