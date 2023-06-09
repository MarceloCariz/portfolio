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
            ref={projectRef} 
            display={"flex"} 
            position="relative"
            flexDirection="column" gap={4} 
            alignItems={"center"}
            minHeight="1100px"

        >
            <Typography color="primary" display={"flex"} gap={2} alignItems="center" variant="h3" component={"h2"}>
                <AppsIcon sx={{fontSize: '50px'}}/>
                Proyectos
            </Typography>
            <Grid 
                // sx={{
                //     // display:'flex',
                //     // justifyContent: 'center',
                //     // alignItems: 'center', 

                //    }}   
                container
                flexDirection={{xs: 'column', sm: 'row'}}
                display="flex"
                justifyContent={"center"}
                alignItems={{xs: 'center', sm: 'flex-start'}}
                width={"100%"}
                spacing={4} 
            >
                {
                    projects.map((project) => (
                        <Grid  key={project.title} sx={{width: {xs:'105vw' , sm: '50vw', md: '420px'}}}  item xs={12} sm={6} md={4} >
                            <ProjectItem  project={project}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>  
        </>
        
    )
}
