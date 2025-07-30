import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <section className='min-h-screen w-full px-4 py-10 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100'>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='max-w-4xl mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-xl p-6 space-y-6'>
        <div className='flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-700 pb-4'>
          <FileText className='w-8 h-8 text-green-600 dark:text-green-400' />
          <div>
            <h1 className='text-2xl font-semibold'>Terms of Service</h1>
            <p className='text-sm text-zinc-500 dark:text-zinc-400'>Last updated: 10/05/2023</p>
          </div>
        </div>

        <section className='space-y-4'>
          <div>
            <h2 className='text-lg font-semibold mb-1'>Acceptance of Terms</h2>
            <p>
              By accessing and using Check In ("Service"), you accept and agree to be bound by the
              terms and provisions of this agreement. If you do not agree to abide by the above,
              please do not use the Service.
            </p>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-1'>Changes to the Terms</h2>
            <p>
              We may modify these terms at any time, and such modifications will be effective
              immediately upon posting the modified terms on the website. Your continued use of the
              Service indicates your acceptance of any modified terms.
            </p>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-1'>Use of the Service</h2>
            <p>
              You agree to use the Service only for its intended purpose. You must use the Service
              in compliance with all privacy, data protection, intellectual property, and other
              applicable laws of the State of California.
            </p>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-1'>User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your user account,
              including your username and any activities in connection with your account. You agree
              to notify us immediately of any unauthorized use of your account.
            </p>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-1'>Limitation of Liability</h2>
            <p>
              Check In will not be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether incurred directly or
              indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-1'>Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service at our sole
              discretion, without notice, for conduct that we believe violates these Terms of
              Service or is harmful to other users of the Service, us, or third parties, or for any
              other reason.
            </p>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-1'>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of California, without regard to its conflict of law provisions. Any disputes
              arising from or relating to the Service or these Terms will be resolved in the state
              or federal courts located in Los Angeles, California, and you agree to the personal
              jurisdiction of these courts.
            </p>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-1'>Contact Information</h2>
            <p>For any questions about these Terms of Service, please contact:</p>
            <p>
              Email:{' '}
              <a
                href='mailto:bmarcus@tesla.com'
                className='text-green-600 dark:text-green-400 underline'>
                bmarcus@tesla.com
              </a>
            </p>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default TermsOfService;
