import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Main from './pages/main_page/Main';
import Apply from './pages/apply_page/Apply';
import Modify from './pages/apply_page/Modify';
import Result from './pages/apply_page/Result';
import Banner from './layouts/Banner';

const App = () => {
  return(
    <>
      <Routes>
        <Route element={<Banner />}>
          <Route path="/" element={<Main />} />
          <Route path="apply" element={<Apply /> } />
          <Route path="modify" element={<Modify /> } />
          <Route path="result" element={<Result /> } />
        </Route>
      </Routes>
    </>
  );
};

export default App;