import {Box, Button, Link, Stack, Typography, useTheme, useMediaQuery, Theme} from "@mui/material";
import leftTop from '../imgs/theme/leftTop.png'
import leftBottom from '../imgs/theme/leftBottom.png'
import rightTop from '../imgs/theme/rightTop.png'
import rightBottom from '../imgs/theme/rightBottom.png'
import {motion} from "framer-motion";
import lightSaber from "../imgs/saber/light-saber.png";
import {TypeAnimation} from "react-type-animation";
import reactLogo from "../imgs/techs/reactLogo.png";
import htmlLogo from "../imgs/techs/htmlLogo.png";
import cssLogo from "../imgs/techs/cssLogo.png";
import tsLogo from "../imgs/techs/tsLogo.png";
import muiLogo from "../imgs/techs/muiLogo.png";
import figmaLogo from "../imgs/techs/figmaLogo.png";
import pyLogo from "../imgs/techs/pyLogo.png";
import avatar from "../imgs/theme/laptop-wave2.png";
import gitLogo from "../imgs/git/gitLogo.png";
import {useNavigate} from "react-router-dom";
import mobileTop from '../imgs/theme/mobileTop.png'
import mobileBottom from '../imgs/theme/mobileBottom.png'
import {useState} from "react";
import LeftLoading from "./leftLoading";
import RightLoading from "./rightLoading";

