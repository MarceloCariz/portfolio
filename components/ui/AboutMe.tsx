import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CardActions from '@mui/material/CardActions'

export const AboutMe = () => {

    const onDowloadCV = () => {

    }

    return (
        <Card sx={{display: "flex", flexDirection: "column" , alignItems: 'center',  maxWidth: 345, padding: '10px', paddingTop: '20px'}}>
                <CardMedia 

                    sx={{borderRadius: 30, width: '180px' }} 
                    height="180"  
                    component={"img"}  
                    image='/profile/photo.png' 
                    alt="profile-photo"
                />
                <CardContent>
                    <Typography color={"primary"} textAlign={"center"} variant='h5' component={"div"}>Sobre mi</Typography>
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
    )
}
