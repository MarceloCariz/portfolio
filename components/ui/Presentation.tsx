
import Typewriter from 'typewriter-effect';
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

export const Presentation = () => {
    // const tl = new Timeline sx={{backgroundColor: '#142434', padding: '10px'}}
    return (
        <Box marginTop={10}>
            <Typography  color={"primary"}  component={"h2"} variant="h3" textAlign={"center"}>
                
                <Typewriter
                    onInit={(typewriter)=> {
                        typewriter.typeString('¡Hola!, ').start().pauseFor(500)
                        typewriter.typeString('Soy Marcelo Cariz Desarrollador Full Stack JS').start().stop()
                    }}

                    />
            </Typography>

        </Box>
    )
}
