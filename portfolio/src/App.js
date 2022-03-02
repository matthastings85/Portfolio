import React, { useState, useEffect, useRef } from "react";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import { Container } from "./components/styled/Container.styled";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

//Styles
import { themeDark, themeLight } from "./utilities/theme";
import GlobalStyles from "./utilities/GlobalStyles";

// Utilities
import { ThemeProvider } from "styled-components";

function App() {
  const prevScrollY = useRef(10);
  const [goingUp, setGoingUp] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? themeDark : themeLight;

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > prevScrollY.current) {
        setGoingUp(false);
      }
      if (currentScrollY < prevScrollY.current) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header
          setDarkMode={toggleDarkMode}
          darkMode={darkMode}
          goingUp={goingUp}
        />
        <Container>
          <Home />
          <About />
          <Projects />
          <Contact />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
