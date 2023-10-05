import React from 'react';

const Privacy = () => {
  return (
    <section className='m-3'>
      <h2>Privacy Notice</h2>

      <p>
        <strong>Last updated:</strong> 10/04/2023
      </p>

      <h3 className='mt-3 mb-2'>Introduction</h3>
      <p>
        Welcome to Check In. We respect your privacy and are committed to
        protecting your personal data. This privacy notice will inform you as to
        how we handle your personal data when you visit our website, and tell
        you about your privacy rights and how the law protects you.
      </p>

      <h3 className='mt-3 mb-2'>Important Information and Who We Are</h3>

      <h4 className='mb-1'>Purpose of this Privacy Notice</h4>
      <p className='mb-2'>
        This privacy notice aims to provide you with information on how Check In
        collects and processes your personal data when you use our website,
        including any data you may provide when checking in customers.
      </p>

      <h4 className='mb-1'>Contact Details</h4>
      <p>
        If you have any questions about this privacy notice or our data
        protection practices, please contact:
      </p>
      <p>
        Email address: <a href='mailto:bmarcus@tesla.com'>bmarcus@tesla.com</a>
      </p>

      <h3 className='mt-3 mb-2'>The Data We Collect About You</h3>
      <p>
        We may collect, use, store, and transfer the following personal data
        about you:
      </p>
      <ul>
        <li>Usernames associated with user accounts on Check In.</li>
        <li>Names of the customers that users have checked in.</li>
      </ul>

      <h3 className='mt-3 mb-2'>How We Use Your Personal Data</h3>
      <p>
        We will only use your personal data for the purpose for which we
        collected it, which includes:
      </p>
      <ul>
        <li>To manage user accounts and their functionalities.</li>
        <li>To allow users to check-in customers.</li>
      </ul>

      <h3 className='mt-3 mb-2'>Data Security</h3>
      <p>
        We have put in place appropriate security measures to prevent your
        personal data from being accidentally lost, used, or accessed in an
        unauthorized way, altered, or disclosed. Access to your personal data is
        limited to those who have a business need to know.
      </p>

      <h3 className='mt-3 mb-2'>Data Retention</h3>
      <p>
        We will only retain your personal data for as long as necessary to
        fulfill the purposes for which we collected it.
      </p>

      <h3 className='mt-3 mb-2'>Your Legal Rights</h3>
      <p>
        Under certain circumstances, you have rights under data protection laws
        in relation to your personal data. These rights include the right to:
      </p>
      <ul>
        <li>Request access to your personal data.</li>
        <li>Request correction of your personal data.</li>
        <li>Request erasure of your personal data.</li>
        <li>Object to the processing of your personal data.</li>
        <li>Request restriction of processing your personal data.</li>
        <li>Request the transfer of your personal data.</li>
      </ul>

      <h3 className='mt-3 mb-2'>
        Changes to the Privacy Notice and Your Duty to Inform Us of Changes
      </h3>
      <p>
        This version was last updated on 10/04/2023. We may update this privacy
        notice from time to time. You are encouraged to review this privacy
        notice regularly to be informed of how we are protecting your data.
      </p>
    </section>
  );
};

export default Privacy;
