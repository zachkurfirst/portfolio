import "./App.css";
import { Route, Routes } from "react-router";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
