import React from 'react'
import {
  BrowserRouter ,
  Routes,
  Route
} from 'react-router-dom'
import { About,Education,Experience,Skills,Awards } from './pages'
import Navigation from './components/Navigation';

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation Component */}
      <Navigation />
        
      {/* Routes */}
      <div className="lg:pl-[17rem] w-full">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/awards" element={<Awards />} />
        {/* Add more routes as needed */}
      </Routes>
      </div>
    </BrowserRouter>
  );
}