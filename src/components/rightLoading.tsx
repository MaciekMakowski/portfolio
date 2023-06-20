import {Box} from "@mui/material";
import {motion} from "framer-motion";
import car from "../imgs/theme/car.png";
import {SidesAnimProps} from "./leftLoading";


const RightLoading = (props:SidesAnimProps) =>{

    return(
        <Box
            width={'100vw'}
            height={'100vh'}
            display={"flex"}
            alignItems={"center"}

        >
            <Box
                component={motion.div}
                animate={ props.isOpen && {x:['5px', "5px"],rotate:['5deg', '-5deg']}}
                transition={{ duration:0.3, ease: 'linear', repeat:28, repeatType:'reverse'}}
                width='15rem'
                minHeight='15rem'
                sx={{
                    backgroundImage:`url(${car})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}
            />
        </Box>
    )
}
export default RightLoading