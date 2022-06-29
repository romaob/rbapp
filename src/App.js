import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </div>
  );
}

export default App;
