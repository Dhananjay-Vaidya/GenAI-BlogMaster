import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>AI Blog Generator</h1>
      <div className="nav-links">
        <Link to="/" className="text-white hover:text-purple-400">Home</Link>
        <Link to="/generate" className="text-white hover:text-purple-400">Generate</Link>
        <Link to="/about" className="text-white hover:text-purple-400">About</Link>
      </div>
    </nav>
  );
}