import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quizeform from './components/Quizeform';
import ShowRes from './components/showRes';
import CreateQuiz from './components/CreateQuiz';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Quizeform />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/show" element={<ShowRes />} />
      </Routes>
    </Router>
  );
};

export default App;
