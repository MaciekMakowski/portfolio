import EduInfo from "./eduInfo";
import {Box, Typography, useTheme} from '@mui/material'
import {EduProps} from "./eduBig";
import reading from "../imgs/edu/reading.png";
import flower from "../imgs/theme/flower.png";
import databaseImg from "../imgs/edu/database.png";
import networking from "../imgs/edu/networking.png";
import illustration from "../imgs/edu/illustration.png";
import code from "../imgs/edu/code.png";
import settings from "../imgs/edu/settings.png";

const EduMobile = (props:EduProps) => {
    const theme = useTheme()
    const duration = 1

    return(
        <Box
            display={"flex"}
            flexDirection={'column'}
            width={'100%'}
            gap={3}
            alignItems={"center"}
        >
            <Typography variant={'h4'} color={theme.palette.text.secondary}>
                My Education
            </Typography>
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
            <EduInfo
                duration={duration}
                title={'Databases'}
                desc={'During my education, I learned how to build, manage and design databases. I gained knowledge of how to create models how to combine them what are joins and how to use them effectively.'}
                windowWidth={props.windowWidth}
                image={databaseImg}
            />
            <EduInfo
                duration={duration}
                title={'Networking'}
                windowWidth={props.windowWidth}
                desc={'During my education, I learned how to build Internet networks, design local area networks and also how to configure network devices. I also became familiar with Windows Server and its capabilities.'}
                image={networking}
            />
            <EduInfo
                duration={duration}
                title={'Coding'}
                windowWidth={props.windowWidth}
                desc={'During my education I learned the basics of several programming languages such as C++, Python, JavaScript, Prolog and Java in addition HTML and CSS. I focused my development on Python and JavaScript regularly gaining new knowledge and expanding my skills.'}
                image={code}
            />
            <EduInfo
                duration={duration}
                title={'Graphics'}
                windowWidth={props.windowWidth}
                desc={'During my education, I learned the basics of Photoshop, Gimp and Figma. I can design application views or do relatively simple photo processing.'}
                image={illustration}
            />

            <EduInfo
                duration={duration}
                title={'Operating systems'}
                windowWidth={props.windowWidth}
                desc={'During my education, I gained basic knowledge in operating systems such as Windows (XP,7,10) and Linux. I can navigate through these systems, manage file permissions, perform basic operations and create scripts.'}
                image={settings}
            />


        </Box>
            )
}

export default EduMobile