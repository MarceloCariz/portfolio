import { Box, Typography } from '@mui/material'

export const Presentation = () => {
    return (
        <Box  
            // className="fadeIn-presentation"
            marginTop={{xs:3, sm:5}}    marginX={"5px"}>

            <Typography component={"h6"} variant="h6" color="primary" textAlign={{xs:"left",sm:"center"}}>
                ¡Hola!, soy
            </Typography>
            
            <Typography 
                color={"#B6D8FF"}
                
                component={"h1"} 
                variant="h4" 
                textAlign={"left"}
                fontSize={{xs:52,sm:72}}
                fontWeight="800"
                sx={{
                    display:"flex",flexDirection: {xs:"column",sm:"row"}, gap: {xs:1,sm:2}}}
            >
                Marcelo Cariz
                <Typography                
                    color={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 10%, rgba(10,25,41,1) 97%)"}  
                    component={"span"} 
                    variant="h4" 
                    textAlign={"left"}
                    fontSize={{xs:50,sm:72}}
                    fontWeight="800"
                >Silva</Typography>

            </Typography>

            <Typography
                color={"primary"}  
                component={"h2"} 
                variant="h4" 
                textAlign={{xs:"left",sm:"center"}}
                fontSize={25}
                fontWeight="bold"
            >
                Desarrollador Full Stack
            </Typography>

        </Box>
    )
}


{/* <Typewriter
onInit={(typewriter)=> {
    typewriter.pauseFor(4000)
    typewriter.typeString(' Desarrollador Full Stack JS').pauseFor(200).start()
}}
options={{
    cursor: '',

}}
/> */}