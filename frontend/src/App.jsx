import "./css/App.css";

import Home from "./pages/Home";
import SavedLocations from "./pages/SavedLocations";
import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SavedLocations" element={<SavedLocations />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
