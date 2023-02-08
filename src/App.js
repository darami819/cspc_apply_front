import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Main from './pages/main_page/Main';
import Apply from './pages/apply_page/Apply';
import Modify from './pages/apply_page/Modify';
import Result from './pages/apply_page/Result';
import Banner from './layouts/Banner';
import Mt from './pages/doing_page/Mt';
import Party from './pages/doing_page/Party';
import Picnic from './pages/doing_page/Picnic';
import Senior from './pages/doing_page/Senior';
import StaffDinner from './pages/doing_page/StaffDinner';
import Study from './pages/doing_page/Study';
import Work from './pages/doing_page/Work';

const App = () => {
  return (
    <Routes>
      <Route element={<Banner />}>
        <Route path="/" element={<Main />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="modify" element={<Modify />} />
        <Route path="result" element={<Result />} />
        <Route path="mt" element={<Mt />} />
        <Route path="party" element={<Party />} />
        <Route path="picnic" element={<Picnic />} />
        <Route path="senior" element={<Senior />} />
        <Route path="staffDinner" element={<StaffDinner />} />
        <Route path="study" element={<Study />} />
        <Route path="work" element={<Work />} />
      </Route>
    </Routes>
  );
};

export default App;