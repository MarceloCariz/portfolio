import React from 'react'
import NextLink from 'next/link';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Typography, Box , Grid, Link, Button} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { ProjectSlidesShow } from '@/components/ui/ProjectSlidesShow';
import { ModalProject, TecnologiesList } from '@/components/projects';
import { HomeLayout } from '@/Layout';
import { IProject, projects } from '@/database/seed-data'


interface Props {
    project: IProject;
}

const ProjectPage:NextPage<Props> = ({project}) => {
    const {title, description, images, url, tecnologies} = project;
    return (
        <HomeLayout title={title} pageDescription={description} imageFullUrl={images[0]} >
            <Box display={"flex"} alignItems="center" gap={2} >
                <Typography color="primary" fontSize={{xs: 30, sm: 40}}  variant={"h3"} component={"h2"}>
                    {title}
                </Typography>
                <NextLink href={url} target="_blank" style={{textDecoration: 'none'}}  >
                        <Button variant='text'  endIcon={<LaunchIcon/>}>
                            <Typography variant='subtitle2' color={"white"} fontWeight={500}>Ir a la pagina</Typography>
                        </Button>
                </NextLink>
            </Box>


            <Grid container spacing={3} marginTop={1}>
                <Grid item xs={12} sm={7}>
                    <ProjectSlidesShow images={images}/>
                </Grid>
                <Grid item xs={12} sm={5} display="flex" flexDirection={"column"}>

                    <Typography color="primary"  variant="h4" component={"h2"}>Descripción: </Typography>
                    <Typography color={"primary"}>
                        {description}
                    </Typography>
                    
                    <Box marginTop={2}>
                        <Typography color="primary"  variant="h4" component={"h2"}>Tecnologias Usadas: </Typography>
                        <TecnologiesList  tecnologies={tecnologies}/>
                    </Box>

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