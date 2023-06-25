import {motion, useAnimation} from "framer-motion";
import {Box, Button, Typography, useTheme} from "@mui/material";
import leftTop from "../imgs/theme/leftTop.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import rightTop from "../imgs/theme/rightTop.png";
import leftBottom from "../imgs/theme/leftBottom.png";
import rightBottom from "../imgs/theme/rightBottom.png";
import {useNavigate} from "react-router-dom";
import bigC from "../imgs/projects/big_c.png"
import midC from "../imgs/projects/mid_c.png"
import smallC from "../imgs/projects/small_c.png"
import bigK from "../imgs/projects/big_k.png"
import midK from "../imgs/projects/mid_k.png"
import smallK from "../imgs/projects/small_k.png"
import arrow from "../imgs/projects/arrow.png"
import Project, {ProjectProps} from "./project";
import {useEffect, useState} from "react";
import car from "../imgs/theme/car.png";
import push from "../imgs/theme/push.png";
import BackButton from "./backButton";
import LeftLoading from "./leftLoading";
import RightLoading from "./rightLoading";
import mobileTop from "../imgs/theme/mobileTop.png";
import mobileBottom from "../imgs/theme/mobileBottom.png";


const ProjectsList = [
    {
        id:0,
        title:"Kanban Board",
        subtitle:"Kanban",
        desc:'The Kanban Board application is a classic solution that uses drag-end-drop to allow users to move cards between columns and rows. Users can customize boards, add other users to them, color the cards, add subtasks and create parent-child relationships. The board is fully customizable including column/row/card names, locking cards so they can\'t be moved, managing WIP limits for cards as well as users who can be assigned to a card.',
        big:bigK,
        mid:midK,
        small:smallK,
        git:"https://github.com/MaciekMakowski/Billenium-Project-UWM",
        doc:"https://github.com/MaciekMakowski/Billenium-Project-UWM/blob/transition_3/documentation/Transition%203/User%20Guide%20for%20Kanban%20Board.pdf",
        visit:"https://magikanban.up.railway.app/",
    },
    {
        id:1,
        title:"StudentMed",
        subtitle:"Clinic App",
        desc:'The StudentMed application is intended to improve the operation of primary care clinics. A patient of such a clinic has the ability to apply for an appointment with a selected doctor on a selected date, manage his profile and also view his past and future visits.  Each doctor in the clinic has the ability to manage his or her appointments, including filling out diagnoses and recommendations. The receptionist has his own dedicated interface that allows him to manage his appointments, print the appointment schedule for the selected day. The application also has statistics showing the distribution of visits per doctor and more.',
        big:bigC,
        mid:midC,
        small:smallC,
        git:"https://github.com/MaciekMakowski/Billenium-Clinic-Managment",
        doc:"https://github.com/MaciekMakowski/Billenium-Clinic-Managment/blob/dev/Dokumentacja%20StudentMed%20Backend%20API.docx",
        visit:"https://billenium-clinic-managment.vercel.app/",
    }
]

const variantBoxLeft= {
    visible:{y:-15,opacity:1 , transition:{duration:0.2}},
    hidden:{y:0, opacity:0.3}
}

