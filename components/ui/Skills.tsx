import Image from "next/image";
import {motion} from 'framer-motion';
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import HandymanIcon from '@mui/icons-material/Handyman';
import { logos } from "@/database/seed-data";
import useProject from "@/hooks/useUiContext";




export const Skills = () => {

    const {skillRef} = useProject();
    return (
        <Box ref={skillRef} display={"flex"} width="70%" flexDirection="column" alignItems={"center"}>
            <Typography display={"flex"} gap={2} alignItems="center" variant="h3" component={"h2"}>
                <HandymanIcon  sx={{fontSize: '50px'}}/>
                Habilidades</Typography>
            <Grid container  justifyContent="center" display={"flex"} spacing={4} marginTop={2}>
                {
                    logos.map((url)=>(
                        <Grid key={url}  item xs={6} sm={4} md={2}  display="flex" justifyContent={"center"}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >   
                            <Tooltip title={url}>
                                <Image 
                                        style={{objectFit: 'contain', backgroundBlendMode: "overlay"}}  
                                        width={90} 
                                        height={90} 
                                        alt={`logo-${url}`} 
                                        src={`/logos/${url}.png`}
                                    />
                            </Tooltip>
                            <Typography 
                                textAlign={"center"} 
                                textTransform="capitalize" 
                                color="primary"
                                fontWeight={"600"}
                            >
                                    {url}
                            </Typography>

                            </motion.div>
                        </Grid> 
                    ))
                }
            </Grid>

        </Box>
    )
}
