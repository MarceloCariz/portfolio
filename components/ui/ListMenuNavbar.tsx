import React from 'react'
import useUI from '@/hooks/useUiContext';
import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HandymanIcon from '@mui/icons-material/Handyman';
import AppsIcon from '@mui/icons-material/Apps';
import style from './navbar.module.css';

interface Props {
    isOpen: boolean
}

export const ListMenuNavbar = ({isOpen}:Props) => {
    const {handleScrolling} = useUI();

    return (
        
        <motion.ul
                animate={isOpen ? "show" : "close"}
                style={{ display: isOpen ? "flex" : "none" ,pointerEvents: isOpen ? "auto" : "none", zIndex: 2 }}
                className={style.listmenu}
            > 
            <Box >
                <motion.li
                        whileTap={{ scale: 0.95 }}
                    >
                        <Typography 
                            onClick={() => handleScrolling('about-me')} 
                            component="a" 
                            color={"black"}  
                            variant="subtitle1"
                            sx={{display: 'flex', alignItems: 'center', gap: 1}}
                        >
                            <AccountBoxIcon/>
                            Sobre mi
                        </Typography>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }}>
                    <Typography 
                        onClick={() => handleScrolling('skills')} 
                        component="a" 
                        color={"black"} 
                        variant="subtitle1"
                        sx={{display: 'flex', alignItems: 'center', gap: 1}}
                    >
                        <HandymanIcon/>
                        Habilidades
                    </Typography>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }}>
                    <Typography 
                        onClick={() => handleScrolling('project')} 
                        component="a" 
                        color={"black"} 
                        variant="subtitle1"
                        sx={{display: 'flex', alignItems: 'center', gap: 1}}
                    >
                        <AppsIcon/>
                        Proyectos
                    </Typography>
                </motion.li>
            </Box>
        </motion.ul>
    )
}


