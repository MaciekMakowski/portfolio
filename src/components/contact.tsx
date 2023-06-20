import {motion, useAnimation} from "framer-motion";
import LeftLoading from "./leftLoading";
import {Box, Typography, FormControl, useTheme, TextField ,Button} from "@mui/material";
import leftBottom from "../imgs/theme/leftBottom.png";
import rightBottom from "../imgs/theme/rightBottom.png";
import RightLoading from "./rightLoading";
import {useState, useRef, useEffect} from "react";
import leftTop from "../imgs/theme/leftTop.png";
import BackButton from "./backButton";
import rightTop from "../imgs/theme/rightTop.png";
import emailjs from '@emailjs/browser';
import contact from '../imgs/contact/contact.png'
import {TypeAnimation} from "react-type-animation";
import mobileTop from "../imgs/theme/mobileTop.png";
import mobileBottom from "../imgs/theme/mobileBottom.png";


const Contact = () => {
    const theme = useTheme()
    const control = useAnimation()
    const duration = 1.5
    const [onExit, setOnExit] = useState(false)
    const [onEnter, setOnEnter] = useState(false)
    const form = useRef<HTMLFormElement>(null);
    const [isSended, setIsSended] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    }, []);
    const sendEmail = (e:any) => {
        e.preventDefault();
        if(form.current){
            setIsSended(false)
            setIsError(false)
            if(emailRegex.test(form.current.user_email.value)){
                emailjs.sendForm(
                    'service_8r4safo',
                    'template_vgalfc8',
                    form.current,
                    'EWXB0w50FBSIaRinZ'
                )
                    .then((result) => {
                        setIsSended(true)
                        if(form.current){
                            form.current.reset()
                        }

                    }, (error) => {
                        setIsError(true)
                        setErrorMsg(error.text)
                    })
            } else{
                setIsError(true)
                setErrorMsg("Wrong Email!")
            }
            }
    };

    return(
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
                            justifyContent={windowSize.width < 1280 ? "center" : "space-between"}
                        >
                            {windowSize.width < 1280 && (
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
                            {windowSize.width >= 1280 && (
                                <>
                                    <Box
                                        display={"flex"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        minHeight='10rem'
                                        width='25rem'
                                        sx={{
                                            backgroundImage:`url(${leftTop})`,
                                            backgroundRepeat:'no-repeat'
                                        }}
                                    >
                                        <BackButton setOnExit={setOnExit}/>
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
                        <Box
                            display={"flex"}
                            width={'100%'}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Box
                                width={windowSize.width < 1280 ? '20rem' : "40rem"}
                                border={`2px solid ${theme.palette.primary.main}`}
                                borderRadius={5}
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                            >
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    flexDirection={"column"}
                                    px={2}
                                >
                                    <Box
                                        width={'100%'}
                                        display={"flex"}

                                    >
                                        {windowSize.width < 1280 && (
                                            <Box
                                                display={"flex"}
                                                justifyContent={"center"}
                                                boxSizing={"border-box"}
                                            >
                                                <Box
                                                    minHeight={'3rem'}
                                                    minWidth={'3rem'}
                                                    sx={{
                                                        backgroundImage:`url(${contact })`,
                                                        backgroundRepeat:'no-repeat',
                                                        backgroundSize:'contain',
                                                    }}
                                                />
                                            </Box>
                                        )}
                                        <Box>
                                        <Typography display={"inline"} variant={'h4'} color={theme.palette.text.secondary}>
                                            Get &nbsp;
                                        </Typography>
                                        <Typography display={"inline"}  variant={'h4'} color={theme.palette.text.primary}>
                                            in touch
                                        </Typography>
                                        </Box>
                                    </Box>
                                    <Box display={"flex"}>
                                    <Typography display={"inline"} variant={'subtitle2'} color={theme.palette.secondary.main}>
                                        Send me a message so that we can get in
                                    </Typography>
                                    <Typography display={"inline"} variant={'subtitle2'} fontWeight={"bolder"} color={theme.palette.secondary.main}>
                                        touch
                                    </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    width={'100%'}
                                    display={"flex"}
                                    flexDirection={windowSize.width < 1280 ? 'column' : 'row'}
                                >
                                    <Box
                                        width={windowSize.width < 1280 ? '100%' : '50%'}
                                        boxSizing={"border-box"}
                                        p={2}
                                    >
                                        <form ref={form} onSubmit={sendEmail}>
                                            <FormControl fullWidth>
                                                <Box
                                                    display={"flex"}
                                                    gap={3}
                                                    flexDirection={"column"}
                                                >
                                                    <TextField
                                                        required
                                                        label={'Your Name'}
                                                        name="user_name"
                                                        sx={{
                                                            '& .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.secondary.main, // Kolor obramowania
                                                            },
                                                        }}
                                                    ></TextField>
                                                    <TextField
                                                        required
                                                        label={'Your Email'}
                                                        name="user_email"
                                                        sx={{
                                                            '& .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.secondary.main, // Kolor obramowania
                                                            },
                                                        }}
                                                    ></TextField>
                                                    <TextField
                                                        required
                                                        label="Your Message"
                                                        name="message"
                                                        multiline
                                                        rows={4}
                                                        placeholder="Your message"
                                                        sx={{
                                                            '& .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.secondary.main, // Kolor obramowania
                                                            },
                                                        }}
                                                    />
                                                    <Button type={"submit"} variant={"contained"}>Send</Button>
                                                    {isSended && (
                                                        <Typography variant={"caption"} color={theme.palette.primary.main}>
                                                            <TypeAnimation sequence={[
                                                                "Thanks for your message, i will respond fastest as i can.",
                                                                100
                                                            ]}/>
                                                        </Typography>
                                                    )}
                                                    {isError && (
                                                        <Typography variant={"caption"} color={theme.palette.error.main}>
                                                            <TypeAnimation sequence={[
                                                                `${errorMsg}`,
                                                                100
                                                            ]}/>
                                                        </Typography>
                                                    )}
                                                </Box>

                                            </FormControl>
                                        </form>

                                    </Box>
                                    {windowSize.width >= 1280 && (
                                        <Box
                                            display={"flex"}
                                            justifyContent={"center"}
                                            width={'50%'}
                                            boxSizing={"border-box"}
                                            p={3}
                                        >
                                            <Box
                                                minHeight={'20rem'}
                                                minWidth={'20rem'}
                                                sx={{
                                                    backgroundImage:`url(${contact })`,
                                                    backgroundRepeat:'no-repeat',
                                                    backgroundSize:'contain',
                                                }}
                                            />
                                        </Box>
                                    )}
                                </Box>

                            </Box>

                        </Box>
                        <Box
                            height='100%'
                            width='100%'
                            display='flex'
                            alignItems={"end"}
                            justifyContent={"center"}
                        >
                            {windowSize.width < 1280 && (
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
                            {windowSize.width >= 1280 && (
                                <>
                                    <Box
                                        display={"flex"}
                                        width='50%'
                                        height='100%'
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
                                        width='50%'
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

export default Contact