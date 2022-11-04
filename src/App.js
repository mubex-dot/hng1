import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/contact";
import Render from "./pages/components/Render";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Render />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
