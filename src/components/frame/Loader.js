import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"

//Variants
const Container = {
    show: {
        transition:{
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
        y:0,
        transition: {
            ease: [.6,.01,-.05, .95],
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

const Loader = ({ setLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    })
    return (
        <Contain>
            <ImageBlock id="image-1" />
            <ImageBlock id="image-2" />
            <ImageBlock id="image-3" />
        </Contain>
    )
}

export const ImageBlock = ({ id }) => {
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

const Contain = styled.div`
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