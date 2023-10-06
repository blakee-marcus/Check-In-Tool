import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

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

    const updatedFormState = {
      ...formState,
      [name]: value,
    };
    console.log(updatedFormState);
    setFormState(updatedFormState);
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
    <section className='vw-100 vh-100 flex-column flex-center'>
      <h1 className='mb-3'>Sign In</h1>
      <form
        className='w-80 mx-auto flex-column justify-center'
        onSubmit={handleFormSubmit}>
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
          autoComplete='password'
        />

        <button className='py-1 mb-1 mt-3 btn-primary' type='submit'>
          Login
        </button>
      </form>
      <div className='w-80 mx-auto flex-row justify-center btn'>
        <Link to='/register'>Create Account</Link>
      </div>

      {error && (
        <p className='w-80 mx-auto flex-column justify-center text-error'>
          {errorMessage}
        </p>
      )}
    </section>
  );
};

export default Login;
