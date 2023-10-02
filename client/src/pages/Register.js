import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../components/formInput';

const Register = () => {
  const [formState, setFormState] = useState({ Username: '', Password: '', "Confirm Password": '' });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className='vw-100 vh-100 flex-column flex-center'>
      <h1 className='mb-3'>Create Account</h1>
      <form className='w-80 mx-auto flex-column justify-center'>
        <FormInput handleChange={handleChange} label='Username' value={formState.Username} autoComplete="username"  />
        <FormInput handleChange={handleChange} label='Password' type="password" value={formState.Password} autoComplete="new-password"/>
        <FormInput handleChange={handleChange} label='Confirm Password' value={formState["Confirm Password"]} type="password"/>

        <p>
          By clicking 'Next', I understand and agree to the{' '}
          <Link to='/privacy'>
            <span style={{ textDecoration: 'underline' }}>Privacy Notice</span>
          </Link>{' '}
          and{' '}
          <Link to='/terms'>
            <span style={{ textDecoration: 'underline' }}>
              Terms of Service
            </span>
          </Link>{' '}
          for creating an account.
        </p>
        <button className='btn-primary-invalid py-1 mb-1 mt-3' type='submit'>
          Next
        </button>
      </form>
    </section>
  );
};

export default Register;
