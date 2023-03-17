
import {createContext, RefObject, Dispatch, SetStateAction} from 'react';

interface Props {
    isModalOpen: boolean;
    projectRef: RefObject<HTMLDivElement>;
    skillRef: RefObject<HTMLDivElement>;
    aboutMeRef: RefObject<HTMLDivElement>;
    isOpenNavbar: boolean;
    toogleOpenProjectModal: () => void;
    toogleMenuNavbar: () => void;
    handleScrolling: (nameRef: 'project' | 'skills' | 'about-me') => void ;
}


export const UiContext = createContext({} as Props);