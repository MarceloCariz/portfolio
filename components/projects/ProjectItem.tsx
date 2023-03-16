import {useState} from 'react';
import NextImage from 'next/image';
import {motion} from 'framer-motion';
import {Button,Box, Card, CardMedia, Typography, Link,CardHeader, Chip} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { IProject } from '@/database/seed-data';
import { InfoProjectItem } from './';



interface Props {
    project: IProject;
}


export const ProjectItem = ({project}:Props) => {

    const [activeContent, setActiveContent] = useState(false);


    const {url, title, image} = project;

    
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            
        >
            <Card  sx={{ width: {xs:'330px' , sm: '450px'}}}  onMouseOver={() => setActiveContent(true)} onMouseLeave={()=> setActiveContent(false)}>

                <CardHeader title={title}/>

            
                <Box position="relative">
                    <CardMedia 
                        sx={{
                        position: 'relative',
                        objectFit:'cover', 
                        backgroundPosition: 'center-top',
                        height: {xs: 200, sm: 260},
                        filter: activeContent ? 'blur(5px)' : '' ,

                        
                    }} 
                    >
                        <NextImage
                        style={{objectFit: 'cover'}}       
                        fill
                        src={`/projects/${image}`} 
                        sizes="(max-width: 768px) 60vw , (max-width: 1200px) 50vw, (min-width: 768px) 100vw" 
                        alt={title}/>
                    </CardMedia>
                    <Box  visibility={activeContent ? "visible" : "hidden"} display={"flex"} flexDirection="column" justifyContent="center" alignItems={"center"} >
                        <Box sx={{position: 'absolute',  top: '50%'}}>
                                <Link href={url} target="_blank"  >
                                    <Button variant='contained'  endIcon={<LaunchIcon/>}>
                                        <Typography color={"black"} fontWeight={500}>Ir a la pagina</Typography>
                                    </Button>
                                </Link>
                        </Box>
                    </Box>
                </Box>
                
                {
                    activeContent && (
                        <InfoProjectItem project={project} activeContent={activeContent}/>
                    )
                }
            </Card>

        </motion.div>

    )
}


