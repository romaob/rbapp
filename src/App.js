import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import routes from './values/routes';
import Blog from './pages/Blog';
import GiftsList from './pages/GiftsList';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.HOME} element={<Home/>} />
        <Route path={routes.ABOUT}  element={<About/>} />
        <Route path={routes.EVENT}  element={<Event/>} />
        <Route path={routes.CONFIRMATION}  element={<Confirmation/>} />
        <Route path={routes.GIFTS_LIST}  element={<GiftsList/>} />
        <Route path={routes.BLOG}  element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;
