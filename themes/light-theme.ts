import {createTheme} from '@mui/material'

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        // background:{ default: '#047991'},
        // background: {default: 'rgb(2,0,36)'},
        primary: {
            main: "#fff",
        },
        secondary: {
            main: "#3A64D8",
        },
        info: {
            main: "#fff",
        },
    },
    components: {
        MuiLink: {
        defaultProps: {
            underline: "none",
        },
        },
        MuiAppBar: {
        defaultProps: {
            elevation: 0,
            position: "fixed",
        },
        styleOverrides: {
            root: {
                backgroundColor: 'rgba(3.9%, 9.8%, 16.1%, 1)',
                // backgroundImage: 
                // `linear-gradient(9deg, rgba(10,25,41,1) 20%, rgba(4,121,145,1) 72%, rgba(10,25,41,1) 100%, rgba(0,212,255,1) 100%)`,
            height: 60,
            },
        },
        },

        MuiTypography: {
        styleOverrides: {
            h1: {
            fontSize: 30,
            fontWeight: 600,
            },
            h2: {
            fontSize: 20,
            fontWeight: 500,
            },
            h3:{
                color: "#fff",
                fontSize: 40,
                fontWeight: 500,
            },
            subtitle1: {
            fontSize: 18,
            fontWeight: 600,
            },
            h5: {
                fontWeight: 600,
                color: "#fff"
            }
        },
        },

        MuiButton: {
        defaultProps: {
            variant: "contained",
            size: "small",
            disableElevation: true,
            color: "info",
        },
        styleOverrides: {
        //     containedPrimary: {
        //         backgroundColor: "info",
        //         color: "#FFF",
        //     },
        //     containedSecondary: {
        //     ":hover": { backgroundColor: "#274494" },
        //     },
            root: {
                textTransform: "none",
                boxShadow: "none",
                borderRadius: 10,
            },
        },
        },

        MuiCard: {
        defaultProps: {
            elevation: 0,
        },
        styleOverrides: {
            root: {
            backgroundColor: '#092F45',
            boxShadow: "0px 25px 25px rgba(0,0,0,0.07)",
            borderRadius: "10px",
            },
        },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#0a1929',
                    backgroundImage: 
                    `linear-gradient(180deg, rgba(10,25,41,1) 12%, rgba(9,47,69,1) 49%, rgba(10,25,41,1) 65%)`,
                },
            },
        },      
    },
});