import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import styled from "styled-components";

const App = () => {
  return (
    <Contain>
      <GlobalStyles />
      <Header />
    </Contain>
  );
};

export default App;

const Contain = styled.div`
`