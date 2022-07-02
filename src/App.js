import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import styled from "styled-components";
import Home from "./components/Home";
import "react-alice-carousel/lib/alice-carousel.css";
import Banner from "./components/banner/Banner";

const App = () => {
  return (
    <Contain>
      <GlobalStyles />
      <Banner />
    </Contain>
  );
};

export default App;

const Contain = styled.div`
  width:100vw;
  height:100vh;
`