const Projects = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const duration = 1.5
    const [showProject, setShowProject] = useState<ProjectProps>(ProjectsList[0])
    const control = useAnimation();
    const [onExit, setOnExit] = useState(false)
    const [onEnter, setOnEnter] = useState(true)
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

    const handleExit = () =>{
        setOnExit(true)
        navigate("/")

    }

    const handleChangeProject = (id:string) =>{
        const element = document.getElementById(id)
        if (element){
            element.scrollIntoView({behavior:"smooth"})
            setShowProject(ProjectsList[Number(id)])
        }
    }


    return (
        <>
            <Box
                component={motion.div}
                height='100%'
                overflow={"auto"}
                initial={{x:"-200vw"}}
                animate={{x:"-100vw"}}
                exit={{x:"0vw"}}
                transition={{ duration: duration }}
                width={"300vw"}
            >
                <Box
                    height='100%'
                    width={'100%'}
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
                                    {showProject.id !== 0 && (
                                        <Box
                                            display={"flex"}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                            flexDirection={"column"}
                                            onClick={() => handleChangeProject((showProject.id-1).toString())}
                                        >
                                            <Box
                                                display={"flex"}
                                                alignItems={"center"}
                                                flexDirection={"column"}
                                                gap={2}
                                                component={motion.div}
                                                sx={{cursor:"pointer", opacity:0.3}}
                                                animate={control}
                                                variants={variantBoxLeft}
                                                onMouseEnter={() => control.start("visible")}
                                                onMouseLeave={() => control.start("hidden")}
                                            >
                                                <Box
                                                    minHeight='3rem'
                                                    minWidth='3rem'
                                                    sx={{
                                                        backgroundImage:`url(${arrow })`,
                                                        backgroundRepeat:'no-repeat',
                                                    }}
                                                />
                                                <Typography
                                                    sx={{rotate:"90deg"}}
                                                    variant={'h6'} color={theme.palette.text.secondary}
                                                >
                                                    MORE
                                                </Typography>
                                            </Box>
                                        </Box>
                                    )}
                                    <Box
                                        minHeight='15rem'
                                        width='25rem'
                                        sx={{
                                            backgroundImage:`url(${rightTop})`,
                                            backgroundRepeat:'no-repeat'
                                        }}
                                    />
                                </>

                            )}
                        {windowSize.width < 1280 && (
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                            >
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
                            </Box>

                        )}
                        </Box>
                        <Box
                            width={'100%'}
                            boxSizing={'border-box'}
                            display={"flex"}
                            alignItems={"center"}
                            flexDirection={"column"}
                            sx={{
                                overflowY:windowSize.width < 1280 && windowSize.width > windowSize.height ? 'visible' : windowSize.width < 1280 ? "auto" : 'hidden',
                                overflowX:windowSize.width < 1280 && windowSize.width > windowSize.height ? 'visible' : "hidden"
                            }}
                            gap={4}

                        >
                            {ProjectsList.map(project => {
                                return(
                                    <Project
                                        key={project.id}
                                        id={project.id}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        desc={project.desc}
                                        big={project.big}
                                        mid={project.mid}
                                        small={project.small}
                                        git={project.git}
                                        doc={project.doc}
                                        visit={project.visit}
                                        windowWidth={windowSize.width}
                                        windowHeight={windowSize.height}
                                    />
                                    )
                            })}
                        </Box>
                        <Box
                            height='80%'
                            width='100%'
                            display='flex'
                            justifyContent='center'
                        >
                            {windowSize.width >= 1280 && (
                                <>
                                    <Box
                                        display={"flex"}
                                        width='50%'
                                        minHeight="11rem"
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
                                    {showProject.id+1 < ProjectsList.length && (
                                        <Box
                                            display={"flex"}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                            flexDirection={"column"}
                                            onClick={() => handleChangeProject((showProject.id+1).toString())}
                                        >
                                            <Box
                                                display={"flex"}
                                                alignItems={"center"}
                                                flexDirection={"column"}
                                                gap={2}
                                                component={motion.div}
                                                sx={{cursor:"pointer", opacity:0.3}}
                                                animate={control}
                                                variants={variantBoxLeft}
                                                onMouseEnter={() => control.start("visible")}
                                                onMouseLeave={() => control.start("hidden")}
                                            >
                                                <Typography
                                                    sx={{rotate:"90deg"}}
                                                    variant={'h6'} color={theme.palette.text.secondary}
                                                >
                                                    MORE
                                                </Typography>
                                                <Box
                                                    minHeight='3rem'
                                                    minWidth='3rem'
                                                    sx={{
                                                        backgroundImage:`url(${arrow })`,
                                                        backgroundRepeat:'no-repeat',
                                                        rotate:'180deg',
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    )}
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
                            {windowSize.width < 1280 && (
                                <Box
                                    display={"flex"}
                                    justifyContent={"end"}
                                    flexDirection={"column"}
                                >
                                    <Box
                                        alignItems={"end"}
                                        height={'10rem'}
                                        width='20rem'
                                        sx={{
                                            backgroundImage:`url(${mobileBottom})`,
                                            backgroundRepeat:'no-repeat',
                                            backgroundSize:'contain'
                                        }}
                                    />
                                <Box/>
                                </Box>
                            )}

                        </Box>

                    </Box>
                    <RightLoading isOpen={onEnter}/>
                </Box>
            </Box>
        </>
    )
}
export default Projects