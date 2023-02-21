import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// layouts
import MainLayout from './layouts/MainLayout';

// pages
import Main from './pages/main_page/Main';
import Apply from './pages/apply_page/Apply';
import Introduce from './pages/doing_page/Introduce';
import { Login } from './pages/login_page/Main';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          {/* 추가된 부분 */}
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/apply" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;