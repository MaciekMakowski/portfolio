import {Box} from "@mui/material";
import {motion} from "framer-motion";
import car from "../imgs/theme/car.png";
import push from "../imgs/theme/push.png";
import {useEffect, useState} from "react";


export type SidesAnimProps ={
    isOpen:boolean
}

const LeftLoading = (props:SidesAnimProps) =>{
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    }, []);

    return(
        <Box
            width={'100vw'}
            height={'100vh'}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Box
                component={motion.div}
                animate={props.isOpen && {x:['5px', "5px"],rotate:['5deg', '-5deg']}}
                transition={{ duration:0.3, ease: 'linear', repeat:Infinity, repeatType:'reverse'}}
                width={windowSize.width < 1280 ? '7rem' : '15rem'}
                height={windowSize.width < 1280 ? '7rem' : '15rem'}
                sx={{
                    backgroundImage:`url(${car})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}
            />
            <Box
                component={motion.div}
                animate={ props.isOpen && {x:['5px', "5px"],rotate:['5deg', '-5deg']}}
                transition={{ duration:0.3, ease: 'linear', repeat:Infinity, repeatType:'reverse'}}
                width={windowSize.width < 1280 ? '7rem' : '15rem'}
                height={windowSize.width < 1280 ? '10rem' : '20rem'}
                sx={{
                    backgroundImage:`url(${push})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}
            />
        </Box>
    )
}

export default LeftLoading