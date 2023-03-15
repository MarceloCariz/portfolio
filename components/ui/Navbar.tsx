import { Dispatch, SetStateAction, useState } from "react";
import {motion} from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, Link, Toolbar, Typography, Box, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import style from './navbar.module.css';

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}


export const Navbar = ({isOpen, setIsOpen}:Props) => {


    return (

        <AppBar sx={{ borderBottom: '1px white solid', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Toolbar  sx={{ width:{xs: '100%' , md:'80%'}, display: "flex" , justifyContent: "space-between"}}>
                <Link>
                    <Typography color={"white"} variant="h5">Portafolio</Typography>
                </Link>

                <Box sx={{display: {xs: 'none' , md: 'flex'}}} flex={1} justifyContent="center" gap={4}>
                    <Typography sx={{cursor: 'pointer'}} color={"primary"} variant="subtitle1">Sobre Mi</Typography>
                    <Typography sx={{cursor: 'pointer'}} color={"primary"} variant="subtitle1">Habilidades</Typography>
                    <Typography sx={{cursor: 'pointer'}} color={"primary"} variant="subtitle1">Proyectos</Typography>
                    <Typography sx={{cursor: 'pointer'}} color={"primary"} variant="subtitle1">Contacto</Typography>

                </Box>

                <Box display={isOpen ? "none" : "flex"} gap={1} alignItems="center">
                    <IconButton href="https://www.linkedin.com/in/marcelocariz/" target={"_blank"}>
                        <LinkedInIcon color="primary"/>
                    </IconButton>
                    <IconButton href="https://github.com/MarceloCariz" target={"_blank"}>
                        <GitHubIcon  color="primary"/>
                    </IconButton>
                    <IconButton href="mailto:marcelocariz4@gmail.com">
                        <EmailIcon color="primary"/>
                    </IconButton>
                </Box>
                {/* <Box sx={{display: {xs: 'flex' , sm: 'none'}}}> */}
                    <motion.div
                        layout
                        style={{width: isOpen ? '65%' : "20%"}}
                        initial={{ borderRadius: 50 }}
                        className={style.parent}
                        onClick={() => setIsOpen(!isOpen)}
                    > 
                        <motion.div 
                            layout 
                        >
                            <MenuIcon sx={{pt:1 , width: '100px'}}  fontSize="large"/>
                        </motion.div>

                    </motion.div>


                {/* </Box> */}
            </Toolbar>
        </AppBar>

    )
}


