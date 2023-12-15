// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="flex flex-col min-h-screen bg-gradient-to-tr from-sky-300 to-sky-400 dark:bg-gradient-to-tr dark:from-sky-900 dark:to-sky-950">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
