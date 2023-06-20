import {Box} from "@mui/material";
import {motion} from "framer-motion";
import car from "../imgs/theme/car.png";
import push from "../imgs/theme/push.png";


export type SidesAnimProps ={
    isOpen:boolean
}

const LeftLoading = (props:SidesAnimProps) =>{

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
                width='15rem'
                minHeight='15rem'
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
                width='15rem'
                minHeight='20rem'
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