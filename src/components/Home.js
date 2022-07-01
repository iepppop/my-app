import styled from 'styled-components';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
    const words = ["해적왕이야", "멋진 개발자가 될 거야"];
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
        cursorStyle: '|',
    });
    return (
        <Contain>
            <Text>
                나는
                <span>
                    {text}
                </span>
                <Cursor />
                <h5>velog.io</h5>
            </Text>
        </Contain>
    )
}
export default Home;

const Contain = styled.div`
    width:100%;
    height:600px;
    background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
    display:flex;
    align-items: center;
`

const Text = styled.div`
    margin: 0 auto;
    width:1000px;
    font-weight:800;
    font-size:50px;
    color:#fff;

    span{
        margin:0 0 0 10px;
    }
`