import {Box, useTheme} from "@mui/material";
import EduInfo from "./eduInfo";
import {motion} from "framer-motion";
import databaseImg from "../imgs/edu/database.png";
import networking from "../imgs/edu/networking.png";
import illustration from "../imgs/edu/illustration.png";
import reading from "../imgs/edu/reading.png";
import flower from "../imgs/theme/flower.png";
import code from "../imgs/edu/code.png";
import settings from "../imgs/edu/settings.png";
import {useState} from "react";

type iconInfo = {
    animate:boolean,
    info:boolean
}

export type EduProps = {
    windowWidth:number
}



const EduBig = (props:EduProps) => {
    const theme = useTheme()
    const duration = 1
    const [databaseWindow, setDatabaseWindow] = useState<iconInfo>({animate:false,info:false})
    const [networkingWindow, setNetworkingWindow] = useState<iconInfo>({animate:false, info:false})
    const [illustrationWindow, setIllustrationWindow] = useState<iconInfo>({animate:false, info:false})
    const [codingWindow, setCodingWindow] = useState<iconInfo>({animate:false, info:false})
    const [systemsWindow, setSystemsWindow] = useState<iconInfo>({animate:false, info:false})
    const [onExit, setOnExit] = useState(false)

    const handleOpenInfoWindow = (value:iconInfo, fun:React.Dispatch<iconInfo>, onExit:boolean) => {
        if(!onExit && fun){
            fun({...value, info:true})
        }
    }

    return(
        <Box
            display={"flex"}
            flexDirection={"column"}
        >
            <Box
                height={'5rem'}
                width={'70%'}
                display={"flex"}
                justifyContent={"end"}
            >
                <Box
                    position={"relative"}
                    onMouseEnter={() => handleOpenInfoWindow(databaseWindow ,setDatabaseWindow, onExit)}
                    onMouseLeave={() => setDatabaseWindow({...databaseWindow, info:false})}
                    sx={{cursor:'pointer'}}
                    width={'fit-content'}
                    height={'fit-content'}
                >
                    {databaseWindow.info && (
                        <EduInfo
                            duration={duration}
                            title={'Databases'}
                            windowWidth={props.windowWidth}
                            desc={'During my education, I learned how to build, manage and design databases. I gained knowledge of how to create models how to combine them what are joins and how to use them effectively.'}/>
                    )}
                    <Box
                        key={'db'}
                        component={motion.div}
                        initial={{ opacity: 0, x: -80}}
                        animate={{opacity:1, x:0, scale:1.2}}
                        transition={{
                            x:{duration: duration,
                                delay:duration
                            },
                            opacity:{
                                duration: duration,
                                delay:duration
                            },
                            scale: {
                                duration: duration - 0.5,
                                repeat: 3,
                                repeatType: 'reverse',
                                delay: duration
                            }
                        }}
                        width={'5rem'}
                        height={'5rem'}
                        sx={{
                            backgroundImage:`url(${databaseImg})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover',
                            cursor:'pointer'
                        }}
                    />
                </Box>

            </Box>
            <Box
                width={'100%'}
                height={'100%'}
                display={"flex"}
            >
                <Box
                    display={"flex"}
                    width={'5rem'}
                    height={'100%'}
                    flexDirection={"column"}
                    justifyContent={"space-around"}
                >
                    <Box
                        position={"relative"}
                        onMouseEnter={() => handleOpenInfoWindow(networkingWindow,setNetworkingWindow, onExit)}
                        onMouseLeave={() => setNetworkingWindow({...networkingWindow, info:false})}
                        marginLeft={5}
                        sx={{cursor:'pointer'}}
                        width={'fit-content'}
                        height={'fit-content'}
                    >
                        {networkingWindow.info && (
                            <EduInfo
                                duration={duration}
                                title={'Networking'}
                                windowWidth={props.windowWidth}
                                desc={'During my education, I learned how to build Internet networks, design local area networks and also how to configure network devices. I also became familiar with Windows Server and its capabilities.'}/>
                        )}
                        <Box
                            key={'nt'}
                            position={"relative"}
                            component={motion.div}
                            initial={{ opacity: 0, x: -80}}
                            animate={{opacity:1, x:0, scale:1.2}}
                            transition={{
                                x:{duration: duration,
                                    delay:duration
                                },
                                opacity:{
                                    duration: duration,
                                    delay:duration
                                },
                                scale: {
                                    duration: duration - 0.5,
                                    repeat: 3,
                                    repeatType: 'reverse',
                                    delay: duration + 2
                                }
                            }}
                            width={'5rem'}
                            height={'5rem'}
                            sx={{
                                backgroundImage:`url(${networking})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'cover',
                                cursor:'pointer'
                            }}
                        />
                    </Box>
                    <Box
                        position={"relative"}
                        onMouseEnter={() => handleOpenInfoWindow(illustrationWindow, setIllustrationWindow, onExit)}
                        onMouseLeave={() => setIllustrationWindow({...illustrationWindow, info:false})}
                        sx={{cursor:'pointer'}}
                        marginTop={20}
                        width={'fit-content'}
                        height={'fit-content'}
                    >
                        {illustrationWindow.info && (
                            <EduInfo
                                duration={duration}
                                title={'Graphics'}
                                windowWidth={props.windowWidth}
                                desc={'During my education, I learned the basics of Photoshop, Gimp and Figma. I can design application views or do relatively simple photo processing.'}/>
                        )}
                        <Box
                            key={'gr'}
                            component={motion.div}
                            initial={{ opacity: 0, y: 80}}
                            animate={{opacity:1, y:0, scale:1.2}}
                            transition={{
                                y:{duration: duration,
                                    delay:duration
                                },
                                opacity:{
                                    duration: duration,
                                    delay:duration
                                },
                                scale: {
                                    duration: duration - 0.5,
                                    repeat: 3,
                                    repeatType: 'reverse',
                                    delay: duration + 4
                                }
                            }}
                            width={'5rem'}
                            height={'5rem'}
                            sx={{
                                backgroundImage:`url(${illustration})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'cover',
                                cursor:'pointer'
                            }}
                        />
                    </Box>

                </Box>
                <Box
                    width={'18rem'}
                    height={'20rem'}
                    sx={{
                        backgroundImage:`url(${reading})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        cursor:'pointer'
                    }}
                >
                    <Box
                        marginTop={'55%'}
                        marginLeft={'20%'}
                        width={'3rem'}
                        height={'3rem'}
                        sx={{
                            backgroundImage:`url(${flower})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover',
                            cursor:'pointer'
                        }}
                    />

                </Box>
                <Box
                    width={'10rem'}
                    height={'100%'}
                    display={"flex"}
                    justifyContent={"space-around"}
                    flexDirection={"column"}
                >
                    <Box
                        marginTop={5}
                        position={"relative"}
                        onMouseEnter={() => handleOpenInfoWindow(codingWindow,setCodingWindow, onExit)}
                        onMouseLeave={() => setCodingWindow({...codingWindow, info:false})}
                        sx={{cursor:'pointer'}}
                        width={"fit-content"}
                        height={"fit-content"}
                    >
                        {codingWindow.info && (
                            <EduInfo
                                duration={duration}
                                title={'Coding'}
                                windowWidth={props.windowWidth}
                                desc={'During my education I learned the basics of several programming languages such as C++, Python, JavaScript, Prolog and Java in addition HTML and CSS. I focused my development on Python and JavaScript regularly gaining new knowledge and expanding my skills.'}/>
                        )}
                        <Box
                            key={'cd'}
                            component={motion.div}
                            initial={{ opacity: 0, y: -80}}
                            animate={{opacity:1,y:0, scale:1.2}}
                            transition={{
                                y:{
                                    duration: duration,
                                    delay:duration
                                },

                                opacity:{
                                    duration: duration,
                                    delay:duration
                                },

                                scale:{
                                    duration:duration-0.5,
                                    repeat:3,
                                    repeatType:'reverse',
                                    delay:duration+6}
                            }}
                            width={'5rem'}
                            height={'5rem'}
                            sx={{
                                backgroundImage:`url(${code})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'cover',
                            }}
                        />
                    </Box>

                </Box>

            </Box>
            <Box
                height={'5rem'}
                width={'90%'}
                display={"flex"}
                justifyContent={"end"}
            >
                <Box
                    position={"relative"}
                    onMouseEnter={() => handleOpenInfoWindow(systemsWindow,setSystemsWindow, onExit)}
                    onMouseLeave={() => setSystemsWindow({...systemsWindow, info:false})}
                    sx={{cursor:'pointer'}}
                    marginRight={10}
                    width={'fit-content'}
                    height={'fit-content'}
                >
                    {systemsWindow.info && (
                        <EduInfo
                            duration={duration}
                            title={'Operating systems'}
                            windowWidth={props.windowWidth}
                            desc={'During my education, I gained basic knowledge in operating systems such as Windows (XP,7,10) and Linux. I can navigate through these systems, manage file permissions, perform basic operations and create scripts.'}/>
                    )}
                    <Box
                        key={'os'}
                        component={motion.div}
                        initial={{ opacity: 0, x: 80}}
                        animate={{opacity:1, x:0, scale:1.2}}
                        transition={{
                            x:{duration: duration,
                                delay:duration
                            },
                            opacity:{
                                duration: duration,
                                delay:duration
                            },
                            scale: {
                                duration: duration - 0.5,
                                repeat: 3,
                                repeatType: 'reverse',
                                delay: duration + 8
                            }
                        }}                                                width={'5rem'}
                        height={'5rem'}
                        sx={{
                            backgroundImage:`url(${settings})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover'
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default EduBig