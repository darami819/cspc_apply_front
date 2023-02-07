import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Main from './pages/main_page/Main';
import Apply from './pages/apply_page/Apply';
import Modify from './pages/apply_page/Modify';
import Result from './pages/apply_page/Result';

const App = () => {
  return(
      <Routes>
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="apply" element={<Apply /> } />
          <Route path="modify" element={<Modify /> } />
          <Route path="result" element={<Result /> } />
        </Route>
      </Routes>
  );
};

export default App;