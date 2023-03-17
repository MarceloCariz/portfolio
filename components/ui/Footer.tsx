import GitHub from '@mui/icons-material/GitHub'
import {Box, IconButton, Typography} from '@mui/material'

export const Footer = () => {
    return (
        <Box 
            height={"100px"}  
            width="100%"
            // position="absolute"
            bottom={0} 
            // marginTop={25} 
            sx={{borderTop: '1px solid white'}}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
        >
            <IconButton href='https://github.com/MarceloCariz/portfolio' target={"_blank"}>
                <GitHub color="primary"/>
            </IconButton>
            <Typography fontSize={{xs: 12, sm:20}} color="primary">&copy; {new Date().getFullYear()} Marcelo Cariz todos los derechos reservados.</Typography>

        </Box>
    )
}
