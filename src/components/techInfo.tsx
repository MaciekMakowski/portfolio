import {Box, Typography, useTheme} from "@mui/material";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

type techInfoProps = {
    id:string,
    img: string,
    title:string,
    desc:string,
    animType:string,
    animTime:number
    windowWidth:number
    windowHeight:number
}

const variantImage = {
    visible:{opacity:1, scale:0.9, transition:{duration:3}},
    hidden:{opacity:0, scale:0}
}
const variantText = {
    visible:{opacity:1, x:0, transition:{duration:3}},
    hidden:{opacity:0,  x:400}
}
const variantLine = {
    visible:{ width:"75%", transition:{duration:3}},
    hidden:{ width:0}
}
const TechInfo = (props:techInfoProps) => {
    const theme = useTheme()
    const [ref, inView] = useInView()
    const control = useAnimation()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return(
        <>
        <Box
            id={props.id}
            ref={ref}
            component={motion.div}
            marginTop={'1rem'}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            width={'100%'}
            height={props.windowWidth < 1280 && props.windowWidth ? 'fit-content': '30rem'}
            gap={2}
        >
            {props.windowWidth >= 1280 && (
                <Box
                    display={"flex"}
                    height={'100%'}
                >
                    <Box
                        component={motion.div}
                        width={'50%'}
                        display={"flex"}
                        justifyContent={"center"}
                        initial={'hidden'}
                        animate={control}
                        variants={variantImage}
                    >
                        <Box
                            component={motion.div}
                            animate={
                                props.animType === "rotate" ? ( {rotate: 360 }) :
                                    props.animType === "bounce" ? ( { y:['5%', "-5%"]}) :
                                        props.animType === "shake" ? ( { x:['5%', "-5%"]}) :
                                            props.animType === "pulse" ? ( { scale:[0.9, 1]}) :
                                                ""
                            }
                            transition={props.animType == "rotate" ? { duration:props.animTime, ease: 'linear', repeat:Infinity, repeatDelay:0.1} :
                                { duration:props.animTime, ease: 'linear', repeat:Infinity, repeatDelay:0.1, repeatType:'reverse'}
                            }
                            width={'24rem'}
                            height={'23rem'}
                            minWidth={'2rem'}
                            minHeight={'2rem'}
                            sx={{
                                backgroundImage:`url(${props.img})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'contain'
                            }}
                        />
                    </Box>
                    <Box
                        component={motion.div}
                        initial={'hidden'}
                        animate={control}
                        variants={variantText}
                        width={'50%'}
                        display={"flex"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                        gap={1}
                        overflow={"auto"}
                    >
                        <Typography variant={'h6'} color={theme.palette.text.primary}>
                            {props.title}
                        </Typography>
                        {props.desc.split(".").map((sentence,index) => {
                            if(index !== props.desc.split(".").length - 1){
                                return(
                                    <Typography key={index} variant={'body1'} color={theme.palette.text.primary} width={'75%'}>
                                        {sentence}. <br/>
                                    </Typography>
                                )
                            }
                        })}

                    </Box>
                </Box>
            )}
            {props.windowWidth < 1280 && (
                <Box
                    component={motion.div}
                    initial={'hidden'}
                    animate={control}
                    variants={variantText}
                    width={'100%'}
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    gap={1}
                    overflow={"auto"}
                >
                    <Box
                        display={"flex"}
                        gap={3}
                        alignItems={"center"}
                        boxSizing={"border-box"}
                        p={1}
                    >
                        <Box
                            component={motion.div}
                            animate={
                                props.animType === "rotate" ? ( {rotate: 360 }) :
                                    props.animType === "bounce" ? ( { y:['5%', "-5%"]}) :
                                        props.animType === "shake" ? ( { x:['5%', "-5%"]}) :
                                            props.animType === "pulse" ? ( { scale:[0.9, 1]}) :
                                                ""
                            }
                            transition={props.animType == "rotate" ? { duration:props.animTime, ease: 'linear', repeat:Infinity, repeatDelay:0.1} :
                                { duration:props.animTime/4, ease: 'linear', repeat:Infinity, repeatDelay:0.1, repeatType:'reverse'}
                            }
                            width={'3rem'}
                            height={'3rem'}
                            minWidth={'2rem'}
                            minHeight={'2rem'}
                            sx={{
                                backgroundImage:`url(${props.img})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'contain'
                            }}
                        />
                        <Typography variant={'h6'} color={theme.palette.text.primary}>
                            {props.title}
                        </Typography>
                    </Box>
                    {props.desc.split(".").map((sentence,index) => {
                        if(index !== props.desc.split(".").length - 1){
                            return(
                                <Typography key={index} variant={'body1'} color={theme.palette.text.primary} width={'100%'}>
                                    {sentence}. <br/>
                                </Typography>
                            )
                        }
                    })}

                </Box>
            )}
            <Box
                component={motion.div}
                initial={'hidden'}
                animate={control}
                variants={variantLine}
                width={'75%'}
                height={'3px'}
                bgcolor={theme.palette.text.secondary}
            />

        </Box>
        </>
    )
}

export default TechInfo