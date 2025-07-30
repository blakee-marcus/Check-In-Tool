import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center dark:bg-zinc-900 px-4 py-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='w-full max-w-sm bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-6 space-y-6 text-center'>
        <div className='flex flex-col items-center space-y-2'>
          <ClipboardCheck className='w-16 h-16 text-green-600 dark:text-green-400' />
          <h1 className='text-2xl font-semibold text-zinc-800 dark:text-zinc-100'>Check In</h1>
        </div>

        <div className='space-y-3'>
          <Link
            to='/login'
            className='block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md text-center transition'>
            Sign In
          </Link>
          <Link
            to='/register'
            className='block w-full border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-100 py-2 rounded-md text-center hover:bg-zinc-100 dark:hover:bg-zinc-700 transition'>
            Register
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
