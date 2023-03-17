import React from "react";
import NextImage from 'next/image';
import { CardContent, IconButton, Button, Typography, Chip, Box } from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { IProject } from "@/database/seed-data";
import useUI from "@/hooks/useUiContext";


interface Props {
    project: IProject;
    activeContent: boolean;
}

export const InfoProjectItem = ({project, activeContent}:Props) => {

    const { github, url, tecnologies, description, title} = project;
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
            <CardContent sx={{display:'flex', alignItems:'start', flexDirection:'column'}}>
                <Box>
                    <IconButton href={github} target={"_blank"}>
                        <GitHubIcon color="info" />
                    </IconButton>
                    <IconButton href={url} target={"_blank"}>
                        <WebIcon color="info" />
                    </IconButton>
                    {url === "https://totem.ivaras.cl" && (
                        <Button
                            onClick={toogleOpenProjectModal}
                            variant="contained"
                            endIcon={<LaunchIcon />}
                        >
                            <Typography color={"black"} fontWeight={500}>
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
                        {tecnologies.map((name) => (
                            <Chip
                                key={name}
                                sx={{
                                placeItems: "center",
                                textTransform: "capitalize",
                                fontWeight: "600",
                                color: "white",
                                }}
                                // color='primary'
                                label={name}
                                icon={
                                <NextImage
                                    // fill
                                    width={15}
                                    height={15}
                                    style={{objectFit: 'contain', backgroundBlendMode: "overlay"}}
                                    src={`/logos/${name}.png`}
                                    alt={name}
                                />
                                }
                            />
                        ))}
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