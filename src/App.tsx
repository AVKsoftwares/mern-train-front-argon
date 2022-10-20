import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './assets/css/argon-dashboard-pro-react.css'


import LayoutNavbar from './components/LayoutNavbar';

import Index from './pages/index';
import PageNotFound from './pages/page-not-found';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutNavbar />}>
          <Route index element={<Index />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
