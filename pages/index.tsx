import { ListProjects } from "@/components/projects";
import { AboutMe, Presentation, Skills } from "@/components/ui";
import { ListMenuNavbar } from "@/components/ui/ListMenuNavbar";
import { HomeLayout } from "@/Layout";
import { Box } from "@mui/material";


export default function Home() {
  

  return (
    <HomeLayout 
          imageFullUrl="/profile/logo-portfolio.png" 
          title="Marcelo Cariz - Portfolio" 
          pageDescription="Marcelo Cariz - Portfolio"
    >
      <Box display={"flex"} flexDirection="column" alignItems={"center"}  gap={10}>
        <Presentation/>
        <AboutMe/>
        <Skills/>
        <ListProjects/>
      </Box>

    </HomeLayout>
  )
}
