import BigText from "../Home/BigText"
import Examples from "../Home/Examples"
import Footer from "../Home/Footer"
import MainSection from "../Home/MainSection"
import Marque from "../Home/Marque"
import styled from 'styled-components';

const Home = () => {
  return (
    <Contain>
      <BigText />
      <MainSection />
      <Marque />
      <Examples />
      <Footer />
    </Contain>
  )
}
export default Home;

const Contain = styled.div`
  position:relative;
  width:100%;
  height:100%;
`