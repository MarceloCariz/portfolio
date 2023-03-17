import { Dispatch, SetStateAction } from "react";
import NextImage from 'next/image';
import {motion} from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar,  Link, Toolbar, Typography, Box, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import style from './navbar.module.css';
import useUI from "@/hooks/useUiContext";

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}


export const Navbar = ({isOpen, setIsOpen}:Props) => {

    const {handleScrolling} = useUI();


    return (

        <AppBar sx={{ borderBottom: '1px white solid', display: 'flex', alignItems: 'center', height: 'auto'}}>
            <Toolbar  sx={{ width:{xs: '100%' , md:'70%'}, display: "flex" , justifyContent:'space-between' ,alignItems:"center"}}>
                <Box display={"flex"} justifyContent="center" width={{xs :"20%", sm: "120px"}}>
                    <NextImage 
                        width={38}
                        height={38}
                        src={"/profile/logo-portfolio.png"}
                        alt="logo-portfolio"
                    />
                </Box>
                <Box 
                    sx={{display: {xs: 'none' , md: 'flex'}}} justifyContent="center" gap={4}>
                    <Typography  onClick={() => handleScrolling('about-me')} sx={{cursor: 'pointer'}} color={"primary"} variant="subtitle1">
                        Sobre Mi
                    </Typography>
                    <Typography onClick={() => handleScrolling('skills')}sx={{cursor: 'pointer'}} color={"primary"} variant="subtitle1">
                        Habilidades
                    </Typography>
                    <Typography onClick={() => handleScrolling('project')} sx={{cursor: 'pointer'}} color={"primary"} variant="subtitle1" component={"a"}>Proyectos</Typography>
                    <Typography sx={{cursor: 'pointer'}} color={"primary"} variant="subtitle1">
                        Contacto
                    </Typography>

                </Box>

                <Box 
                    display={isOpen ? "none" : "flex"} gap={1} alignItems="center"
                    
                    >
                    <motion.div
                        animate="show"   
                        transition={{
                            delay: 0.5,
                            x: { duration: 1 },
                            default: { ease: "easeInOut" }
                        }}        
                    >
                        <IconButton translate="yes" href="https://www.linkedin.com/in/marcelocariz/" target={"_blank"}>
                            <LinkedInIcon color="primary"/>
                        </IconButton>
                        <IconButton href="https://github.com/MarceloCariz" target={"_blank"}>
                            <GitHubIcon  color="primary"/>
                        </IconButton>
                        <IconButton href="mailto:marcelocariz4@gmail.com">
                            <EmailIcon color="primary"/>
                        </IconButton>
                    </motion.div>

                </Box >
                
                    <motion.div
                        layout
                        style={{width: isOpen ? '75%' : "20%"}}
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


            </Toolbar>
        </AppBar>

    )
}


