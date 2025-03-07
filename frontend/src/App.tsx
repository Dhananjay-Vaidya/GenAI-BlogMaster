import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
