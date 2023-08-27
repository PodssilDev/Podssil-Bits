import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from './Components/HomeComponent';
import ProjectComponent from './Components/ProjectComponent';
import AboutMeComponent from './Components/AboutMeComponent';
import ExperienceComponent from './Components/ExperienceComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/projects" element={<ProjectComponent />} />
          <Route path="/experience" element={<ExperienceComponent />} />
          <Route path="/about-me" element={<AboutMeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
