import React, { useState } from "react";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import { Container } from "./components/styled/Container.styled";

//Styles
import { themeDark, themeLight } from "./theme";
import GlobalStyles from "./GlobalStyles";

// Utilities
import { ThemeProvider } from "styled-components";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  let theme;
  if (darkMode) {
    theme = themeDark;
  } else {
    theme = themeLight;
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header callback={toggleDarkMode} />
        <Container>
          <Home />
          <About />
          <Projects />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
