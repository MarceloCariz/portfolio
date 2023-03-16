import { Box, Typography, Grid } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import { ProjectItem } from "./";
import { projects } from "@/database/seed-data"
import useUI from "@/hooks/useUiContext";



export const ListProjects = () => {

    const {projectRef} = useUI();

    return (
        <>
        <Box   
            ref={projectRef} display={"flex"} 
            flexDirection="column" gap={4} 
            alignItems={"center"}
            // height={{xs: 'auto',sm:"650px"}}

        >
            <Typography display={"flex"} gap={2} alignItems="center" variant="h3" component={"h2"}>
                <AppsIcon sx={{fontSize: '50px'}}/>
                Proyectos
            </Typography>
            <Grid 
                sx={{
                    display:'flex',
                    // justifyContent: 'center', 

                    flexDirection: {xs: 'column', sm: 'row'}}}   
                container 
                maxHeight={{xs: 'auto',sm:"650px"}}
                spacing={4} 
            >
                {
                    projects.map((project) => (
                        <Grid  key={project.title}   item xs={12} sm={6} md={4} >
                            <ProjectItem  project={project}/>
                        </Grid>
                    ))
                }
            </Grid>
            {/* <Box className="container">
                <iframe className="frame"  src='https://totem.ivaras.cl'></iframe>
            </Box> */}
        </Box>  
        </>
        
    )
}
