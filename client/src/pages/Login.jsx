import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

import FormInput from '../components/formInput';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

const Login = () => {
  const [login, { error }] = useMutation(LOGIN);
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({
    Username: '',
    Password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: {
          username: formState.Username,
          password: formState.Password,
        },
      });

      Auth.login(data.login.token);
      window.location.replace('/checkin');
    } catch (e) {
      console.error(e);
      setErrorMessage('Incorrect username or password.');
    }
  };

  return (
    <section className='min-h-screen flex items-center justify-center dark:bg-zinc-900 px-4'>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='w-full max-w-md bg-white dark:bg-zinc-800 shadow-md rounded-2xl p-6 space-y-6'>
        <div className='text-center'>
          <LogIn className='mx-auto h-10 w-10 text-green-600 dark:text-green-400' />
          <h1 className='text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-2'>Sign In</h1>
          <p className='text-sm text-zinc-500 dark:text-zinc-400'>
            Access your account to manage check-ins
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className='space-y-4'>
          <FormInput
            handleChange={handleChange}
            label='Username'
            value={formState.Username}
            autoComplete='username'
          />
          <FormInput
            handleChange={handleChange}
            label='Password'
            type='password'
            value={formState.Password}
            autoComplete='current-password'
          />

          {errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}

          <button
            type='submit'
            className='w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition'>
            Login
          </button>
        </form>

        <div className='text-center'>
          <p className='text-sm text-zinc-600 dark:text-zinc-300'>
            Don’t have an account?
            <Link
              to='/register'
              className='text-green-600 dark:text-green-400 font-medium hover:underline ml-1'>
              Create one
            </Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Login;
