import {useState} from 'react';
import {motion} from 'framer-motion';
import {Button,Box, Card, CardMedia, IconButton, CardContent, Typography, Link,CardHeader} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import LaunchIcon from '@mui/icons-material/Launch';
import { IProject } from '@/database/seed-data';
import { ModalProject } from './ModalProject';
import useProject from '@/hooks/useProjectContext';



interface Props {
    project: IProject;
}


export const ProjectItem = ({project}:Props) => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [activeContent, setActiveContent] = useState(false);
    const {isModalOpen, toogleOpenProjectModal} = useProject();


    const {url, title,description, image, github} = project;
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            style={{width: 'content-fit'}}
        >
            <Card    onMouseOver={() => setActiveContent(true)} onMouseLeave={()=> setActiveContent(false)}>
                {/* <CardHeader 
                    sx={{pt: '-30px', 
                        backgroundColor: 'rgb(20,36,52, .95)',
                        position: 'absolute', 
                        display: activeContent ? 'flex' : 'none',
                        zIndex: 2,width: {xs:'300px' , sm: '400px'}, borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}  
                    title={title} /> */}
                <CardHeader title={title}/>

                

                <Box position={"relative"}>
                    <CardMedia 
                        sx={{objectFit:'cover', 
                        backgroundPosition: 'center',backgroundAttachment: 'fixed',
                        filter: activeContent ? 'blur(5px)' : '' , width: {xs:'content-fit' , sm: '500px'}}} 
                        component={"img"} 
                        height={200}
                        src={`/projects/${image}`} 
                        alt={title}
                    />

                
  
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
                        <motion.div 
                            style={{position: 'relative', opacity: 0, transition: 'opacity 0.3s ease-in-out', display: 'grid'}}
                            variants={variants} animate={activeContent ? "open" : "closed"}
                        >
                            <CardContent>
                                <IconButton href={github} target={"_blank"}>
                                    <GitHubIcon color='info'/>
                                </IconButton>
                                <IconButton  href={url} target={"_blank"}>
                                    <WebIcon color='info'/>
                                </IconButton>
                                {
                                        url === 'https://totem.ivaras.cl' && (
                                            // <>
                                                <Button onClick={toogleOpenProjectModal} variant='contained'  endIcon={<LaunchIcon/>}>
                                                    <Typography color={"black"} fontWeight={500}>Ver pagina ajustada</Typography>
                                                </Button>
                                            // </>

                                        )
                                    }
                                <Box>
                                    <Typography color={"primary"}>Proyecto: {title}</Typography>
                                    <Typography color={"primary"}>Descripcion: {description}</Typography>
                                </Box>

                            </CardContent>
                        </motion.div>

                        
                    )
                }
            </Card>

        </motion.div>

    )
}


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}