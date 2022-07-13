import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"

//Variants
const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};

const itemMain = {
    hidden: { opcaity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        }
    }
}

const Loader = ({ setLoading }) => {
    return (
        <Contain
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            onAnimationComplete={() => setLoading(false)}
        >
            <TransitionImage variants>

            </TransitionImage>
            <ImageBlock variants={item} id="image-1" />
            <ImageBlock variants={item} id="image-2" />
            <ImageBlock variants={item} id="image-3" />
        </Contain>
    )
}

export const ImageBlock = ({ id, variants }) => {
    return (
        <BlockBox
            animate={{
                scale: .5,
                transition: {
                    duration: 1,
                }
            }}
        >
            <Image src={process.env.PUBLIC_URL + `/images/${id}.jpg`} />
        </BlockBox>
    )
}
export default Loader;

const Contain = styled(motion.div)`
    color:#000;
`

const Image = styled.img``

const BlockBox = styled(motion.div)`
    margin: 0 auto;
    width:300px;
    img{
        width:100%;
    }
`

const TransitionImage = styled(motion.div)`

`