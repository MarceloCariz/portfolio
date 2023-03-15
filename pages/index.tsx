import { ListProjects } from "@/components/projects";
import { ModalProject } from "@/components/projects/ModalProject";
import { AboutMe, Presentation, Skills } from "@/components/ui";
import { ListMenuNavbar } from "@/components/ui/ListMenuNavbar";
import { HomeLayout } from "@/Layout";
import { Box } from "@mui/material";
import { useState } from "react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HomeLayout setIsOpen={setIsOpen} isOpen={isOpen} title="Portfolio - Marcelo Cariz" pageDescription="Portfolio - Marcelo Cariz">
      <Box display={"flex"} flexDirection="column" alignItems={"center"}  gap={15}>
        <ListMenuNavbar isOpen={isOpen}/>
        <Presentation/>
        <AboutMe/>
        <Skills/>
        <ListProjects/>
        <ModalProject/>
      </Box>
    </HomeLayout>
  )
}
