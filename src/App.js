import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/contact";
import Render from "./pages/components/Render";
import style from "./styling/style.css";

function App() {
  return (
    <div className="App" style={style}>
      <Routes>
        <Route path="/" element={<Render />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