const Main = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const duration = 1.5
    const [onExit, setOnExit] = useState(false)
    const [onEnter, setOnEnter] = useState(true)
    const isMobile = useMediaQuery((theme:Theme) => theme.breakpoints.between("xs", "md"));
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up("md"));


    const handleExit = (link:string) =>{
        setOnExit(true)
        navigate(link)

    }

    return (
        <Box
            component={motion.div}
            height='100vh'
            overflow={"auto"}
            initial={{x:"-200vw"}}
            animate={{x:"-100vw"}}
            exit={{x:"0vw"}}
            transition={{ duration: duration }}
            width={"300vw"}
        >
            <Box
                height='100%'
                display={"flex"}
            >
                <LeftLoading isOpen={onExit}/>
            <Box
                width={'100vw'}
                display='flex'
                justifyContent='space-between'
                flexDirection={"column"}
                height={'100%'}
                boxSizing={'border-box'}
                p={3}
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
                            minHeight='10rem'
                            width='20rem'
                            sx={{
                                backgroundImage:`url(${mobileTop})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'contain'
                            }}
                        />

                    )}
                    {isDesktop && (
                        <>
                            <Box
                                minHeight='10rem'
                                width='25rem'
                                sx={{
                                    backgroundImage:`url(${leftTop})`,
                                    backgroundRepeat:'no-repeat'
                                }}
                            />
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
                <Box
                >
                    <Box
                        display={"flex"}
                        sx={{
                            px:{xs:5, lg:10}
                        }}
                    >
                        <Box
                            display='flex'
                            width='100%'
                            sx={{
                                flexDirection:{xs:'column', md:'row'}
                            }}
                            justifyContent={"center"}
                            gap={3}
                        >
                            <Stack
                                display='flex'
                                flexDirection='column'
                                spacing={5}
                                sx={{
                                    width:{xs:'100%', lg:'50%'},
                                    alginItems:{xs:'center', md:''}
                                }}
                            >
                                <Box>
                                    <Box
                                        display={'flex'}
                                        gap={1}
                                    >
                                        <Typography variant="h6" color={theme.palette.text.primary}>
                                            Hello there
                                        </Typography>
                                        <Box
                                            height='30px'
                                            width='30px'
                                            sx={{
                                                backgroundImage:`url(${lightSaber})`,
                                                backgroundSize:'cover',
                                                backgroundRepeat:'no-repeat'
                                            }}
                                        ></Box>
                                        <Typography variant="h6" color={theme.palette.text.primary}>
                                            im
                                        </Typography>
                                    </Box>
                                    <Typography variant="h2" color={theme.palette.text.primary}>
                                        Maciej Makowski
                                    </Typography>
                                    <Typography variant="h5" color={theme.palette.text.primary}>
                                        Frontend developer
                                    </Typography>
                                </Box>
                                <Box
                                    display={"flex"}
                                >
                                    <Typography
                                        width={'100%'}
                                        color={theme.palette.text.primary}
                                        minHeight={'60px'}
                                        sx={{
                                            variant:{xs:'subtitle1', md:'h6'}
                                        }}>
                                        <TypeAnimation sequence={[
                                            'I am a computer science student who specialize in frontend, my main working environment is React and HTML with CSS and TS.',
                                            100
                                        ]}/>
                                    </Typography>
                                </Box>
                                <Box
                                    display={"flex"}
                                    gap={3}
                                    sx={{
                                        flexDirection:{xs:'column', md:'row'}
                                    }}>
                                    <Button variant={"outlined"} onClick={() => handleExit("/education")}>Education</Button>
                                    <Button variant={"outlined"} onClick={() => handleExit("/myTechs")}>My techs</Button>
                                    <Button variant={"outlined"} onClick={() => handleExit("/projects")}>Projects</Button>
                                    <Button variant={"contained"} onClick={() => handleExit("/contact")}>Contact me</Button>

                                </Box>
                                <Box
                                    display={'flex'}
                                    gap={3}
                                    alignItems={"center"}
                                    flexDirection={"row"}
                                    sx={{
                                        justifyContent:{xs:'center', md:'start'}
                                    }}
                                    flexWrap={"wrap"}
                                >
                                        <Box
                                            height='4rem'
                                            width='4rem'
                                            sx={{
                                                backgroundImage:`url(${reactLogo})`,
                                                backgroundRepeat:'no-repeat',
                                                backgroundSize:'contain'
                                            }}
                                        />
                                        <Box
                                            height='4rem'
                                            width='4rem'
                                            sx={{
                                                backgroundImage:`url(${htmlLogo})`,
                                                backgroundRepeat:'no-repeat',
                                                backgroundSize:'contain'
                                            }}
                                        />
                                        <Box
                                            height='4rem'
                                            width='4rem'
                                            sx={{
                                                backgroundImage:`url(${cssLogo})`,
                                                backgroundRepeat:'no-repeat',
                                                backgroundSize:'contain'
                                            }}
                                        />
                                        <Box
                                            height='4rem'
                                            width='4rem'
                                            sx={{
                                                backgroundImage:`url(${tsLogo})`,
                                                backgroundRepeat:'no-repeat',
                                                backgroundSize:'contain'
                                            }}
                                        />
                                        <Box
                                            height='3.5rem'
                                            width='4rem'
                                            sx={{
                                                backgroundImage:`url(${muiLogo})`,
                                                backgroundRepeat:'no-repeat',
                                                backgroundSize:'contain'
                                            }}
                                            />
                                        <Box
                                            display={"flex"}
                                            height='4rem'
                                            width='4rem'
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                        >
                                        <Box
                                            height='4rem'
                                            width='3rem'
                                            sx={{
                                                backgroundImage:`url(${figmaLogo})`,
                                                backgroundRepeat:'no-repeat',
                                                backgroundSize:'contain',
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        height='4rem'
                                        width='4rem'
                                        sx={{
                                            backgroundImage:`url(${pyLogo})`,
                                            backgroundRepeat:'no-repeat',
                                            backgroundSize:'contain'
                                        }}
                                    />
                                </Box>
                            </Stack>
                            <Box
                                display={"flex"}
                                alignItems={'center'}
                                flexDirection={"column"}
                                component={motion.div}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                                gap={3}
                                sx={{
                                    width:{xs:'100%', md:'50%'}
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundImage:`url(${avatar})`,
                                        backgroundRepeat:'no-repeat',
                                        backgroundSize:'contain',
                                        width:{xs:'16rem', lg:'26rem'},
                                        height:{xs:'14rem', lg:'22rem'}
                                    }}
                                />
                                <Box
                                    display={"flex"}
                                    gap={2}
                                    alignItems={"center"}
                                >
                                    <Box
                                        width={'35px'}
                                        height={'35px'}
                                        sx={{
                                            backgroundImage:`url(${gitLogo})`,
                                            backgroundRepeat:'no-repeat',
                                            backgroundSize:'cover'
                                        }}/>
                                    <Link  href={'https://github.com/MaciekMakowski'}  variant="h6" underline={'none'} target={"_blank"}>
                                        Check my github
                                    </Link>

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
                                backgroundImage: `url(${mobileBottom})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain'
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
                                        backgroundImage: `url(${leftBottom})`,
                                        backgroundRepeat: 'no-repeat',
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
                                        backgroundImage: `url(${rightBottom})`,
                                        backgroundRepeat: 'no-repeat',
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

    )
}

export default Main
