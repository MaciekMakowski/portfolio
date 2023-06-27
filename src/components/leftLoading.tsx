import {Box, Theme, useMediaQuery} from "@mui/material";
import {motion} from "framer-motion";
import car from "../imgs/theme/car.png";
import push from "../imgs/theme/push.png";
import {useEffect, useState} from "react";


export type SidesAnimProps ={
    isOpen:boolean
}

const LeftLoading = (props:SidesAnimProps) =>{
    const isMobile = useMediaQuery((theme:Theme) => theme.breakpoints.between("xs", "md"));
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up("md"));

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
                sx={{
                    backgroundImage:`url(${car})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    width:{xs:'7rem', md:'15rem'},
                    height:{xs:'7rem', md:'15rem'}
                }}
            />
            <Box
                component={motion.div}
                animate={ props.isOpen && {x:['5px', "5px"],rotate:['5deg', '-5deg']}}
                transition={{ duration:0.3, ease: 'linear', repeat:Infinity, repeatType:'reverse'}}
                sx={{
                    backgroundImage:`url(${push})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    width:{xs:'7rem', md:'15rem'},
                    height:{xs:'10rem', md:'20rem'}
                }}
            />
        </Box>
    )
}

export default LeftLoading