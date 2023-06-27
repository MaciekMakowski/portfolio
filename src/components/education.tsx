
import {Box, Button, Theme, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import leftTop from "../imgs/theme/leftTop.png";
import rightTop from "../imgs/theme/rightTop.png";
import reading from "../imgs/edu/reading.png"
import leftBottom from "../imgs/theme/leftBottom.png";
import rightBottom from "../imgs/theme/rightBottom.png";
import databaseImg from "../imgs/edu/database.png";
import code from "../imgs/edu/code.png";
import illustration from "../imgs/edu/illustration.png";
import networking from "../imgs/edu/networking.png";
import settings from "../imgs/edu/settings.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import uwmLogo from '../imgs/edu/uwmLogo.png'
import zsmLogo from '../imgs/edu/tm.png'
import {useEffect, useState} from "react";
import EduInfo from "./eduInfo";
import car from "../imgs/theme/car.png";
import push from "../imgs/theme/push.png";
import BackButton from "./backButton";
import LeftLoading from "./leftLoading";
import RightLoading from "./rightLoading";
import flower from "../imgs/theme/flower.png"
import mobileTop from "../imgs/theme/mobileTop.png";
import mobileBottom from "../imgs/theme/mobileBottom.png";
import EduBig from "./eduBig";
import EduMobile from "./EduMobile";

type iconInfo = {
    animate:boolean,
    info:boolean
}

const Education = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const duration = 1.5
    const [databaseWindow, setDatabaseWindow] = useState<iconInfo>({animate:false,info:false})
    const [networkingWindow, setNetworkingWindow] = useState<iconInfo>({animate:false, info:false})
    const [illustrationWindow, setIllustrationWindow] = useState<iconInfo>({animate:false, info:false})
    const [codingWindow, setCodingWindow] = useState<iconInfo>({animate:false, info:false})
    const [systemsWindow, setSystemsWindow] = useState<iconInfo>({animate:false, info:false})
    const [onExit, setOnExit] = useState(false)
    const [onEnter, setOnEnter] = useState(true)
    const isMobile = useMediaQuery((theme:Theme) => theme.breakpoints.between("xs", "md"));
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up("md"));
    const handleExit = () =>{
        setOnExit(true)
        navigate("/")

    }
    const handleOpenInfoWindow = (value:iconInfo, fun:React.Dispatch<iconInfo>, onExit:boolean) => {
        if(!onExit && fun){
            fun({...value, info:true})
        }
    }

    return (
        <>
        <Box
            component={motion.div}
            height='100%'
            initial={{x:"-200vw"}}
            animate={{x:"-100vw"}}
            exit={{x:"0vw"}}
            transition={{ duration: duration }}
            width={"300vw"}
            overflow={"auto"}
        >
            <Box
                height='100%'
                display={"flex"}
            >
                <LeftLoading isOpen={onExit}/>
            <Box
                display='flex'
                justifyContent='space-between'
                flexDirection={"column"}
                height={'100%'}
                boxSizing={'border-box'}
                p={3}
                width={'100vw'}
            >
                <Box
                    width='100%'
                    display='flex'
                    sx={{
                        justifyContent:{xs:'center', md:'space-between'}
                    }}
                >
                    {isMobile && (
                        <Box
                            justifyContent={"center"}
                            alignItems={"center"}
                            display={"flex"}
                            minHeight='10rem'
                            width='20rem'
                            sx={{
                                backgroundImage:`url(${mobileTop})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'contain'
                            }}
                        >
                            <BackButton setOnExit={setOnExit}/>
                        </Box>

                    )}
                    {isDesktop && (
                        <>
                            <Box
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                minHeight='10rem'
                                minWidth='25rem'
                                sx={{
                                    backgroundImage:`url(${leftTop})`,
                                    backgroundRepeat:'no-repeat'
                                }}
                            >
                                <BackButton setOnExit={setOnExit}/>
                            </Box>
                            <Box
                                display={"flex"}
                            >
                                <Typography variant={"h3"} color={theme.palette.text.secondary}>
                                    My &nbsp;
                                </Typography>
                                <Typography variant={"h3"} fontWeight={"bolder"} color={theme.palette.text.secondary} >
                                    Education
                                </Typography>
                            </Box>
                            <Box
                                minHeight='15rem'
                                minWidth='25rem'
                                sx={{
                                    backgroundImage:`url(${rightTop})`,
                                    backgroundRepeat:'no-repeat'
                                }}
                            />
                        </>
                    )}

                </Box>
                <Box>
                    <Box
                        display={"flex"}
                        sx={{
                            px:{xs:5, md:10}
                        }}
                    >
                        <Box
                            display='flex'
                            width='100%'
                            sx={{
                                flexDirection:{xs:'column', lg:'row'},
                                gap:{xs:10, md:10},
                                alignItems:'center'
                            }}

                        >
                            <Box
                                display={"flex"}
                                sx={{
                                    width:{xs:'100%', md:'50%'}
                                }}
                                justifyContent={"center"}
                            >
                                {isDesktop && (
                                    <EduBig/>
                                )}
                                {isMobile && (
                                        <EduMobile />
                                    )}
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={'center'}
                                component={motion.div}
                                flexDirection={"column"}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: duration }}
                                gap={3}
                                sx={{
                                    marginTop:{xs:0,lg:-13},
                                    width:{xs:'100%',lg:'50%'}
                                }}
                            >
                                <Box
                                    minWidth={ isMobile ? "90%" : '26rem'}
                                    p={3}
                                    border={`2px solid ${theme.palette.text.secondary}`}
                                    borderRadius={'10px'}
                                    display={"flex"}
                                    flexDirection={"column"}
                                >
                                    <Box
                                        display={"flex"}
                                        justifyContent={"space-between"}
                                    >
                                        <Box>
                                        <Typography variant={'h6'} color={theme.palette.text.primary}>
                                            University of Warmia and Mazury
                                        </Typography>
                                        <Typography variant={'subtitle1'} color={theme.palette.text.primary}>
                                            Specialization in computer science
                                        </Typography>
                                        </Box>
                                        <Box
                                            width={'5rem'}
                                            height={'5rem'}
                                            minWidth={'2rem'}
                                            minHeight={'2rem'}
                                            sx={{
                                                backgroundImage:`url(${uwmLogo})`,
                                                backgroundRepeat:'no-repeat',
                                                backgroundSize:'contain'
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant={'caption'} color={theme.palette.text.primary} gap={5}>
                                            Develop programming skills in C++ <br/>

                                            Learning the basics of machine graphics <br/>

                                            Learning frontend frameworks <br/>

                                            Designing Information Systems <br/>

                                            Developing knowledge of Operating Systems <br/>

                                            Learning Algorithms and data structures <br/>

                                            Learning Object Oriented Programming <br/>

                                            Learning Structured Programming <br/>

                                            Learning how to use mySQL databases <br/>
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    minWidth={ isMobile ? "90%" : '26rem'}
                                    p={3}
                                    border={`2px solid ${theme.palette.text.secondary}`}
                                    borderRadius={'10px'}
                                    display={"flex"}
                                    flexDirection={"column"}
                                >
                                    <Box
                                        display={"flex"}
                                        justifyContent={"space-between"}
                                    >
                                        <Box>
                                            <Typography variant={'h6'} color={theme.palette.text.primary}>
                                                Technical school
                                            </Typography>
                                            <Typography variant={'subtitle1'} color={theme.palette.text.primary}>
                                                Specialization in computer science
                                            </Typography>
                                        </Box>
                                        <Box
                                            width={'5rem'}
                                            height={'5rem'}
                                            minWidth={'2rem'}
                                            minHeight={'2rem'}
                                            sx={{
                                                backgroundImage:`url(${zsmLogo})`,
                                                backgroundRepeat:'no-repeat',
                                                backgroundSize:'contain'
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant={'caption'} color={theme.palette.text.primary} gap={5}>
                                            Learning the basics of programming in C++ and Python <br/>

                                            Learning the basics about internet networks <br/>

                                            Gaining knowledge about computer components <br/>

                                            Learning the basics of web development <br/>

                                            Learning computer systems such as linux, windows, windows server <br/>

                                            Learning the basics of computer graphics <br/>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    height='100%'
                    width='100%'
                    display='flex'
                    justifyContent='center'
                >
                    {isMobile && (
                        <Box
                            minHeight='10rem'
                            width='20rem'
                            sx={{
                                backgroundImage:`url(${mobileBottom})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'contain'
                            }}
                        />

                    )}
                    {isDesktop && (
                        <>
                            <Box
                                display={"flex"}
                                width='60%'
                                minHeight='11rem'
                                alignItems={"end"}
                            >
                                <Box
                                    width='30rem'
                                    minHeight={'11rem'}
                                    sx={{
                                        backgroundImage:`url(${leftBottom})`,
                                        backgroundRepeat:'no-repeat',
                                    }}
                                />
                            </Box>

                            <Box
                                display={"flex"}
                                width='40%'
                                justifyContent={'end'}
                                alignItems={"end"}
                            >
                                <Box
                                    width='17rem'
                                    minHeight='11rem'
                                    sx={{
                                        backgroundImage:`url(${rightBottom})`,
                                        backgroundRepeat:'no-repeat',
                                    }}
                                />

                            </Box>
                        </>
                    )}


                </Box>

            </Box>
                <RightLoading isOpen={onEnter}/>
            </Box>
        </Box>
            </>
    )
}

export default Education
