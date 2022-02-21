import "./App.css";

// Components
import Home from "./components/Home";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
