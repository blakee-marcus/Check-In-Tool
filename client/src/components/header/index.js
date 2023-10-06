import React from 'react';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className='p-2 flex-row justify-space-between'>
      <h1>Check In</h1>
      <p className='text-primary' onClick={logout}>
        Log Out
      </p>
    </header>
  );
};
export default Header;
