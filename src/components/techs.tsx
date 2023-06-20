import {motion, useAnimation, Variants} from "framer-motion";
import {Box, Typography, useTheme} from '@mui/material'
import leftTop from "../imgs/theme/leftTop.png";
import rightTop from "../imgs/theme/rightTop.png";
import {useNavigate} from "react-router-dom";
import leftBottom from "../imgs/theme/leftBottom.png";
import rightBottom from "../imgs/theme/rightBottom.png";
import reactLogo from '../imgs/techs/reactLogo.png'
import tsLogo from '../imgs/techs/tsLogo.png'
import htmlLogo from '../imgs/techs/htmlLogo.png'
import cssLogo from '../imgs/techs/cssLogo.png'
import muiLogo from '../imgs/techs/muiLogo.png'
import figmaLogo from '../imgs/techs/figmaLogo.png'
import pyLogo from '../imgs/techs/pyLogo.png'
import TechInfo from "./techInfo";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import push from "../imgs/theme/push.png"
import car from "../imgs/theme/car.png"
import {useEffect, useState} from "react";
import BackButton from "./backButton";
import LeftLoading from "./leftLoading";
import RightLoading from "./rightLoading";
import mobileTop from "../imgs/theme/mobileTop.png";
import mobileBottom from "../imgs/theme/mobileBottom.png";
import TechsHeader from "./techsHeader";

const techs = [
    {
        id:'react',
        img:reactLogo,
        title:'What is React?',
        desc:"React is a JavaScript library used for building user interfaces. It follows a component-based architecture, allowing developers to create reusable and independent UI components.React uses a virtual DOM to efficiently update the browser's actual DOM, reducing performance bottlenecks.It employs a declarative approach, where developers describe the desired UI state and React takes care of updating the actual UI.JSX, a syntax extension for JavaScript, enables developers to write HTML-like code within JavaScript, simplifying UI development.React has a large and active community, providing extensive support and numerous open-source libraries.It is widely used for building single-page applications and mobile applications with React Native.",
        animType:'rotate',
        animTime:50
    },
    {
        id:'ts',
        img:tsLogo,
        title:'What is TypeScript?',
        desc:'TypeScript is a strongly-typed superset of JavaScript that adds static typing capabilities to the language. It allows developers to catch errors and bugs during development by providing compile-time type checking. TypeScript code is then transpiled into plain JavaScript that can be executed by browsers or JavaScript runtimes. It introduces concepts such as static types, interfaces, classes, and modules, making it easier to build complex applications and maintain codebases. TypeScript also offers enhanced tooling and editor support, including autocompletion, code navigation, and refactoring. It is backward-compatible with JavaScript, meaning existing JavaScript code can be gradually migrated to TypeScript.',
        animType:'bounce',
        animTime:1
    },
    {
        id:'html',
        img:htmlLogo,
        title:'What is HTML?',
        desc:"HTML (Hypertext Markup Language) is a markup language used for creating the structure and content of web pages. It uses tags enclosed in angle brackets to define elements. These elements include headings, paragraphs, images, links, lists, tables, and forms. HTML documents have a hierarchical structure with the <html> tag as the root. Elements can have attributes that provide additional information or modify their behavior. Semantic HTML tags, such as <header>, <nav>, and <footer>, help describe the meaning and structure of content. HTML is the foundation of the web and is interpreted by web browsers to display the visual representation of a web page.",
        animType:'pulse',
        animTime:1
    },
    {
        id:'css',
        img:cssLogo,
        title:'What is CSS?',
        desc:"CSS is a language used to style the appearance of HTML documents.It allows you to change the colors, fonts, sizes, and layouts of HTML elements.You use selectors to target specific elements and declarations to specify the styles you want to apply.Selectors can be based on element names, classes, or IDs.CSS rules can be applied inline within HTML tags, embedded within the <style> tag, or linked from an external CSS file.CSS provides a wide range of styling options, including backgrounds, borders, positioning, and animations.It enables you to create visually appealing and consistent designs for your web pages.",
        animType:'shake',
        animTime:1
    },
    {
        id:'mui',
        img:muiLogo,
        title:'What is MUI?',
        desc:"MUI (Material-UI) is a React component library widely used for building user interfaces with pre-designed and customizable components.It follows the Material Design guidelines, offering a sleek and modern aesthetic for applications.Developers can easily incorporate MUI components into their React projects, speeding up the development process and ensuring consistent design patterns.MUI provides a theming system that allows developers to customize the visual styles of components to match their application's branding and design requirements.With its extensive collection of components, MUI simplifies UI development by offering ready-to-use building blocks for buttons, forms, navigation bars, and more.",
        animType:'pulse',
        animTime:1
    },
    {
        id:'figma',
        img:figmaLogo,
        title:'What is Figma?',
        desc:"Figma is a cloud-based design tool used by designers to create user interfaces and collaborate on design projects.It offers a user-friendly interface for creating and editing designs, including layouts, graphics, and icons.Figma supports real-time collaboration, allowing multiple designers to work together on the same project simultaneously.Designers can create interactive prototypes in Figma to demonstrate user interactions and test the usability of their designs.Figma simplifies the handoff process by providing design specifications, CSS code snippets, and assets for developers to implement the designs accurately.",
        animType:'bounce',
        animTime:1
    },
    {
        id:'python',
        img:pyLogo,
        title:'What is Python?',
        desc:"It emphasizes code readability through its clean and organized syntax, making it easy to learn and understand.Python supports multiple programming paradigms, including object-oriented, functional, and procedural programming.It has a vast standard library that offers a wide range of modules and tools for various tasks, reducing the need for external dependencies.Python's extensive ecosystem includes third-party libraries and frameworks such as Django, NumPy, and pandas, enabling developers to build web applications, data analysis tools, machine learning models, and more.Its interpreted nature allows for rapid development and prototyping, making it a popular choice among developers for scripting, automation, and scientific computing.",
        animType:'rotate',
        animTime:50
    }
]

