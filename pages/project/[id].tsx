import React from 'react'
import NextLink from 'next/link';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Typography, Box , Grid, Link, Button, Card, CardContent} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { ProjectSlidesShow } from '@/components/ui/ProjectSlidesShow';
import { ModalProject, TecnologiesList } from '@/components/projects';
import { HomeLayout } from '@/Layout';
import { IProject, projects } from '@/database/seed-data'


interface Props {
    project: IProject;
}

const ProjectPage:NextPage<Props> = ({project}) => {
    const {title, description, images, url, tecnologies, features} = project;
    return (
        <HomeLayout title={`${title} - Marcelo Cariz`} pageDescription={description} imageFullUrl={images[0]} >
            <Box  display={"flex"} alignItems="center" justifyContent={"space-between"} gap={2} >
                <Typography color="primary" fontSize={{xs: 27, sm: 40}}  variant={"h3"} component={"h2"}>
                    {title}
                </Typography>
                <NextLink href={url} target="_blank" style={{textDecoration: 'none'}}  >
                        <Button variant='text'  endIcon={<LaunchIcon/>}>
                            <Typography variant='subtitle2' color={"white"} fontWeight={500}>Ir a la pagina</Typography>
                        </Button>
                </NextLink>
            </Box>


            <Grid  container  spacing={3} marginTop={1}>
                <Grid item xs={12} sm={12} lg={7}>
                    <ProjectSlidesShow images={images}/>
                </Grid>
                <Grid item xs={12} sm={12} lg={5} display="flex" flexDirection={"column"}>
                    <Card>

                        <CardContent >
                            <Box className="fadeIn-presentation" display={"flex"} flexDirection="column" gap={1}>
                                <Typography color="primary"  fontSize={{xs: 23, sm: 36}} fontWeight={500} variant="h4" component={"h2"}>Descripción: </Typography>
                                <Typography color={"primary"} >
                                    {description}.
                                </Typography>
                                

                                <Typography  color="primary"  fontSize={{xs: 23, sm: 36}} fontWeight={500} variant="h4" component={"h2"}>
                                    Funcionalidades: 
                                </Typography>
                                <Box 
                                    component={"ol"} 
                                    className="scroll-bar-project-feature" 
                                    maxHeight="400px" 
                                    sx={{overflowY: 'auto'}}
                                >
                                    {features.length > 1 && features.map((feature, i)=>(
                                        <Typography marginBottom={1} key={i} textAlign={"start"} color="primary" component="li" >
                                            {feature}
                                        </Typography>
                                    ))}

                                </Box>

                                <Box marginTop={2}>
                                    <Typography  marginBottom={1} color="primary" fontSize={{xs: 23, sm: 36}} fontWeight={500}  variant="h4" component={"h2"}>Tecnologias Usadas: </Typography>
                                    <TecnologiesList  tecnologies={tecnologies}/>
                                </Box>
                            </Box>



                        </CardContent>
                    </Card>


                </Grid>

            </Grid>
        </HomeLayout>
    )
}



export const getStaticPaths:GetStaticPaths = (ctx) => {
    const ids =  projects.map(({id}) => id.toString());
    const paths = ids.map((id)=> (
        {params : {id}}
    ))

    return{
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = ({params}) => {
    const {id = ''} = params as {id :string};
    const project =  projects.find((project)=> (project.id.toString() === id));

    if(!project){
        return {
            redirect:{
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props:{
            project
        },
        revalidate: 60 * 60 * 24
    }
}



export default ProjectPage