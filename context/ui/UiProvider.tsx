import { ScrollTopPositionRef } from '@/utils';
import { useRouter } from 'next/router';
import {useReducer, useRef, useEffect} from 'react'
import { uiReducer, UiContext } from "./";



export type TscrollTo = 'project' | 'skills' | 'about-me' | 'none';
export interface UiState {
    isModalOpen: boolean;
    isOpenNavbar: boolean;
    scrollTo: string | TscrollTo ;
    prevPath: string;
}

const UI_INITIAL_STATE:UiState = {
    isModalOpen: false,
    isOpenNavbar: false,
    scrollTo: 'none',
    prevPath: ''
}


export const UiProvider = ({children}:{children :React.ReactNode}) => {
    
    const [state, dispatch] = useReducer( uiReducer ,UI_INITIAL_STATE);

    const {asPath, push} = useRouter();
    const projectRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if(state.prevPath !== ''  ){

            state.scrollTo === 'about-me' && handleScrolling(state.scrollTo);
            state.scrollTo === 'skills' && handleScrolling(state.scrollTo);
            state.scrollTo === 'project' && handleScrolling(state.scrollTo);
            dispatch({type: '[UI] - CleanScrollTo'});
            return;
        }
    },[asPath])

    const handleScrolling= (nameRef : TscrollTo) => {

        if(asPath !== '/'){
            dispatch({type: '[UI] - ToogleSetScrollTo', payload: {scrollTo: nameRef , prevPath: asPath}})
            push('/')
            return;
        }

        projectRef.current && nameRef === 'project'  && ScrollTopPositionRef(projectRef);

        skillRef.current && nameRef === 'skills' && ScrollTopPositionRef(skillRef);

        aboutMeRef.current && nameRef === 'about-me' && ScrollTopPositionRef(aboutMeRef);

        state.isOpenNavbar && dispatch({type: '[UI] - ToogleNavbarMenu'});

    }

    const toogleOpenProjectModal = () => {
        dispatch({type: '[UI] - ToogleUi'});
    }

    const toogleMenuNavbar= () => {
        dispatch({type: '[UI] - ToogleNavbarMenu'});

    }

    return (
        <UiContext.Provider 
            value={{...state, 
                toogleOpenProjectModal,
                toogleMenuNavbar,
                handleScrolling,
                projectRef,
                skillRef,
                aboutMeRef
            }}>
            {children}
        </UiContext.Provider>
    )
}


            // skillRef.current && skillRef.current.scrollIntoView({behavior:'smooth',block: 'start'})
