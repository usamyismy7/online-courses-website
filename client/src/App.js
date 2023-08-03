import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import ApplyPage from './components/apply';
import Scroll from './components/scrollToTop';

function App() {
  return (
    <Router>
      <Scroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
