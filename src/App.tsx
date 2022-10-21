import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import LayoutNavbar from './components/LayoutNavbar';
import Index from './pages/index';
import AddExercice from './pages/addExercice';
import UpdateExercice from './pages/updateExercice';
import Exercice from './pages/exercice';
import PageNotFound from './pages/page-not-found';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutNavbar />}>
          <Route index element={<Index />} />
          <Route path="/addExercice" element={<AddExercice />} />
          <Route path="/updateExercice/:id" element={<UpdateExercice />} />
          <Route path="/exercice/:id" element={<Exercice />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
