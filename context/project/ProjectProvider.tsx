import {useReducer} from 'react'
import { ProjectContext } from "./ProjectContext";
import { ProjectReducer } from "./projectReducer";


export interface ProjectState {
    isModalOpen: boolean;
}

const PROJECT_INITIAL_STATE:ProjectState = {
    isModalOpen: false
}


export const ProjectProvider = ({children}:{children :React.ReactNode}) => {

    const [state, dispatch] = useReducer( ProjectReducer ,PROJECT_INITIAL_STATE);


    const toogleOpenProjectModal = () => {
        dispatch({type: '[PROJECT] - ToogleProject'});
    }

    return (
        <ProjectContext.Provider value={{...state, toogleOpenProjectModal}}>
            {children}
        </ProjectContext.Provider>
    )
}
