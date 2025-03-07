import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="text-xl font-bold text-white">AI Blog Generator</h1>
      <div className="space-x-6">
        <Link to="/" className="text-white hover:text-purple-400">Home</Link>
        <Link to="/generate" className="text-white hover:text-purple-400">Generate</Link>
        <Link to="/about" className="text-white hover:text-purple-400">About</Link>
      </div>
    </nav>
  );
}
