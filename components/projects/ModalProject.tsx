import { Modal, Box, Button, Grid ,IconButton, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import useProject from '@/hooks/useUiContext';




export const ModalProject = () => {

    const {isModalOpen, toogleOpenProjectModal} = useProject();

    return (
            <Modal  onClose={toogleOpenProjectModal} open={isModalOpen}>

                <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                        sx={{ outline: 'none' }}
                        >
                        <Box p={2} sx={{width: 400, height: 800 }}>
                            <iframe
                            src={'https://totem.ivaras.cl'}
                            width="1080"
                            height="1920"
                            allowFullScreen
                            style={{
                                transform: 'scale(0.34)',
                                transformOrigin: 'top left ',
                            }}
                            ></iframe>

                        </Box>
                        <Box sx={{ position: 'absolute', bottom: '14%', left: {xs: '40%', sm: '48%'}, right: 0 }}>
                                <Button color="error" onClick={toogleOpenProjectModal} startIcon={<CloseIcon fontSize={"large"}  />}>
                                    Cerrar
                                </Button>
                        </Box>
                </Grid>


            </Modal>

    )
}
