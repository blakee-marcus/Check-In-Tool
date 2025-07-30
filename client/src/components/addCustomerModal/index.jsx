import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { motion } from 'framer-motion';
import { UserPlus, X } from 'lucide-react';

import { ADD_CUSTOMER } from '../../utils/mutations';
import FormInput from '../formInput';
import auth from '../../utils/auth';

const AddCustomerModal = ({ setModalOpen, setCustomers }) => {
  const [addCustomer] = useMutation(ADD_CUSTOMER);
  const [formState, setFormState] = useState({
    'Customer Name': '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addCustomer({
        variables: {
          name: formState['Customer Name'],
          checkInTime: new Date().toISOString(),
          lastTouch: auth.getProfile().data._id,
        },
      });

      const newCustomer = response.data.addCustomer;
      setCustomers((prev) => [...prev, newCustomer]);
      setModalOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4'>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className='w-full max-w-md bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-6 space-y-6 relative'>
        <div className='flex items-center justify-between border-b pb-3 border-zinc-200 dark:border-zinc-700'>
          <div className='flex items-center gap-2'>
            <UserPlus className='w-5 h-5 text-green-600 dark:text-green-400' />
            <h2 className='text-lg font-semibold text-zinc-800 dark:text-zinc-100'>Add Customer</h2>
          </div>
          <button
            type='button'
            onClick={() => setModalOpen(false)}
            className='text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'>
            <X className='w-5 h-5' />
          </button>
        </div>

        <FormInput
          handleChange={handleChange}
          label='Customer Name'
          value={formState['Customer Name']}
          autoComplete='name'
        />

        <div className='flex justify-end space-x-2 pt-2'>
          <button
            type='button'
            onClick={() => setModalOpen(false)}
            className='px-4 py-2 rounded-md text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition'>
            Cancel
          </button>
          <button
            type='submit'
            className='px-4 py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition'>
            Submit
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default AddCustomerModal;
