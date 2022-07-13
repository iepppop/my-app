import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import styled from "styled-components";
import Home from "./components/Pages/Home";
import "react-alice-carousel/lib/alice-carousel.css";
import Banner from "./components/banner/Banner";
import Example3d from "./components/Example3d";
import Shape from "./components/Shape";
import Loader  from "./components/frame/Loader";
import { Router, Routes, Route} from  'react-router-dom';
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <Contain>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
      {/* <Banner /> */}
      {/* <Shape/> */}
      {/* <Example3d /> */}
      {/* <Loader /> */}
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/work' element={<Works />}/>
        <Route exact path='*' element={<Home />}/>
      </Routes>
      </AnimatePresence>
    </Contain>
  );
};

export default App;

const Contain = styled.div`
  width:100vw;
  height:100vh;
`