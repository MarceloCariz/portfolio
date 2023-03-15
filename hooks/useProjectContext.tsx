import {useContext} from 'react'
import { ProjectContext } from "@/context";




const useProject = () => useContext(ProjectContext);


export default useProject;