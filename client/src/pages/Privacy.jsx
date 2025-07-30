import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <section className="min-h-screen w-full px-4 py-10 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-xl p-6 space-y-6"
      >
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-700 pb-4">
          <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
          <div>
            <h1 className="text-2xl font-semibold">Privacy Notice</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Last updated: 10/04/2023</p>
          </div>
        </div>

        <div className="space-y-4">
          <section>
            <h2 className="text-lg font-semibold mb-1">Introduction</h2>
            <p>
              Welcome to Check In. We respect your privacy and are committed to protecting your
              personal data. This privacy notice will inform you as to how we handle your personal
              data when you visit our website, and tell you about your privacy rights and how the
              law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-1">Important Information and Who We Are</h2>

            <h3 className="font-medium mt-3">Purpose of this Privacy Notice</h3>
            <p>
              This privacy notice aims to provide you with information on how Check In collects and
              processes your personal data when you use our website, including any data you may
              provide when checking in customers.
            </p>

            <h3 className="font-medium mt-3">Contact Details</h3>
            <p>If you have any questions about this privacy notice or our data protection practices, please contact:</p>
            <p>
              Email address:{' '}
              <a
                href="mailto:bmarcus@tesla.com"
                className="text-green-600 dark:text-green-400 underline"
              >
                bmarcus@tesla.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-1">The Data We Collect About You</h2>
            <p>We may collect, use, store, and transfer the following personal data about you:</p>
            <ul className="list-disc list-inside ml-2 mt-2 space-y-1">
              <li>Usernames associated with user accounts on Check In.</li>
              <li>Names of the customers that users have checked in.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-1">How We Use Your Personal Data</h2>
            <p>We will only use your personal data for the purpose for which we collected it, which includes:</p>
            <ul className="list-disc list-inside ml-2 mt-2 space-y-1">
              <li>To manage user accounts and their functionalities.</li>
              <li>To allow users to check-in customers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-1">Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from
              being accidentally lost, used, or accessed in an unauthorized way, altered, or
              disclosed. Access to your personal data is limited to those who have a business need
              to know.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-1">Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the
              purposes for which we collected it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-1">Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to
              your personal data. These rights include the right to:
            </p>
            <ul className="list-disc list-inside ml-2 mt-2 space-y-1">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to the processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request the transfer of your personal data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-1">
              Changes to the Privacy Notice and Your Duty to Inform Us of Changes
            </h2>
            <p>
              This version was last updated on 10/04/2023. We may update this privacy notice from
              time to time. You are encouraged to review this privacy notice regularly to be
              informed of how we are protecting your data.
            </p>
          </section>
        </div>
      </motion.div>
    </section>
  );
};

export default Privacy;
