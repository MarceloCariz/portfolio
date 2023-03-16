
import useProject from '@/hooks/useProjectContext';
import { Typography } from '@mui/material';
import { motion, Variants } from 'framer-motion'
import React from 'react'
import style from './navbar.module.css';

interface Props {
    isOpen: boolean
}

export const ListMenuNavbar = ({isOpen}:Props) => {
    const {handleScrolling} = useProject();

    return (
        
        <motion.ul
                animate={isOpen ? "show" : "close"}
                style={{ display: isOpen ? "flex" : "none" ,pointerEvents: isOpen ? "auto" : "none", zIndex: 2 }}
                className={style.listmenu}
            >                
                <motion.li
                    whileTap={{ scale: 0.95 }}
                >
                    <Typography onClick={() => handleScrolling('about-me')} component="a" color={"black"}  variant="subtitle1">
                        Sobre mi
                    </Typography>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }}>
                    <Typography onClick={() => handleScrolling('skills')} component="a" color={"black"} variant="subtitle1">
                        Habilidades
                    </Typography>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }}>
                    <Typography onClick={() => handleScrolling('project')} component="a" color={"black"} variant="subtitle1">
                        Proyectos
                    </Typography>
                </motion.li>

        </motion.ul>
    )
}


