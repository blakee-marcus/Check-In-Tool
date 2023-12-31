import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const checkInIcon = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='5.5rem'
        height='5.5rem'
        fill='currentColor'
        className='bi bi-clipboard2-check-fill'
        viewBox='0 0 16 16'>
        <path d='M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z' />
        <path d='M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z' />
      </svg>
    );
  };

  return (
    <section className='dark vw-100 vh-100'>
      <div className='flex-column flex-center h-50'>
        {checkInIcon()}
        Check In
      </div>
      <div className='flex-column flex-center h-50'>
        <Link to='/login' className='w-80 btn-primary py-1 mb-1'>
          <div className='flex-center'>
            <span className='flex-row flex-center'>Sign In</span>
          </div>
        </Link>
        <Link to='/register' className='w-80 py-1'>
          <div className='flex-center'>
            <span className='flex-row flex-center'>Register</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
