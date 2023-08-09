import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import ApplyPage from './components/applyStudent';
import ApplyTeacherPage from './components/applyTeacher';
import Scroll from './components/scrollToTop';

function App() {
  return (
    <Router>
      <Scroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/applyStudent" element={<ApplyPage />} />
        <Route path="/applyTeacher" element={<ApplyTeacherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
