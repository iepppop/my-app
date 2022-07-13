import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAnimation } from '../hooks/useAnimation';


const BigTextStyles = styled.div`
    height:100vh;
    position:absolute;
    display:flex;
    flex-wrap: wrap;
    margin: 5vh;
`

const Container = styled(motion.div)`
    text-transform:uppercase;
    width:100%;
    padding:1vw;
    overflow:hidden;

    :nth-child(1){
        margin-left: 5vw;
    }
    :nth-child(2){
        margin-left: 10vw;
    }
    :nth-child(3){
        margin-left: 15vw;
    }
    :nth-child(4){
        margin-left: 5vw;
    }
    
    h1{
        font-size:13vw;
        height:8vw;
        line-height:8vw;
    }
`



const BigText = () => {
    const { transition, textReveal  } = useAnimation();
    return (
        <BigTextStyles>
            <Container>
                <motion.h1
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={transition}
                >FullStack</motion.h1>
            </Container>
            <Container>
            <motion.h1
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={{...transition, delay:1.4}}
                >FullStack</motion.h1>
            </Container>
            <Container>
            <motion.h1
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={{...transition, delay:1.6}}
                >peaches</motion.h1>
            </Container>
            <Container>
            <motion.h1
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={{...transition, delay:1.6}}
                >justin biber</motion.h1>
            </Container>
        </BigTextStyles>
    )
}
export default BigText;