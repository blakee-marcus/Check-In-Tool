import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

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
  const navigate = useNavigate();

  const [passwordMatch, setPasswordMatch] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const confirmPassword = (updatedFormState) => {
    setPasswordMatch(
      updatedFormState.Password === updatedFormState['Confirm Password'] &&
        updatedFormState.Password.length > 0
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedFormState = {
      ...formState,
      [name]: value,
    };

    setFormState(updatedFormState);
    confirmPassword(updatedFormState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      if (!passwordMatch) {
        setErrorMessage('Passwords do not match.');
        return;
      }
      const { data } = await addUser({
        variables: {
          username: formState.Username,
          password: formState.Password,
        },
      });

      Auth.login(data.addUser.token);
      navigate('/checkin');
    } catch (e) {
      if (e.message.includes('username_1 dup key')) {
        setErrorMessage(
          'This username is already taken. Please choose a different username.'
        );
      }
      if (e.message.includes('password: Path `password`')) {
        setErrorMessage('Password must be 8 characters long.');
      }
      console.error(e);
    }
  };

  return (
    <section className='vw-100 vh-100 flex-column flex-center'>
      <h1 className='mb-3'>Create Account</h1>
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
          autoComplete='new-password'
        />
        <FormInput
          handleChange={handleChange}
          label='Confirm Password'
          value={formState['Confirm Password']}
          type='password'
        />

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
        <button
          className={`${
            passwordMatch ? 'btn-primary' : 'btn-primary-invalid'
          } py-1 mb-1 mt-3`}
          type='submit'>
          Next
        </button>
      </form>
      {error && (
        <p className='w-80 mx-auto flex-column justify-center text-error'>
          {errorMessage}
        </p>
      )}
    </section>
  );
};

export default Register;
