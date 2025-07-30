import React from 'react';
import { LogOut, UserCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='w-full bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 px-4 py-3 shadow-sm flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <UserCircle2 className='w-6 h-6 text-green-600 dark:text-green-400' />
        <h1 className='text-lg font-semibold text-zinc-800 dark:text-zinc-100'>Check In</h1>
      </div>

      <button
        onClick={logout}
        className='inline-flex items-center gap-1 text-sm font-medium text-red-600 dark:text-red-400 hover:underline hover:text-red-700 transition'>
        <LogOut className='w-4 h-4' />
        Log Out
      </button>
    </motion.header>
  );
};

export default Header;
