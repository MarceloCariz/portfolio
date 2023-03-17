import { TscrollTo, UiState } from "./"


type UiActionType = 
    | {type: '[UI] - ToogleUi'}
    | {type: '[UI] - ToogleNavbarMenu'}
    | {type: '[UI] - ToogleSetScrollTo', payload: {scrollTo: TscrollTo, prevPath: string}}
    | {type: '[UI] - CleanScrollTo'}


export const uiReducer = (state: UiState, action: UiActionType) => {
    switch(action.type){
        case '[UI] - ToogleUi':
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        case '[UI] - ToogleNavbarMenu':
            return {
                ...state,
                isOpenNavbar : !state.isOpenNavbar
            }
        case '[UI] - ToogleSetScrollTo':
            return {
                ...state,
                scrollTo: action.payload.scrollTo,
                prevPath: action.payload.prevPath,
            }
        case '[UI] - CleanScrollTo':
            return{
                ...state,
                scrollTo:'none',
                prevPath: ''
            }
        default:
            return state;
    }
}