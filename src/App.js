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
import ApplyGuide from './pages/apply_page/applyGuide/ApplyGuide';
import Not_allow_apply from 'pages/Not_allow_page/Not_allow_apply';
import { MiddleResult } from 'pages/result_page/MiddleResult';
import { FinalResult } from 'pages/result_page/FinalResult';
import  ScrollToTop  from 'layouts/ScrollToTop';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
      <ScrollToTop>
    <Routes>
     
      <Route element={<MainLayout />} errorElement={<NotFound></NotFound>}>
        
        <Route path="/" element={<Main />} />
        {/* 추가된 부분 */}
        <Route path="/introduce" element={<Introduce />} />
        {/* apply페이지 경로 -> <Login /> */}
        <Route path="/apply" element={<Apply />} />
        <Route path="/login" element={<Login/>}/>
        <Route element={<ApplyBanner />} >
          <Route path='/notallow' element={<Not_allow_apply />} />
          <Route path='/middle' element={<MiddleResult />} />
          <Route path='/final' element={<FinalResult/>}/>
        </Route>
        <Route path='/applyGuide' element={<ApplyGuide />} />
      
        </Route>
          
      </Routes>
        </ScrollToTop>
  );
};

export default App;