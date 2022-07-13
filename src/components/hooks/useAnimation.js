export const useAnimation = () => {
   
    const transition= {
        duration: 1,
        ease:[0.6,-0.05,0.01, 0.9],
    };

    const textReveal={
        initial: {
            y:"200%" ,
            opacity:0,
        },
        animate:{
            y:"0%",
            opacity:1,
        },
    };

    return { transition, textReveal };
};