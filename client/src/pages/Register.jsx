import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

import { ADD_USER } from '../utils/mutations';
import FormInput from '../components/formInput';
import Auth from '../utils/auth';

const Register = () => {
  const [addUser, { error }] = useMutation(ADD_USER);
  const [formState, setFormState] = useState({
    Username: '',
    Password: '',
    'Confirm Password': '',
  });

  const [passwordMatch, setPasswordMatch] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const confirmPassword = (updatedFormState) => {
    setPasswordMatch(
      updatedFormState.Password === updatedFormState['Confirm Password'] &&
        updatedFormState.Password.length > 0,
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFormState = { ...formState, [name]: value };
    setFormState(updatedFormState);
    confirmPassword(updatedFormState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!passwordMatch) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const { data } = await addUser({
        variables: {
          username: formState.Username,
          password: formState.Password,
        },
      });

      Auth.login(data.addUser.token);
      window.location.replace('/checkin');
    } catch (e) {
      if (e.message.includes('username_1 dup key')) {
        setErrorMessage('This username is already taken.');
      } else if (e.message.includes('password: Path `password`')) {
        setErrorMessage('Password must be at least 8 characters.');
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
      console.error(e);
    }
  };

  return (
    <section className='min-h-screen flex items-center justify-center dark:bg-zinc-900 px-4'>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='w-full max-w-md bg-white dark:bg-zinc-800 shadow-md rounded-2xl p-6 space-y-6'>
        <div className='text-center'>
          <UserPlus className='mx-auto h-10 w-10 text-green-600 dark:text-green-400' />
          <h1 className='text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-2'>
            Create Account
          </h1>
          <p className='text-sm text-zinc-500 dark:text-zinc-400'>
            Join us to manage check-ins and more
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
            autoComplete='new-password'
          />
          <FormInput
            handleChange={handleChange}
            label='Confirm Password'
            type='password'
            value={formState['Confirm Password']}
          />

          <p className='text-xs text-zinc-500 dark:text-zinc-400 mt-2'>
            By clicking “Next”, I agree to the{' '}
            <Link
              to='/privacy'
              className='underline hover:text-green-600 dark:hover:text-green-400'>
              Privacy Notice
            </Link>{' '}
            and{' '}
            <Link to='/terms' className='underline hover:text-green-600 dark:hover:text-green-400'>
              Terms of Service
            </Link>
            .
          </p>

          {errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}

          <button
            type='submit'
            disabled={!passwordMatch}
            className={`w-full py-2 rounded-md font-medium transition ${
              passwordMatch
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-zinc-300 dark:bg-zinc-600 text-zinc-500 cursor-not-allowed'
            }`}>
            Next
          </button>
        </form>

        <div className='text-center pt-2'>
          <p className='text-sm text-zinc-600 dark:text-zinc-300'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='text-green-600 dark:text-green-400 font-medium hover:underline'>
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Register;
