import {Route, Routes, useLocation} from "react-router-dom";
import Main from "./mainPage";
import Education from "./education";
import {AnimatePresence} from 'framer-motion'
import Techs from "./techs";
import Projects from "./projects";
import Contact from "./contact";
const AnimatedRoutes = () => {

    const location = useLocation()
    return(
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/education"} element={<Education/>}/>
                <Route path={"/myTechs"} element={<Techs/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/*"} element={<Main/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes