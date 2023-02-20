import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// layouts
import MainLayout from './layouts/MainLayout';
import FlyingButton from './layouts/FlyingButton';

// pages
import Main from './pages/main_page/Main';
import Apply from './pages/apply_page/Apply';
import Modify from './pages/apply_page/Modify';
import Result from './pages/apply_page/Result';
import Mt from './pages/doing_page/Mt';
import Party from './pages/doing_page/Party';
import Picnic from './pages/doing_page/Picnic';
import Senior from './pages/doing_page/Senior';
import StaffDinner from './pages/doing_page/StaffDinner';
import Study from './pages/doing_page/Study';
import Work from './pages/doing_page/Work';
import Introduce from './pages/doing_page/Introduce';
import { Login } from './pages/login_page/Main';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/mt" element={<Mt />} />
          <Route path="/party" element={<Party />} />
          <Route path="/picnic" element={<Picnic />} />
          <Route path="/senior" element={<Senior />} />
          <Route path="/staffDinner" element={<StaffDinner />} />
          <Route path="/study" element={<Study />} />
          <Route path="/work" element={<Work />} />
          {/* 추가된 부분 */}
          <Route path="/introduce" element={<Introduce />} />
          {/* apply페이지 경로 -> <Login /> */}
        <Route path="/apply" element={<Login />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/result" element={<Result />} />
      </Route>
    </Routes>
  );
};

export default App;