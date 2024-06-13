import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddRecord from './pages/AddRecord';
import EditRecord from './pages/EditRecord';
import ViewRecords from './pages/ViewRecords';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
       
        <Route path="/add" element={<AddRecord />} />
        <Route path="/edit/:id" element={<EditRecord />} />
        <Route path="/view" element={<ViewRecords />} />
      </Routes>
    </Router>
  );
}

export default App;
