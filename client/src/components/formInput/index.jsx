import React from 'react';
import { motion } from 'framer-motion';

const FormInput = ({
  handleChange,
  label,
  autoComplete = 'off',
  type = 'text',
  value = '',
  placeholder = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className='w-full space-y-1'>
      <label htmlFor={label} className='block text-sm font-medium text-zinc-700 dark:text-zinc-300'>
        {label}
      </label>
      <input
        id={label}
        name={label}
        type={type}
        value={value}
        onChange={handleChange}
        autoComplete={autoComplete}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        className='w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md text-sm bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
      />
    </motion.div>
  );
};

export default FormInput;
