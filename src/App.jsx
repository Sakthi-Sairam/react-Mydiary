import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DiaryList from './Pages/DiaryList/DiaryList';
import DiaryDetails from './Pages/DiaryDetails/DairyDetails';
import Navigation from './Components/Navigation/Navigation';
import AddDiary from './Pages/AddDiary/AddDiary';
import './App.css';

function App() {
  const [diaries, setDiaries] = useState([]);

  const addDiary = (diary) => {
    setDiaries([...diaries, diary]);
  };

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<DiaryList diaries={diaries} />} />
        <Route path="/add-diary" element={<AddDiary onAdd={addDiary} />} />
        <Route path="/diaries/:id" element={<DiaryDetails diaries={diaries} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
