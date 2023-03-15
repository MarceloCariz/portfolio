import { Card, CardMedia, CardContent, Typography, Button , Box} from '@mui/material';
import NextImage from 'next/image';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CardActions from '@mui/material/CardActions'
import useProject from '@/hooks/useProjectContext';

export const AboutMe = () => {

    const {aboutMeRef} = useProject();
    return (
        <Box ref={aboutMeRef}>
            <Typography marginBottom={2} color={"primary"} textAlign={"center"} variant='h3' component={"div"}>Sobre mi</Typography>
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
                        fill
                        priority
                        src={'/profile/photo.png'} 
                        sizes="(max-width: 768px) 180px , (max-width: 1200px) 10px, (min-width: 768px) 180px" 
                        alt="profile-photo"
                    />
                </CardMedia>
                <CardContent>
                    <Typography  color={"primary"}>    
                        Titulado de la carrera de ingenieria en informatica Duoc. En busca de nuevos desafios
                        con el fin de mejorar profesionalmente 
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