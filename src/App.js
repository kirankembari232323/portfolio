import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from "./pages/Page";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
