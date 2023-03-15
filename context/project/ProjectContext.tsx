
import {createContext} from 'react';

interface Props {
    isModalOpen: boolean;
    toogleOpenProjectModal: () => void;
}


export const ProjectContext = createContext({} as Props);