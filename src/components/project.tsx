import {Box, Button, Typography, useTheme} from "@mui/material";
import trian from "../imgs/projects/trian.png";
import {useNavigate} from "react-router-dom";
import {motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useEffect, useRef, useState} from "react";


export type ProjectProps = {
    id:number
    title:string,
    subtitle:string,
    desc: string,
    big:string,
    mid:string,
    small:string
    git:string,
    doc:string,
    visit:string
    windowWidth?:number
    windowHeight?:number
}


const Project = (props:ProjectProps) => {
    const theme = useTheme()
    const [ref, inView] = useInView();
    const control = useAnimation();
    // const componentRef = useRef(null);
    // const [componentData, setComponentData] = useState({x:0,y:0,w:0,h:0})
    // const [isMouseOn, setIsMouseOn] = useState(false)
    // const [localCoords, setLocalCoords] = useState({x: 0, y: 0});

    const variantBoxLeft= {
        visible:{x:0, transition:{duration:2}},
        hidden:{x:0-window.innerWidth}
    }
    const variantBoxRight= {
        visible:{x:0, transition:{duration:2}},
        hidden:{x:window.innerWidth}
    }

    // const variantImage= {
    //     visible:{rotateY:(localCoords.x - componentData.x - (componentData.w/2))/10},
    //     hidden:{rotateX:0, rotateY: 0}
    // }

    // const handleMouseOnImg = (event:any) =>
    // {
    //     if(isMouseOn){
    //         if(event && componentRef !== null){
    //             // @ts-ignore
    //             setComponentData({
    //                 x: componentRef.current.getBoundingClientRect().x,
    //                 y: componentRef.current.getBoundingClientRect().y,
    //                 w:componentRef.current.getBoundingClientRect().width,
    //                 h:componentRef.current.getBoundingClientRect().height
    //             })
    //             setLocalCoords({
    //                 x: event.clientX ,
    //                 y: event.clientY,
    //             });
    //             console.log(componentData)
    //         }
    //     }
    // }
    // const handleMouseLeaveImg = (event:any) =>
    // {
    //         setIsMouseOn(false)
    // }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);


    return(
        <Box
            ref={ref}
            id={props.id.toString()}
            width={'100%'}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            height={props.windowWidth && props.windowWidth < 1280 ? '45rem' : 'fit-content'}
        >
        <Box
            boxSizing={"border-box"}
            width={props.windowWidth && props.windowWidth < 1280 ? '100%' :'80%'}
            display={"flex"}
            flexDirection={props.windowWidth && props.windowWidth < 1280 ? "column" : "row"}
            p={props.windowWidth && props.windowWidth < 1280 ? 1 : 5}
            gap={3}
        >
            <Box
                width={props.windowWidth && props.windowWidth < 1280 ? "100%" : '50%'}
                display={"flex"}
                flexDirection={"column"}
                component={motion.div}
                animate={control}
                variants={variantBoxLeft}
            >
                <Box
                    display={"flex"}
                >
                    <Box
                        marginTop={1}
                        minHeight='2rem'
                        minWidth='2rem'
                        sx={{
                            backgroundImage:`url(${trian})`,
                            backgroundRepeat:'no-repeat'
                        }}
                    />
                    <Box>
                        <Typography variant={'h4'} color={theme.palette.text.secondary}>
                            {props.title}
                        </Typography>
                        <Typography variant={"subtitle2"} color={theme.palette.text.secondary}>
                            {props.subtitle}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    // onMouseEnter={() => setIsMouseOn(true)}
                    // onMouseLeave={handleMouseLeaveImg}
                    // onMouseMove={handleMouseOnImg}
                    // component={motion.div}
                    // animate={control}
                    // variants={variantImage}
                    display={"flex"}
                    justifyContent={props.windowWidth && props.windowWidth < 1280 ? "center" : undefined}
                    alignItems={"end"}
                >
                    <Box
                        zIndex={3}
                        height='10rem'
                        width='15rem'
                        sx={{
                            backgroundImage:`url(${props.mid})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'contain'
                        }}
                    />
                    <Box
                        marginLeft={'-3rem'}
                        marginRight={'-3rem'}
                        height='15rem'
                        width='20rem'
                        sx={{
                            backgroundImage:`url(${props.big})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'contain'
                        }}
                    />
                    <Box
                        height='10rem'
                        width='6rem'
                        sx={{
                            backgroundImage:`url(${props.small})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'contain'
                        }}
                    />
                </Box>
            </Box>
            <Box
                component={motion.div}
                animate={control}
                variants={variantBoxRight}
                display={"flex"}
                width={props.windowWidth && props.windowWidth < 1280 ? '100%' : '50%'}
                justifyContent={"space-evenly"}
                flexDirection={"column"}
                gap={1}
                py={props.windowWidth && props.windowWidth < 1280 ? 0 : 2}
            >
                <Typography
                    variant={"subtitle2"}
                    color={theme.palette.text.primary}
                    width={props.windowWidth && props.windowWidth < 1280 ? "100%" : '100%'}
                >
                    {props.desc}
                </Typography>
                <Box
                    display={"flex"}
                    alignItems={ props.windowWidth && props.windowWidth < 1280 ? 'center' : undefined}
                    justifyContent={ props.windowWidth && props.windowHeight && props.windowWidth < 1280 && props.windowWidth > props.windowHeight ? 'space-between'
                        : props.windowWidth && props.windowWidth < 1280 ? "center"
                            : 'space-between'}
                    flexDirection={
                    props.windowWidth && props.windowHeight && props.windowWidth < 1280 && props.windowWidth > props.windowHeight ? 'row'
                        : props.windowWidth && props.windowWidth < 1280 ? "column"
                            : 'row'}
                    width={props.windowWidth && props.windowWidth < 1280 ? "100%" : '80%'}
                    gap={1}
                >
                    <Box
                        display={"flex"}
                        width={props.windowWidth && props.windowHeight && props.windowWidth < 1280 && props.windowWidth > props.windowHeight ? '60%'
                            : props.windowWidth && props.windowWidth < 1280 ? "75%"
                                : '100%'}
                        sx={{
                            gap:{sx:0, lg:3},
                            justifyContent:{sx:'space-between', lg:'start'}
                        }}
                    >
                            <Button href={props.git} variant={"outlined"}>
                                GitHub
                            </Button>
                            <Button href={props.doc} variant={"outlined"}>
                                Documentation
                            </Button>
                    </Box>
                    <Box
                        display={"flex"}
                        width={props.windowWidth && props.windowHeight && props.windowWidth < 1280 && props.windowWidth > props.windowHeight ? '40%'
                            : props.windowWidth && props.windowWidth < 1280 ? "75%"
                                : undefined}
                        sx={{
                            flexGrow:{lg:1},
                            justifyContent:{lg:'end'}
                        }}
                    >
                        <Button fullWidth href={props.visit} variant={"contained"}>
                            Visit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}
export default Project