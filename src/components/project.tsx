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
            sx={{
                height:{xs:'45rem', md:'fit-content'}
            }}
        >
        <Box
            boxSizing={"border-box"}
            display={"flex"}
            gap={3}
            sx={{
                width:{xs:'100%', md:'80%'},
                flexDirection:{xs:'column', md:'row'},
                p:{xs:1, md:5}
            }}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                component={motion.div}
                animate={control}
                variants={variantBoxLeft}
                sx={{
                    width:{xs:"100%", md:'50%'}
                }}
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
                    alignItems={"end"}
                    sx={{
                        justifyContent:{xs:'center', md:undefined}
                    }}
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
                justifyContent={"space-evenly"}
                flexDirection={"column"}
                gap={1}
                sx={{
                    width:{xs:'100%', md:'50%'},
                    py:{xs:0, md:2}
                }}
            >
                <Typography
                    variant={"subtitle2"}
                    color={theme.palette.text.primary}
                    width={'100%'}
                >
                    {props.desc}
                </Typography>
                <Box
                    display={"flex"}
                    width={'100%'}
                    gap={1}
                    sx={{
                        alignItems:{xs:'center', md:undefined},
                        justifyContent:{xs:'space-between', md:'center', lg:'space-between'},
                        flexDirection:'row',
                    }}
                >
                    <Box
                        display={"flex"}
                        sx={{
                            gap:{xs:3, md:3},
                            justifyContent:'start',
                            width:{xs:'65%', md: '100%', lg:'100%'}
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