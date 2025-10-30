import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Examples from './pages/Examples';
import About from './pages/About';
import Contact from './pages/Contact';
import Author from './pages/Author';
import Subscribe from './pages/Subscribe';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/author" element={<Author />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;