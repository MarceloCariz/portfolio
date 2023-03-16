import {useReducer, useRef} from 'react'
import { uiReducer, UiContext } from "./";


export interface UiState {
    isModalOpen: boolean;
}

const UI_INITIAL_STATE:UiState = {
    isModalOpen: false
}


export const UiProvider = ({children}:{children :React.ReactNode}) => {

    const [state, dispatch] = useReducer( uiReducer ,UI_INITIAL_STATE);

    const projectRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);



    const handleScrolling= (nameRef : 'project' | 'skills' | 'about-me') => {
        if(projectRef.current && nameRef === 'project') {
            projectRef.current.scrollIntoView({behavior:'smooth',block: 'start'})
        };
        if(skillRef.current && nameRef === 'skills') {
            const skillTopPosition = skillRef.current.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: skillTopPosition - 90,
                behavior: 'smooth',
            });
        };
        if(aboutMeRef.current && nameRef === 'about-me') {
            const skillTopPosition = aboutMeRef.current.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: skillTopPosition - 90,
                behavior: 'smooth',
            });
        };
    }

    const toogleOpenProjectModal = () => {
        dispatch({type: '[UI] - ToogleUi'});
    }

    return (
        <UiContext.Provider 
            value={{...state, 
                toogleOpenProjectModal,
                handleScrolling,
                projectRef,
                skillRef,
                aboutMeRef
            }}>
            {children}
        </UiContext.Provider>
    )
}
