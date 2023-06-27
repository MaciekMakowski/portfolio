import {Box, Theme, Typography, useMediaQuery, useTheme} from "@mui/material";
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";
import illustration from "../imgs/edu/illustration.png";


type EduInfoProps = {
    duration:number
    title:string
    desc: string

    image?:string

}

const EduInfo = (props:EduInfoProps) => {
    const theme = useTheme()
    const isMobile = useMediaQuery((theme:Theme) => theme.breakpoints.between("xs", "md"));
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up("md"));
    return(
        <Box
            zIndex={5}
            component={motion.div}
            initial={{ opacity: 0, width:0 }}
            animate={{ opacity: 0.95, minWidth:isMobile ? '90%' : '25rem'}}
            transition={{ duration: props.duration - 0.5 }}
            position={isMobile ? "initial" : "fixed"}
            maxWidth={"25rem"}
            height={isMobile ? "fit-content" :'10rem'}
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
                    {isDesktop && (
                        <TypeAnimation sequence={[
                            props.desc,
                            100
                        ]}/>
                    )}
                    {isMobile && (
                        props.desc
                    )}
                    </>
                </Typography>
            </Box>

        </Box>
    )
}

export default EduInfo