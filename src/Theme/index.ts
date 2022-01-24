import green from "@mui/material/colors/green";
import purple from "@mui/material/colors/purple";
// import darkScrollbar from "@mui/material/darkScrollbar";
import createTheme, { Theme } from "@mui/material/styles/createTheme";

export const theme: Theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: 'white',
                },
                html: {
                    height: '100%',
                    width: '100vw'
                },
                '#root': {
                    height: '100%',
                    width: '100vw'
                },

            }
        }
    },
    palette: {
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[500]
        }
    }
});

