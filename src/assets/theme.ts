import {ThemeOptions} from '@mui/material/styles';
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style

export const customTheme: ThemeOptions = {
    typography: {
        fontFamily: "Open Sans",
    },
    palette: {
        primary: {
            main: '#D4ADFC',
        },
        secondary: {
            main: '#5C469C',
        },
        info: {
            main: '#1D267D',
        },
        text: {
            primary: '#DEDEDE',
            secondary:'#D4ADFC'
        },
        divider: 'rgba(208,208,208,0.95)',
    },

};