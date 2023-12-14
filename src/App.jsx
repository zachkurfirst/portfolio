import "./App.css";
import { Route, Routes } from "react-router";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="flex justify-center my-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
