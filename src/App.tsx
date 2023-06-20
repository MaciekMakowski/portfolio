import {Box, createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import {customTheme} from './assets/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
    const theme = createTheme(customTheme)
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Box
                  height='100vh'
                  overflow={"hidden"}
              >
                <AnimatedRoutes/>
              </Box>
          </Router>
      </ThemeProvider>
  )
}

export default App
