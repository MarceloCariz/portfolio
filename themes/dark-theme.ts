import {createTheme} from '@mui/material'

export const darkTheme = createTheme({
    palette:{
        mode: "dark",
        background:{
            default: '#39363D'
        },
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#23395B'
        },
        info:{
            main: '#fff'
        }
    },
    components:{
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiAppBar:{
            defaultProps: {
                elevation: 0,
                position: 'fixed'
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#14213d',
                    height: 60
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 600
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                }
            }
        },
    }
})