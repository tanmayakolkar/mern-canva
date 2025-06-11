// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Index from "../src/pages/Index.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
