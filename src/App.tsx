import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact'; // ✅ Add Contact import

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-purple-400">Hello There!</h1>
      <p className="mt-4 text-gray-300">Welcome to my portfolio website</p>
      <About />
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* 🔗 Navigation Bar */}
      <nav className="bg-gray-800 text-white px-4 py-3 flex gap-6">
        <Link to="/" className="hover:text-purple-400">Home</Link>
        <Link to="/blogs" className="hover:text-purple-400">Blogs</Link>
        <Link to="/experience" className="hover:text-purple-400">Experience</Link>
        <Link to="/projects" className="hover:text-purple-400">Projects</Link>
        <Link to="/contact" className="hover:text-purple-400">Contact</Link>
      </nav>

      {/* 🔄 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
