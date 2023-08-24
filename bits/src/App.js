import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from './Components/HomeComponent';
import ProjectComponent from './Components/ProjectComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/test" element={<ProjectComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
