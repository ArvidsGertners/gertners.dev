import { NavBar } from "./components/NavBar.jsx";
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
          <Routes>
            <Route path="/" />
            <Route path="/about" />
            <Route path="/projects" />
            <Route path="/writing" />
            <Route path="/contact" />
          </Routes>
      </div>
    </Router>
  )
};
