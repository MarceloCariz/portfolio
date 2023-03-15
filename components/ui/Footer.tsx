import GitHub from '@mui/icons-material/GitHub'
import {Box, IconButton} from '@mui/material'

export const Footer = () => {
    return (
        <Box height={"100px"}  position="static" marginTop={30} sx={{borderTop: '1px solid white'}}>
            <IconButton>
                <GitHub color="primary"/>
            </IconButton>
        </Box>
    )
}
