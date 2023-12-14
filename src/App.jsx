import "./App.css";

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
      <main className="flex flex-col my-8 min-h-screen">
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
