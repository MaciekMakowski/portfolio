import {Box, Typography, useTheme} from "@mui/material";
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";
import illustration from "../imgs/edu/illustration.png";


type EduInfoProps = {
    duration:number
    title:string
    desc: string

    image?:string
    windowWidth:number

}

const EduInfo = (props:EduInfoProps) => {
    const theme = useTheme()
    return(
        <Box
            zIndex={5}
            component={motion.div}
            initial={{ opacity: 0, width:0 }}
            animate={{ opacity: 0.95, minWidth:props.windowWidth < 1280 ? '90%' : '25rem'}}
            transition={{ duration: props.duration - 0.5 }}
            position={props.windowWidth < 1280 ? "initial" : "fixed"}
            maxWidth={"25rem"}
            height={props.windowWidth < 1280 ? "fit-content" :'10rem'}
            p={3}
            border={`2px solid ${theme.palette.text.secondary}`}
            bgcolor={theme.palette.secondary.main}
            borderRadius={'10px'}
        >
            <Box
                component={motion.div}
                initial={{ opacity: 0,}}
                animate={{ opacity: 1}}
                exit={{opacity:0}}
                transition={{ duration: props.duration}}
            >

                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                <Typography variant={"h6"} color={theme.palette.text.primary}>
                    {props.title}
                </Typography>
                    <Box
                        width={'3rem'}
                        height={'3rem'}
                        sx={{
                            backgroundImage:`url(${props.image})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover',
                        }}
                        ></Box>
                </Box>
                <Typography variant={"body1"} color={theme.palette.text.primary} sx={{textShadow:'black 1px 1px 2px'}}>
                    <>
                    {props.windowWidth >= 1280 && (
                        <TypeAnimation sequence={[
                            props.desc,
                            100
                        ]}/>
                    )}
                    {props.windowWidth < 1280 && (
                        props.desc
                    )}
                    </>
                </Typography>
            </Box>

        </Box>
    )
}

export default EduInfo