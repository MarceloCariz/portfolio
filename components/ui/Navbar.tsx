import NextImage from 'next/image';
import NextLink from 'next/link';
import {motion} from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar,   Toolbar, Typography, Box, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import style from './navbar.module.css';
import useUI from "@/hooks/useUiContext";




export const Navbar = () => {

    const {handleScrolling, toogleMenuNavbar, isOpenNavbar} = useUI();


    return (

        <AppBar sx={{ borderBottom: '1px white solid', display: 'flex', alignItems: 'center', height: 'auto'}}>
            <Toolbar  sx={{ width:{xs: '100%' , md:'80%'}, display: "flex" , justifyContent:'space-between' ,alignItems:"center"}}>
                <Box display={"flex"} justifyContent="center" alignItems={"center"} width={{xs :"20%", sm: "120px"}}>
                    <NextLink   href={"/"} style={{display:"flex"}}>
                        <NextImage 
                            width={40}
                            height={40}
                            src={"/profile/logo-portfolio.png"}
                            alt="logo-portfolio"
                        />
                    </NextLink>

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
                    display={isOpenNavbar ? "none" : "flex"} gap={1} alignItems="center"
                    
                    >
                    <motion.div
                        animate="show"   
                        transition={{
                            delay: 0.5,
                            x: { duration: 1 },
                            default: { ease: "easeInOut" }
                        }}        
                    >
                        <IconButton  translate="yes" href="https://www.linkedin.com/in/marcelocariz/" target={"_blank"}>
                            <LinkedInIcon   sx={{"&:hover":{color: '#0A66C2'}}} color="primary"/>
                        </IconButton>
                        <IconButton translate="yes" href="https://github.com/MarceloCariz" target={"_blank"}>
                            <GitHubIcon  color="primary"/>
                        </IconButton>
                        <IconButton  translate="yes" href="mailto:marcelocariz4@gmail.com">
                            <EmailIcon color="primary"/>
                        </IconButton>
                    </motion.div>

                </Box >
                
                    <motion.div
                        layout
                        style={{width: isOpenNavbar ? '75%' : "20%"}}
                        initial={{ borderRadius: 50 }}
                        className={style.parent}
                        onClick={toogleMenuNavbar}
                    > 
                        <motion.div layout >
                            {isOpenNavbar 
                                ? (<CloseIcon sx={{pt:1 , width: '100px'}}  fontSize="large"/>)
                                : (<MenuIcon sx={{pt:1 , width: '100px'}}  fontSize="large"/>)
                            }
                            
                        </motion.div>

                    </motion.div>


            </Toolbar>
        </AppBar>

    )
}


