import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import routes from './values/routes';
import Blog from './pages/Blog';
import GiftsList from './pages/GiftsList';
import Confirmation from './pages/Confirmation';

import { AnimatePresence } from 'framer-motion' 
import Main from './content/Main';

function App() {
  const location = useLocation();
  return (
    <div className="App">
        <Main />
    </div>
  );
}

export default App;
