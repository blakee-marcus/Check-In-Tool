import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { motion } from 'framer-motion';
import {
  Home as HomeIcon,
  LogIn,
  UserPlus,
  ShieldCheck,
  FileText,
  CheckSquare,
} from 'lucide-react';

import Auth from './utils/auth';

// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import TermsOfService from './pages/Terms';
import CheckIn from './pages/CheckIn';

const httpLink = createHttpLink({ uri: '/graphql' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const SidebarItem = ({ to, label, Icon, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className='flex items-center gap-3 px-4 py-2 rounded-md hover:bg-muted transition-all'>
    <Icon className='w-5 h-5' />
    <span className='text-sm font-medium'>{label}</span>
  </Link>
);

function App() {
  const loggedIn = Auth.loggedIn();

  const handleLogout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex min-h-screen bg-background text-foreground font-sans'>
          <aside className='w-60 p-4 border-r border-border bg-card shadow-md'>
            <nav className='space-y-2'>
              <SidebarItem to='/' label='Home' Icon={HomeIcon} />

              {loggedIn ? (
                <>
                  <SidebarItem to='/checkin' label='Check-In' Icon={CheckSquare} />
                  <SidebarItem to='/' label='Log Out' Icon={LogIn} onClick={handleLogout} />
                </>
              ) : (
                <>
                  <SidebarItem to='/login' label='Login' Icon={LogIn} />
                  <SidebarItem to='/register' label='Register' Icon={UserPlus} />
                </>
              )}
            </nav>
          </aside>

          <main className='flex-1 p-6 overflow-y-auto'>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className='max-w-4xl mx-auto'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/terms' element={<TermsOfService />} />
                <Route path='/checkin' element={<CheckIn />} />
              </Routes>
            </motion.div>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
