import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import SamplePage2 from './SamplePage2';
import Blogs from './Blogs';

const Main = () => {
  return (
    <Router>
      <Routes> {/* The Route decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/sample-page' element={<SamplePage2 />}></Route>
        <Route exact path='/blogs' element={<Blogs />}></Route>
      </Routes>
    </Router>
  );
}

export default Main;