const Techs = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const control = useAnimation()
    const duration = 1.5
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
    const [isHover, setIsHover] = useState(false)


    const variantArrowTwo: Variants = {
        visible: {
            x: 12,
            color: [theme.palette.secondary.main, theme.palette.primary.main],
            transition: {
                x: {
                    delay:0.3,
                    duration: 0.3
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
        visible:{x:24, transition:{duration:0.3, ease: 'linear', delay:0.6}},
        hidden: {x:48}
    }
    const variantButton = {
        visible:{width:"7rem", boxShadow:`-5px 5px ${theme.palette.primary.main}`, transition:{duration:0.3, ease: 'linear'}},
        hidden: {width: "6rem", boxShadow:`-5px 5px ${theme.palette.secondary.main}`}
    }


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
                        <TechsHeader windowWidth={windowSize.width}/>

                        <Box
                            width={'100%'}
                            sx={{
                                overflowY:windowSize.width < 1280 && windowSize.width > windowSize.height ? undefined : "auto",
                                overflowX:windowSize.width < 1280 && windowSize.width > windowSize.height ? 'visible' : "hidden"
                            }}
                        >
                            {techs.map(tech => {
                                return(
                                    <TechInfo
                                        key={tech.id}
                                        id={tech.id}
                                        img={tech.img}
                                        title={tech.title}
                                        desc={tech.desc}
                                        animType={tech.animType}
                                        animTime={tech.animTime}
                                        windowWidth={windowSize.width}
                                        windowHeight={windowSize.height}
                                    />
                                )
                            })}
                        </Box>
                        <Box
                            minHeight={windowSize.width < 1280 ? '11rem' : '10.5rem'}
                            width='100%'
                            display='flex'
                            justifyContent='center'
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

export default Techs