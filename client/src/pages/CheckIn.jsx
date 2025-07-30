import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Plus, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Header from '../components/header';
import SingleCustomer from '../components/SingleCustomer';
import todaysDate from '../utils/dateFormat';
import AddCustomerModal from '../components/addCustomerModal';

import { QUERY_DAY } from '../utils/queries';
import { UPDATE_CUSTOMER } from '../utils/mutations';
import auth from '../utils/auth';

const CheckIn = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateCustomer] = useMutation(UPDATE_CUSTOMER);
  const { loading, data, refetch } = useQuery(QUERY_DAY, {
    variables: { date: `${todaysDate()}, 12:00 am` },
  });

  useEffect(() => {
    if (data?.getDay?.customers) {
      setCustomers(data?.getDay?.customers);
    }
  }, [data]);

  useEffect(() => {
    if (!auth.loggedIn()) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 120000);
    return () => clearInterval(interval);
  }, [refetch]);

  const handleChange = (customerId, newStatus, newLocation) => {
    updateCustomer({
      variables: {
        customerId,
        status: newStatus,
        locationWaiting: newLocation,
        lastTouch: auth.getProfile().data._id,
      },
    });

    const updated = customers.map((c) =>
      c._id === customerId
        ? {
            ...c,
            status: newStatus,
            locationWaiting: newLocation,
            lastTouch: auth.getProfile().data.username,
          }
        : c,
    );
    setCustomers(updated);
  };

  return (
    <section className='min-h-screen w-full dark:bg-zinc-900 transition-colors'>
      <Header />

      <div className='sticky top-0 z-10 flex items-center justify-between bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 px-4 py-3 shadow-sm'>
        <h2 className='text-lg font-semibold text-zinc-800 dark:text-zinc-100'>{todaysDate()}</h2>
        <button
          className='flex items-center gap-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-md transition'
          onClick={() => setModalOpen(true)}>
          <Plus className='w-4 h-4' />
          Add Customer
        </button>
      </div>

      <div className='p-4 space-y-4'>
        {loading ? (
          <div className='flex justify-center py-10'>
            <Loader2 className='w-6 h-6 animate-spin text-zinc-500' />
          </div>
        ) : (
          customers.map((customer) => (
            <motion.div
              key={customer._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}>
              <SingleCustomer customer={customer} handleChange={handleChange} />
            </motion.div>
          ))
        )}
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className='fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <AddCustomerModal setModalOpen={setModalOpen} setCustomers={setCustomers} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CheckIn;
