import React from "react";
import NextLink from 'next/link';
import { CardContent, IconButton, Button, Typography, Chip, Box , Link} from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { IProject } from "@/database/seed-data";
import useUI from "@/hooks/useUiContext";
import { TecnologiesList } from "./TecnologiesList";


interface Props {
    project: IProject;
    activeContent: boolean;
}

export const InfoProjectItem = ({project, activeContent}:Props) => {

    const { github, url, tecnologies, description, title, id} = project;
    const { toogleOpenProjectModal} = useUI();

    return (
        <motion.div
        style={{
            position: "relative",
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
        }}
        variants={variants}
        animate={activeContent ? "open" : "closed"}
        >
            <CardContent sx={{display:'flex', alignItems:'start', flexDirection:'column', gap: 1}}>
                <Box display={"flex"} gap={1} alignItems="center" flexWrap={"wrap"}>
                    <IconButton href={github} target={"_blank"}>
                        <GitHubIcon color="info" />
                    </IconButton>

                    <Box height={50} display="flex" justifyContent={"center"} alignItems="center">
                        <NextLink  href={`/project/${id}`} passHref legacyBehavior>
                            <Button variant="text" startIcon={<WebIcon/>}>
                                <Link fontSize={14} fontWeight={600} color={"white"}  component="button">Ver mas</Link>
                            </Button>
                        </NextLink>
                    </Box>
                    {url === "https://totem.ivaras.cl" && (
                        <Button
                            onClick={toogleOpenProjectModal}
                            variant="contained"
                            sx={{width: 'auto', height: '90%'}}
                            endIcon={<LaunchIcon />}
                        >
                            <Typography color={"black"} fontSize={14} fontWeight={500}>
                            Ver pagina ajustada
                            </Typography>
                        </Button>
                    )}
                </Box>



                <Box display={"flex"} flexDirection="column" gap={1}>
                    <Typography color={"primary"}>
                        <Typography fontWeight={700} component="span">
                        Proyecto:{" "}
                        </Typography>
                        {title}
                    </Typography>
                    <Typography color={"primary"}>
                        <Typography fontWeight={700} component="span">
                        Descripción:{" "}
                        </Typography>
                        {description}.
                    </Typography>

                    <Box display={"flex"} flexWrap="wrap" gap={1}>
                        <TecnologiesList tecnologies={tecnologies}/>
                    </Box>
                </Box>
            </CardContent>
        </motion.div>
    );
};

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}