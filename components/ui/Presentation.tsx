import Typewriter from 'typewriter-effect';
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

export const Presentation = () => {
    // const tl = new Timeline sx={{backgroundColor: '#142434', padding: '10px'}}
    return (
        <Box marginTop={10} sx={{height: {xs: '200px', sm: ''}}} marginX={"10px"}>
            <Typography 
                display={"flex"}
                flexDirection="column"
                color={"primary"}  
                component={"h2"} 
                variant="h3" 
                textAlign={"center"}
            >

                <Typewriter
                    onInit={(typewriter)=> {
                        typewriter.typeString('¡Hola!, ').start()
                        typewriter.pauseFor(1000)
                        typewriter.typeString('Soy Marcelo Cariz ').start()
                    }}
                    options={{
                        cursor: '',

                    }}
                    
                    />
                <Typewriter
                    onInit={(typewriter)=> {
                        typewriter.pauseFor(4000)
                        typewriter.typeString(' Desarrollador Full Stack JS').pauseFor(200).start()
                    }}
                    options={{
                        cursor: '',

                    }}
                />
            </Typography>

        </Box>
    )
}
