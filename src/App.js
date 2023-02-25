import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// layouts
import MainLayout from './layouts/MainLayout';
import ApplyBanner from './layouts/applyBanner/ApplyBanner';

// pages
import Main from './pages/main_page/Main';
import Apply from './pages/apply_page/Apply';
import Introduce from './pages/doing_page/Introduce';
import { Login } from './pages/login_page/Main';
import Doc_result_fail from './pages/result_page/Doc_result_fail_page/Doc_result_fail';
import Doc_result_pass from './pages/result_page/Doc_result_pass_page/Doc_result_pass';
import In_result_fail  from './pages/result_page/Interview_result_fail_page/In_result_fail';
import In_result_pass from './pages/result_page/Interview_result_pass_page/In_result_pass';
import ApplyGuide from './pages/apply_page/applyGuide/ApplyGuide';


const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        {/* 추가된 부분 */}
        <Route path="/introduce" element={<Introduce />} />
        {/* apply페이지 경로 -> <Login /> */}
        <Route path="/apply" element={<Login />} />
        <Route path="/login" element={<Login/>}/>
        <Route element={<ApplyBanner />} >
          <Route path="result/docfail" element={<Doc_result_fail/>} />
          <Route path="result/docpass" element={<Doc_result_pass/>} />
          <Route path="/result/interviewpass" element={<In_result_pass/>} />
          <Route path="/result/interviewfail" element={<In_result_fail/>} />
        </Route>
        <Route path='/applyGuide' element={<ApplyGuide />} />
      </Route>
    </Routes>
  );
};

export default App;