import { Card, CardMedia, CardContent, Typography, Button , Box} from '@mui/material';
import NextImage from 'next/image';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import CardActions from '@mui/material/CardActions'
import useUI from '@/hooks/useUiContext';

export const AboutMe = () => {

    const {aboutMeRef} = useUI();
    return (
        <Box ref={aboutMeRef}>
            <Typography 
                display={"flex"} gap={2} alignItems="center" justifyContent={"center"}
                marginBottom={2} color={"primary"} 
                textAlign={"center"} 
                variant='h3' >
                <AccountBoxIcon  sx={{fontSize: '50px'}}/>
                Sobre mí
            </Typography>
            <Card sx={{display: "flex", flexDirection: "column" , alignItems: 'center',  maxWidth: 345, padding: '10px', paddingTop: '20px'}}>
                <CardMedia 

                    sx={{
                        borderRadius: 30, width: '200px' ,     
                        position: 'relative',
                        height: 200,
                    }} 

                    
                >
                    <NextImage
                        style={{objectFit: 'cover', borderRadius: '100px'}}       
                        // fill
                        width={200}
                        height={200}
                        priority
                        src={'/profile/photo.png'} 
                        // sizes="(max-width: 768px) 180px , (max-width: 1200px) 10px, (min-width: 768px) 180px" 
                        alt="profile-photo"
                    />
                </CardMedia>
                <CardContent>
                    <Typography textAlign={'center'}  color={"primary"}>    
                    Titulado de la carrera de Ingeniería en Informática de Duoc UC. Soy una persona enfocada en 
                    estar en constante aprendizaje que me permita la búsqueda de nuevos desafíos con el fin de mejorar profesionalmente.
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button href='/cv/CV_MARCELO_CARIZ.pdf' download sx={{fontWeight: '700', fontSize: '16px'}} startIcon={<FileDownloadIcon sx={{ fontSize: '16px'}} fontSize='large' />}>
                        Descargar CV        
                    </Button>
                </CardActions>
        </Card>
        </Box>

    )
}
