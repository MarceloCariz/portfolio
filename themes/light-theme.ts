import {createTheme} from '@mui/material'

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background:{ default: '#0A1929'},
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
            backgroundColor: "#0A1929",
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
            backgroundColor: '#142434',
            boxShadow: "0px 25px 25px rgba(0,0,0,0.07)",
            borderRadius: "10px",
            },
        },
        },
    },
});