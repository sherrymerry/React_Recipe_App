import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Hero.jsx';
import Home from './pages/Home.jsx';
import RecipeType from './pages/RecipeType.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      {/* <Navbar toggleSidebar={toggleSidebar} /> */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/type/:type" element={<RecipeType />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
     
    </Router>
  );
};

export default App;
