import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import styled from "styled-components";
import Home from "./components/Home";

const App = () => {
  return (
    <Contain>
      <GlobalStyles />
      <Header />
      <Home />
    </Contain>
  );
};

export default App;

const Contain = styled.div`
`