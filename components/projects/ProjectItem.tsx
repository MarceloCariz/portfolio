import {useState} from 'react';
import NextImage from 'next/image';
import {motion} from 'framer-motion';
import {Button,Box, Card, CardMedia, Typography, Link,CardHeader, Chip, IconButton} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { IProject } from '@/database/seed-data';
import { InfoProjectItem } from './';



interface Props {
    project: IProject;
}


export const ProjectItem = ({project}:Props) => {

    const [activeContent, setActiveContent] = useState(false);



    const {id, url, title, images} = project;

    
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            // style={{ zIndex: activeContent ? 2 : 0}}
            
        >
            <Card  
                onMouseOver={() => setActiveContent(true)} 
                onMouseLeave={()=> setActiveContent(false)}>

                <CardHeader 
                    title={title}
                    sx={{cursor: 'default'}}
                    action={<IconButton sx={{pb:1}} href={`/project/${id}`}><LaunchIcon color='primary'/></IconButton>}
                />
                    

            
                <Box position='relative'>
                    <CardMedia 
                        sx={{
                        position: 'relative',
                        objectFit:'cover', 
                        backgroundPosition: 'center-top',
                        height: {xs: 200, sm: 200},
                        filter: activeContent ? 'blur(5px)' : '' ,

                        
                    }} 
                    >
                        <NextImage
                        style={{objectFit: 'cover'}}       
                        fill
                        src={`/projects/${images[0]}`} 
                        sizes="(max-width: 768px) 60vw , (max-width: 1200px) 50vw, (min-width: 768px) 100vw" 
                        alt={title}/>
                    </CardMedia>
                    <Box  display={activeContent ? "flex" : "none"} flexDirection="column" justifyContent="center" alignItems={"center"} >
                        <Box sx={{position: 'absolute',  top: '50%'}}>
                                <Link href={url} target="_blank"  >
                                    <Button variant='contained'  endIcon={<LaunchIcon/>}>
                                        <Typography color={"black"} fontWeight={500}>Ir a {title}</Typography>
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


