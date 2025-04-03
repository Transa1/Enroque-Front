import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Properties from './components/Properties/Properties';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='propiedades' element={<Properties />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
