import { NavBar } from "./components/navbar/NavBar.jsx";
import { Blog } from "./pages/Blog.jsx";

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Footer } from "./components/footer/Footer.jsx";

// React Router doesn't scroll to "#id" on its own. `key` is in the deps so
// clicking the same anchor twice still scrolls.
const ScrollToHash = () => {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash, key]);

  return null;
};

export const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/writing" element={<Blog />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
