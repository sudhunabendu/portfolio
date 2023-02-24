// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Layouts/Header";
import Profile from "./components/Profile";
import NotFound from './components/Layouts/NotFound';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
