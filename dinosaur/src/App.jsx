import React from 'react'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Index from './pages/Index';
import Dinosaur from './pages/Dinosaur';

export default function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/:dinosaur" element={<Dinosaur />} />
            <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  )
}
