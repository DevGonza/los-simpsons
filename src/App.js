import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/';
import Footer from './componentes/Footer/';
import Contacto from './pages/contacto/Contacto'
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/los-simpsons" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
      
    
  );
}

export default App;
