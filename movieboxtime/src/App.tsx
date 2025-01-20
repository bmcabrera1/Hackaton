// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Header from "./components/header";
import MoreData from "./pages/MoreData";

function App() {
  console.log("App renderizado");
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {<Route path="/more" element={<MoreData />} />}
        {/* Ruta para la página de inicio */}
        {/* Puedes agregar más rutas aquí */}
        {/* <Route path="/about" element={<About />} /> Otra ruta de ejemplo */}
      </Routes>
    </Router>
  );
}

export default App;
