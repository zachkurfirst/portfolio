// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="flex flex-col items-center mx-auto h-dvh">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
