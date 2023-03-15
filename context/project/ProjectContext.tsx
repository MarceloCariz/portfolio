
import {createContext, RefObject} from 'react';

interface Props {
    isModalOpen: boolean;
    projectRef: RefObject<HTMLDivElement>;
    skillRef: RefObject<HTMLDivElement>;
    aboutMeRef: RefObject<HTMLDivElement>;
    toogleOpenProjectModal: () => void;
    handleScrolling: (nameRef: 'project' | 'skills' | 'about-me') => void ;
}


export const ProjectContext = createContext({} as Props);