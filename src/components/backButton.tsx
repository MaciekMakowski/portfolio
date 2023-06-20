import {motion, useAnimation, Variants} from "framer-motion";
import {Box, Typography, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type BackButtonProps = {
    setOnExit:React.Dispatch<boolean>
}

const BackButton = (props:BackButtonProps) =>{
    const theme = useTheme()
    const navigate = useNavigate()
    const control = useAnimation()
    const duration = 1.5
    const [onExit, setOnExit] = useState(false)
    const [isHover, setIsHover] = useState(false)

    const variantArrowTwo: Variants = {
        visible: {
            x: 12,
            color: [theme.palette.secondary.main, theme.palette.primary.main],
            transition: {
                x: {
                    delay:0.2,
                    duration: 0.2
                },
                color: {
                    delay:1,
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }
            }
        },
        hidden: {
            x: 24,
            color:theme.palette.secondary.main
        }
    };
    const variantArrowThree = {
        visible:{x:24, transition:{duration:0.3, ease: 'linear', delay:0.4}},
        hidden: {x:48}
    }
    const variantButton = {
        visible:{width:"7rem", boxShadow:`-5px 5px ${theme.palette.primary.main}`, transition:{duration:0.2, ease: 'linear'}},
        hidden: {width: "6rem", boxShadow:`-5px 5px ${theme.palette.secondary.main}`}
    }
    const handleExit = () =>{
        props.setOnExit(true)
        navigate("/")

    }

    const handleMouseEnter = () =>{
        setIsHover(true)
        control.start("visible")
    }
    const handleMouseLeave = () =>{
        setIsHover(false)
        control.start("hidden")
    }

    return(
        <Box
            display={"flex"}
            justifyContent={"center"}
            border={`2px solid ${theme.palette.text.secondary}`}
            p={0.5}
            sx={{

                cursor:'pointer'
            }}
            boxShadow={`-5px 5px ${theme.palette.secondary.main}`}
            component={motion.div}
            variants={variantButton}
            initial={{width:'6rem', skewX:('15deg')}}
            animate={control}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleExit()}
        >
            <Box
                component={motion.div}
                maxWidth={"2rem"}
                initial={{width:'2rem', x:-50}}
                display={"flex"}
            >
                <ArrowBackIosNewIcon
                    component={motion.svg}
                    variants={variantArrowThree}
                    initial={{x:48}}
                    animate={control}
                    sx={{
                        color:theme.palette.text.secondary,
                    }}
                />
                <ArrowBackIosNewIcon
                    component={motion.svg}
                    variants={variantArrowTwo}
                    initial={{x:24}}
                    animate={control}
                    sx={{
                        color:theme.palette.secondary.main,
                    }}
                />

                <ArrowBackIosNewIcon
                    sx={{
                        zIndex:3,
                        color:theme.palette.text.secondary,
                    }}
                />
            </Box>
            <Typography variant={"button"} color={theme.palette.text.secondary}>
                Back
            </Typography>
        </Box>
    )


}

export default BackButton